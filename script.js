document.addEventListener('DOMContentLoaded', () => {
    
    // --- [1] 데이터 로딩 ---
    document.getElementById('name').innerText = config.profile.name;
    document.getElementById('uni').innerText = config.profile.university;
    document.getElementById('scholar-link').href = config.profile.scholar;
    document.getElementById('rg-link').href = config.profile.researchgate;
    document.getElementById('footer-name').innerText = config.profile.name;
    document.getElementById('year').innerText = new Date().getFullYear();

    const labLink = document.getElementById('lab-link');
    if(config.profile.labUrl) {
        labLink.href = config.profile.labUrl;
    }

    // 이메일 팝업 및 복사
    const emailTooltip = document.getElementById('email-tooltip-text');
    const emailBtn = document.getElementById('email-btn');
    const myEmail = config.profile.email;
    emailTooltip.innerText = myEmail;
    emailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(myEmail).then(() => {
            const originalText = emailTooltip.innerText;
            emailTooltip.innerText = "✅ Copied to clipboard!";
            emailTooltip.style.color = "#76ff03";
            setTimeout(() => {
                emailTooltip.innerText = originalText;
                emailTooltip.style.color = "#fff";
            }, 2000);
        });
    });

    // Education
    const eduList = document.getElementById('edu-list');
    config.education.forEach(edu => {
        const li = document.createElement('li');
        li.className = 'tilt-card'; 
        li.innerHTML = `
            <span class="edu-date">${edu.date}</span>
            <div class="edu-title">${edu.title}</div>
            <div style="color: var(--text-dim);">${edu.place}</div>
        `;
        eduList.appendChild(li);
    });

    // Publications
    const pubList = document.getElementById('pub-list');
    config.publications.forEach(pub => {
        const li = document.createElement('li');
        li.className = 'tilt-card';
        let buttonHtml = '';
        if (pub.link && pub.link !== "#") {
            buttonHtml = `
                <a href="${pub.link}" target="_blank" class="soil-btn" style="display:inline-flex; margin-top:15px; font-size:0.8rem; padding: 8px 16px; background:rgba(255,255,255,0.05);">
                    <span class="material-icons-round" style="font-size:1rem;">description</span> View Paper
                </a>
            `;
        }
        li.innerHTML = `
            <div style="color: var(--text-dim); font-size:0.9rem;">[${pub.year}] ${pub.authors}</div>
            <div class="pub-title">${pub.title}</div>
            <span class="pub-journal">${pub.journal}</span><br>
            ${buttonHtml}
        `;
        pubList.appendChild(li);
    });

    // ⭐ [NEW] Gallery 렌더링 및 모달 연결 ⭐
    const gallery = document.getElementById('gallery-grid');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.querySelector('.close-btn');

    config.projects.forEach(proj => {
        const div = document.createElement('div');
        div.className = 'gallery-card tilt-card';
        div.innerHTML = `
            <div class="gallery-img-wrapper">
                <img src="${proj.image}" alt="${proj.title}" onclick="openModal(this)">
            </div>
            <div class="gallery-content">
                <h3>${proj.title}</h3>
                <p>${proj.description}</p>
            </div>
        `;
        gallery.appendChild(div);
    });

    // 모달 열기 함수 (전역 범위로 설정하여 HTML에서 호출 가능하게 함)
    window.openModal = function(imgElement) {
        modal.classList.add('active'); // 모달 표시
        modalImg.src = imgElement.src; // 클릭한 이미지 주소 넣기
        modalCaption.innerText = imgElement.alt; // 캡션(제목) 넣기
        document.body.style.overflow = 'hidden'; // 배경 스크롤 막기
    }

    // 모달 닫기 함수
    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => {
            modalImg.src = ''; // 이미지 초기화
        }, 300); // 트랜지션 시간 이후 초기화
        document.body.style.overflow = 'auto'; // 스크롤 다시 허용
    }

    // 닫기 버튼 클릭 시 닫기
    closeBtn.addEventListener('click', closeModal);

    // 모달 배경 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // 이미지 영역 밖을 클릭했을 때만
            closeModal();
        }
    });


    // --- [2] 텍스트 타이핑 효과 ---
    const bioText = config.profile.bio;
    const bioElement = document.getElementById('typewriter-bio');
    let i = 0;
    setTimeout(() => {
        bioElement.classList.add('typing-cursor');
        function typeWriter() {
            if (i < bioText.length) {
                bioElement.innerHTML += bioText.charAt(i);
                i++;
                setTimeout(typeWriter, 40);
            } else {
                bioElement.classList.remove('typing-cursor');
            }
        }
        typeWriter();
    }, 500);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) entry.target.classList.add('active');
        });
    });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // --- [3] 애니메이션: Clean & Subtle "Soil Breathing" ---
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;
    let mouse = { x: null, y: null, radius: 100 }

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.directionX = (Math.random() * 0.4) - 0.2;
            this.directionY = (Math.random() * 0.4) - 0.2;
            this.size = (Math.random() * 3) + 1;
            this.opacity = Math.random() * 0.5 + 0.1; 
            this.color = `rgba(118, 255, 3, ${this.opacity})`;
            this.density = (Math.random() * 30) + 1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.shadowBlur = 10;
            ctx.shadowColor = "rgba(118, 255, 3, 0.5)";
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
        update() {
            this.x += this.directionX;
            this.y += this.directionY;
            if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            if (distance < mouse.radius) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (mouse.radius - distance) / mouse.radius;
                const directionX = forceDirectionX * force * this.density;
                const directionY = forceDirectionY * force * this.density;
                this.x -= directionX;
                this.y -= directionY;
            }
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 15000; 
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
    }
    init();
    animate();
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    // 3D Tilt Card
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});
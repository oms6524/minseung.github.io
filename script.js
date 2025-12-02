document.addEventListener('DOMContentLoaded', () => {
    
    // [1] 데이터 로딩
    document.getElementById('name').innerText = config.profile.name;
    document.getElementById('uni').innerText = config.profile.university;
    document.getElementById('scholar-link').href = config.profile.scholar;
    document.getElementById('rg-link').href = config.profile.researchgate;
    document.getElementById('footer-name').innerText = config.profile.name;
    document.getElementById('year').innerText = new Date().getFullYear();

    const labLink = document.getElementById('lab-link');
    if(config.profile.labUrl) labLink.href = config.profile.labUrl;

    // 이메일 기능
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

    // Awards
    const awardList = document.getElementById('award-list');
    if(config.awards && awardList) {
        config.awards.forEach(award => {
            const li = document.createElement('li');
            li.className = 'tilt-card';
            li.innerHTML = `
                <span class="edu-date">${award.date}</span>
                <div class="edu-title" style="font-size:1.1rem;">${award.title}</div>
                <div style="color: var(--text-dim); font-size:0.95rem;">${award.org}</div>
            `;
            awardList.appendChild(li);
        });
    }

    // Patents
    const patentList = document.getElementById('patent-list');
    if(config.patents && patentList) {
        config.patents.forEach(pat => {
            const li = document.createElement('li');
            li.className = 'tilt-card';
            
            let noteHtml = '';
            if(pat.note) {
                noteHtml = `<div style="margin-top:8px; color:#76ff03; font-weight:600; font-size:0.9rem;">✨ ${pat.note}</div>`;
            }

            li.innerHTML = `
                <div class="pub-title" style="margin-bottom:5px;">${pat.title}</div>
                <div style="color: var(--text-dim); font-size:0.9rem; margin-bottom:4px;">${pat.number}</div>
                <div style="color: #ccc; font-size:0.9rem; line-height:1.5;">${pat.inventors}</div>
                ${noteHtml}
            `;
            patentList.appendChild(li);
        });
    }

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

    // Gallery & Modal
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

    window.openModal = function(imgElement) {
        modal.classList.add('active');
        modalImg.src = imgElement.src;
        modalCaption.innerText = imgElement.alt;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => { modalImg.src = ''; }, 300);
        document.body.style.overflow = 'auto';
    }
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });


    // [2] 타이핑 효과
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


    // [3] Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    revealElements.forEach(el => revealObserver.observe(el));


    // [4] Soil Breathing Animation
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

    const cardElements = document.querySelectorAll('.tilt-card');
    cardElements.forEach(card => {
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


    // 👇 [5] ⭐ EASTER EGG (5번 클릭 트리거) ⭐
    let clickCount = 0;
    let clickTimer;
    const easterOverlay = document.getElementById('easter-egg-overlay');

    // 화면 아무곳이나 클릭할 때 감지
    document.addEventListener('click', (e) => {
        // 버튼이나 링크, 이미지를 클릭했을 때는 카운트하지 않음 (오작동 방지)
        if (e.target.closest('a') || e.target.closest('button') || e.target.closest('img')) {
            return;
        }

        // 연속 클릭 카운트
        clickCount++;
        
        // 1초 동안 클릭이 없으면 카운트 리셋
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 1000);

        // 5번 클릭 달성 시
        if (clickCount === 5) {
            triggerEasterEgg();
            clickCount = 0; // 리셋
        }
    });

    function triggerEasterEgg() {
        easterOverlay.classList.add('active');
        
        // 이스터에그 화면 클릭하면 다시 닫기
        easterOverlay.addEventListener('click', () => {
            easterOverlay.classList.remove('active');
        }, { once: true }); // 한 번만 실행하고 이벤트 삭제
    }
});
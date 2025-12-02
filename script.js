// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. 프로필 렌더링
    document.getElementById('name').innerText = config.profile.name;
    document.getElementById('role').innerText = config.profile.role;
    document.getElementById('uni').innerText = config.profile.university;
    document.getElementById('bio').innerText = config.profile.bio;
    
    const emailLink = document.getElementById('email-link');
    emailLink.href = `mailto:${config.profile.email}`;
    emailLink.innerText = "Email";

    document.getElementById('scholar-link').href = config.profile.scholar;
    document.getElementById('github-link').href = config.profile.github;

    // 2. Education 렌더링
    const eduList = document.getElementById('edu-list');
    config.education.forEach(edu => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="date">${edu.date}</span> <strong>${edu.title}</strong>, ${edu.place}`;
        eduList.appendChild(li);
    });

    // 3. Publications 렌더링
    const pubList = document.getElementById('pub-list');
    config.publications.forEach(pub => {
        const li = document.createElement('li');
        li.innerHTML = `[${pub.year}] ${pub.authors}. <a href="${pub.link}" target="_blank">"${pub.title}"</a>. <i>${pub.journal}</i>`;
        pubList.appendChild(li);
    });

    // 4. Gallery 렌더링
    const gallery = document.getElementById('gallery-grid');
    config.projects.forEach(proj => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="${proj.image}" alt="${proj.title}">
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
        `;
        gallery.appendChild(div);
    });
});
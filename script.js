const skills = ['C Programming', 'HTML5', 'CSS3', 'JavaScript', 'Git', 'Data Structures', 'Linux'];

const container = document.getElementById('skills-container');

// Dynamically load skills
skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'skill-tag';
    span.innerText = skill;
    container.appendChild(span);
});

// Simple Console Greeting for recruiters
console.log("Welcome to Mohan G S's Digital Resume 2026!");


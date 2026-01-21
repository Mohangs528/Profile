async function getRepos() {
    const user = 'Mohangs528';
    const container = document.getElementById('repo-container');
    try {
        const response = await fetch(`https://api.github.com{user}/repos?sort=updated&per_page=4`);
        const repos = await response.json();
        container.innerHTML = repos.map(repo => `
            <div class="repo-item">
                <h4 style="margin:0; color:#3b82f6;">${repo.name}</h4>
                <p style="font-size:0.8rem; color:#94a3b8;">${repo.description || 'CS Diploma Project'}</p>
                <a href="${repo.html_url}" target="_blank" style="color:white; font-size:0.7rem;">Code →</a>
            </div>
        `).join('');
    } catch (err) {
        container.innerHTML = '<p>Check my GitHub for projects.</p>';
    }
}
getRepos();

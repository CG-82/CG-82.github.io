async function fetchGitHubRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch repositories");
        }
        const repos = await response.json();
        return repos;
    } catch (error) {
        console.error(error);
        return [];
    }
}

function renderProjects(repos) {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;

    

    repos.forEach(repo => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-card';
        projectDiv.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description ? repo.description : "No description provided."}</p>
            <p><strong>⭐ Stars:</strong> ${repo.stargazers_count}</p>
            <p><strong>Language:</strong> ${repo.language ? repo.language : "N/A"}</p>
        `;
        projectsSection.appendChild(projectDiv);
    });
}


 fetchGitHubRepos('CG-82').then(repos => console.log(repos));
 fetchGitHubRepos('CG-82').then(renderProjects);
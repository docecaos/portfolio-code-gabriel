function openProjects() {
    const hubContainer = document.getElementById('hub-container');
    const projectContainer = document.getElementById('project-container');

    hubContainer.style.overflow = "hidden";
    hubContainer.style.opacity = '0';
    projectContainer.style.width = '100%';
    projectContainer.style.height = 'auto';


    setTimeout(() => {
        hubContainer.style.display = 'none';
        projectContainer.style.display = 'flex';
    }, 75); 

    setTimeout(() => {
        projectContainer.style.opacity = '1';
    }, 150); 
}

function closeProjects() {
    const hubContainer = document.getElementById('hub-container');
    const projectContainer = document.getElementById('project-container');

    projectContainer.style.opacity = '0';

    setTimeout(() => {
        projectContainer.style.display = 'none';
        hubContainer.style.display = 'flex';
    }, 75);

    setTimeout(() => {
        hubContainer.style.overflow = "visible";
        hubContainer.style.opacity = '1';
        projectContainer.style.width = '0';
        projectContainer.style.height = '0';
    }, 150);
}

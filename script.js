// Navigation Toggle for Mobile
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    const isOpen = !navLinks.classList.contains('hidden');
    navToggle.querySelector('i').classList.toggle('fa-bars', !isOpen);
    navToggle.querySelector('i').classList.toggle('fa-times', isOpen);
});

// Tab Toggle Functionality for Skills, Experience, Education
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    const tabTitle = tab.querySelector('.tab-title');
    const description = tab.querySelector('.description');

    tabTitle.addEventListener('click', () => {
        // Close all other descriptions
        tabs.forEach(otherTab => {
            if (otherTab !== tab) {
                otherTab.querySelector('.tab-title').classList.remove('active');
                otherTab.querySelector('.description').classList.remove('active');
            }
        });

        // Toggle the clicked tab's description
        const isActive = tabTitle.classList.contains('active');
        tabTitle.classList.toggle('active', !isActive);
        description.classList.toggle('active', !isActive);
    });
});
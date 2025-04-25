/// Toggle functionality for mobile
document.getElementById('nav-toggle').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    const icon = this.querySelector('i');
    navLinks.classList.toggle('hidden');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
  
  // Ensure links are visible on desktop when resizing
  window.addEventListener('resize', function () {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth >= 768) {
      navLinks.classList.remove('hidden'); // Remove hidden on desktop
      const icon = document.querySelector('#nav-toggle i');
      icon.classList.add('fa-bars'); // Reset icon to bars
      icon.classList.remove('fa-times');
    }
  });
  
  // Run on initial load to ensure correct state
  if (window.innerWidth >= 768) {
    document.querySelector('.nav-links').classList.remove('hidden');
  }

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
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
        // contact form
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  const submitButton = form.querySelector("button[type='submit']");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    // Change button text to "Sending..." and disable it
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;
    submitButton.classList.add("sending");

    // Collect form data
    const formData = new FormData(form);
    formData.append("_next", "/thank-you.html"); // Add redirect URL

    // Submit to Formspree via AJAX
    fetch("https://formspree.io/f/unique-id", {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        window.location.href = "/thank-you.html"; // Redirect on success
      } else {
        throw new Error("Form submission failed");
      }
    }).catch(error => {
      alert("Failed to send message: " + error.message);
      submitButton.textContent = "Send Message";
      submitButton.disabled = false;
      submitButton.classList.remove("sending");
    });
  });
});

/*skills*/

  // Nested tabs logic
  const nestedTabBtns = document.querySelectorAll(".nested-tab-btn");
  const nestedContents = document.querySelectorAll(".nested-tab-content");

  nestedTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      nestedTabBtns.forEach(b => b.classList.remove("active"));
      nestedContents.forEach(c => c.classList.add("hidden"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-target");
      document.getElementById(target).classList.remove("hidden");
    });
  });

  // Ensure default skills content is visible when Skills tab is clicked
  const skillsTabTitle = document.querySelector("#skills-tab .tab-title");
  skillsTabTitle.addEventListener("click", () => {
    // Trigger Technical Skills by default
    const defaultBtn = document.querySelector('.nested-tab-btn[data-target="technical-skills"]');
    if (defaultBtn) defaultBtn.click();
  });

  // Optional: If keyboard is used (via tabindex), include focus/enter too
  skillsTabTitle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const defaultBtn = document.querySelector('.nested-tab-btn[data-target="technical-skills"]');
      if (defaultBtn) defaultBtn.click();
    }
  });


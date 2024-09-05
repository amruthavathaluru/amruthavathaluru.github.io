document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-form');
    const contactForm = document.getElementById('contact-form');
  
    toggleButton.addEventListener('click', function () {
      contactForm.classList.toggle('hidden');
      // Change button text based on form visibility
      if (contactForm.classList.contains('hidden')) {
        toggleButton.textContent = 'Send Message';
      } else {
        toggleButton.textContent = 'Hide Form';
      }
    });
  });
  
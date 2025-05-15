document.addEventListener('DOMContentLoaded', () => {
  // Highlight current nav link
  const navLinks = document.querySelectorAll('nav ul li a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // Contact form validation and submission
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name) {
        alert('Please enter your name.');
        form.name.focus();
        return;
      }

      if (!email || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        form.email.focus();
        return;
      }

      if (!message) {
        alert('Please enter your message.');
        form.message.focus();
        return;
      }

      // If all fields valid, simulate form submission
      alert('Thank you for contacting us, ' + name + '! Your message has been received.');
      form.reset();
    });
  }

  // Email validation helper function
  function validateEmail(email) {
    // Simple regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});

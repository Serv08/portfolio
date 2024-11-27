function toggleContactBox() {
  const overlay = document.getElementById('contact-overlay');
  if (overlay.classList.contains('active')) {
    // Start fade-out animation
    overlay.classList.remove('active');
    setTimeout(() => {
      overlay.style.display = 'none'; // Hide after animation
    }, 300); // Match the CSS transition duration
  } else {
    // Start fade-in animation
    overlay.style.display = 'flex';
    setTimeout(() => {
      overlay.classList.add('active');
    }, 10); // Small delay to ensure animation triggers
  }
}

// Close when clicking outside the contact box
document.addEventListener('click', function (event) {
  const overlay = document.getElementById('contact-overlay');
  const contactBox = document.getElementById('contact-box');
  if (overlay.classList.contains('active') && !contactBox.contains(event.target) && !event.target.closest('a[href="#"]')) {
    toggleContactBox();
  }
});

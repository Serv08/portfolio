
document.querySelectorAll('.skills-box a').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Close all categories first
    const allCategories = document.querySelectorAll('.skills-category');
    allCategories.forEach(category => {
      if (category !== this.closest('.skills-category')) {
        category.classList.remove('active');
      }
    });

    // Toggle the active state for the clicked category
    const category = this.closest('.skills-category');
    category.classList.toggle('active');
  });
});


function toggleExperience() {
  const experienceContent = document.getElementById('experience-content');
  const isHidden = experienceContent.style.display === 'none' || !experienceContent.style.display;
  experienceContent.style.display = isHidden ? 'block' : 'none';
}


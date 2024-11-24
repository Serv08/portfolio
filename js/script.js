// Select filter buttons and project boxes
const filterButtons = document.querySelectorAll('.filter-buttons button');
const projectBoxes = document.querySelectorAll('.project-box');

// Add click event listeners to filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-category');

    // Track if any project is visible
    let anyVisible = false;

    // Loop through all project boxes
    projectBoxes.forEach(box => {
      if (filter === 'all' || box.getAttribute('data-category').includes(filter)) {
        box.classList.remove('hidden'); // Show matching projects
        anyVisible = true;
      } else {
        box.classList.add('hidden'); // Hide non-matching projects
      }
    });

    // If no projects are visible, you can handle empty states (optional)
    if (!anyVisible) {
      document.querySelector('.project-list').style.justifyContent = 'center';
    }
  });
});


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



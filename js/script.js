// Filter projects by category
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });
  }
  
  // Initial load: show all projects
  document.addEventListener('DOMContentLoaded', () => filterProjects('all'));
  
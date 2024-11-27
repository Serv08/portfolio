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


// Search function
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("search-input").addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const projectBoxes = document.querySelectorAll(".project-box");

    projectBoxes.forEach(box => {
      // Get the title
      const title = box.querySelector("h3").textContent.toLowerCase();

      // Get the description
      const descriptionElement = box.querySelector("p");
      const description = descriptionElement ? descriptionElement.textContent.toLowerCase() : "";

      // Get the tools
      const toolsElements = box.querySelectorAll(".tools");
      let tools = "";
      toolsElements.forEach(tool => {
        tools += tool.textContent.toLowerCase() + " ";
      });

      // Check if any of the content matches the search term
      if (title.includes(searchTerm) || description.includes(searchTerm) || tools.includes(searchTerm)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
});


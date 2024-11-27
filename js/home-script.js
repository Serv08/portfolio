function toggleExperience() {
  const experienceContent = document.getElementById('experience-content');
  const isHidden = experienceContent.style.display === 'none' || !experienceContent.style.display;
  experienceContent.style.display = isHidden ? 'block' : 'none';
}

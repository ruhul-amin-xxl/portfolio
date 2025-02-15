function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add scroll animations
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    if (sectionTop < window.innerHeight && sectionBottom > 0) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    } else {
      section.style.opacity = 0;
      section.style.transform = "translateY(50px)";
    }
  });
});


window.addEventListener('load', function() {
  // Hide the loader once the page is fully loaded
  document.querySelector('.loader').style.display = 'none';
  // Show the content
  document.querySelector('.content').style.display = 'block';
});
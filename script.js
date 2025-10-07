// script.js (COMPLETE INTERACTIVITY LOGIC)

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio site loaded successfully!");
  
  // --- Start Typing Effect Logic ---
  const typedTextSpan = document.getElementById("typed-text");
  const textToType = "Uday"; 
  const typingSpeed = 150; 
  const newTextDelay = 1500; 
  let charIndex = 0;
  
  function type() {
    if (charIndex < textToType.length) {
      typedTextSpan.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } 
  }
  setTimeout(type, newTextDelay); 
  // --- End Typing Effect Logic ---
  

  // --- Start Mobile Menu Logic ---
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  function toggleMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  }

  navToggle.addEventListener('click', toggleMenu);

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      // Close menu when a link is clicked
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  // --- End Mobile Menu Logic ---


  // --- Start Scroll Animation Logic (Intersection Observer) ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add 'visible' class to trigger fade-in/slide-up
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, {
      // Triggers when 10% of the element is visible
      threshold: 0.1, 
  });

  // Target all elements with the 'hidden' class for observation
  document.querySelectorAll('.hidden').forEach((element) => {
    observer.observe(element);
  });
  // --- End Scroll Animation Logic ---


  // --- Start Lightbox/Zoom Logic ---

  const lightbox = document.getElementById('lightbox-overlay');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeButton = document.getElementById('lightbox-close');
  // Target the image elements within the certification section
  const certImages = document.querySelectorAll('.cert-image');

  // Function to open the lightbox
  certImages.forEach(img => {
    img.addEventListener('click', () => {
      const fullImgSrc = img.getAttribute('data-full-img');
      lightboxImage.src = fullImgSrc;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  // Function to close the lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
  }

  // Close when the 'X' is clicked
  closeButton.addEventListener('click', closeLightbox);

  // Close when the dark background is clicked
  lightbox.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox-overlay') {
      closeLightbox();
    }
  });

  // Close when the ESC key is pressed
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
  
  // --- End Lightbox/Zoom Logic ---
});

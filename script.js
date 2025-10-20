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
        // If the revealed element is a skill card, animate its progress bar
        if (entry.target.classList && entry.target.classList.contains('skill-card')) {
          animateProgressBar(entry.target);
        }
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

  // Animate progress bars for skill cards
  function animateProgressBar(skillCard) {
    const progressBar = skillCard.querySelector('.progress-bar');
    const percentageText = skillCard.querySelector('.progress-percentage');
    if (!progressBar) return;
    
    // Parse and clamp progress value to 0-100 range
    const rawProgress = parseInt(progressBar.getAttribute('data-progress'), 10) || 0;
    const targetProgress = Math.min(100, Math.max(0, rawProgress));

    // Small delay so the card reveal is noticeable first
    setTimeout(() => {
      progressBar.style.width = targetProgress + '%';
      progressBar.classList.add('filled');
      
      // Handle percentage text animation
      if (percentageText) {
        // Always start from 0%
        percentageText.textContent = '0%';
        
        // For 0% target, we're already done
        if (targetProgress === 0) return;
        
        let current = 0;
        const duration = 1500; // match the CSS transition duration
        // Guard against division by zero and ensure reasonable step time
        const stepTime = targetProgress > 0 ? Math.max(10, Math.floor(duration / targetProgress)) : 16;
        
        const interval = setInterval(() => {
          current += 1;
          percentageText.textContent = current + '%';
          if (current >= targetProgress) {
            clearInterval(interval);
            // Ensure final value is exactly the target
            percentageText.textContent = targetProgress + '%';
          }
        }, stepTime);
      }
    }, 250);
  }
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


  // --- Start Loading Spinner Logic ---
  const loadingSpinner = document.getElementById('loading-spinner');
  window.addEventListener('load', () => {
    if (loadingSpinner) {
      setTimeout(() => {
        loadingSpinner.classList.add('hidden');
        setTimeout(() => {
          if (loadingSpinner.parentNode) {
            loadingSpinner.parentNode.removeChild(loadingSpinner);
          }
        }, 500);
      }, 500);
    }
  });
  // --- End Loading Spinner Logic ---


  // --- Start Scroll Progress Bar Logic ---
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  function updateScrollProgress() {
    if (!scrollProgressBar) return;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    let progress = 0;
    if (scrollableHeight > 0) {
      progress = (scrolled / scrollableHeight) * 100;
      progress = Math.max(0, Math.min(progress, 100));
    }
    scrollProgressBar.style.width = progress + '%';
  }
  // --- End Scroll Progress Bar Logic ---


  // --- Start Back to Top Button Logic ---
  const backToTopBtn = document.getElementById('back-to-top');
  function toggleBackToTopButton() {
    if (!backToTopBtn) return;
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  // --- End Back to Top Button Logic ---


  // --- Combine Scroll Event Handlers with requestAnimationFrame Throttling ---
  let ticking = false;
  const headerEl = document.querySelector('header');
  function handleScrollRAF() {
    updateScrollProgress();
    toggleBackToTopButton();
    if (headerEl) {
      if (window.scrollY > 30) {
        headerEl.classList.add('scrolled');
      } else {
        headerEl.classList.remove('scrolled');
      }
    }
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScrollRAF);
      ticking = true;
    }
  });
  // Set initial state after scroll listener is attached
  updateScrollProgress();
  toggleBackToTopButton();
  if (headerEl) {
    if (window.scrollY > 30) {
      headerEl.classList.add('scrolled');
    } else {
      headerEl.classList.remove('scrolled');
    }
  }


  // --- Start Custom Cursor Logic ---
  (function() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    const customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
    document.body.appendChild(customCursor);
    document.body.classList.add('custom-cursor-active');
    const trailLength = 8;
    const cursorTrail = [];
    for (let i = 0; i < trailLength; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      document.body.appendChild(trail);
      cursorTrail.push(trail);
    }
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let cursorX = mouseX, cursorY = mouseY;
    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      customCursor.style.opacity = '1';
      cursorTrail.forEach(t => t.style.opacity = '0.6');
    });
    document.addEventListener('mouseleave', () => {
      customCursor.style.opacity = '0';
      cursorTrail.forEach(t => t.style.opacity = '0');
    });
    document.addEventListener('mouseenter', () => {
      customCursor.style.opacity = '1';
      cursorTrail.forEach(t => t.style.opacity = '0.6');
    });
    function animateCursor() {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      customCursor.style.left = cursorX + 'px';
      customCursor.style.top = cursorY + 'px';
      let prevX = cursorX, prevY = cursorY;
      for (let i = 0; i < trailLength; i++) {
        const t = cursorTrail[i];
        prevX += (mouseX - prevX) * (0.15 + i * 0.04);
        prevY += (mouseY - prevY) * (0.15 + i * 0.04);
        t.style.left = prevX + 'px';
        t.style.top = prevY + 'px';
        t.style.opacity = (0.6 - i * 0.07).toString();
      }
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
    // Hover/click state
  const interactive = document.querySelectorAll('a, button, .cert-item, .skill-card, .social-icon');
    interactive.forEach(el => {
      el.addEventListener('mouseenter', () => customCursor.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => customCursor.classList.remove('cursor-hover'));
    });
    document.addEventListener('mousedown', () => customCursor.classList.add('cursor-click'));
    document.addEventListener('mouseup', () => customCursor.classList.remove('cursor-click'));
  })();
  // --- End Custom Cursor Logic ---
});

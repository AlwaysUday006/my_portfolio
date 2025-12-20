const navLinks = document.querySelectorAll('.ul-list li a');
const sections = document.querySelectorAll('section');

// Declare revealElements and backToTop BEFORE scroll event listener
const revealElements = document.querySelectorAll('.home-container, .about-container, .projects-container, .certs-container, .contact-content');
revealElements.forEach(el => el.classList.add('reveal'));

const backToTop = document.createElement('div');
backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
backToTop.id = "back-to-top";
document.body.appendChild(backToTop);
backToTop.style.cssText = `
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: #474af0;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.3s ease;
`;
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
backToTop.addEventListener('mouseover', () => backToTop.style.transform = 'scale(1.2)');
backToTop.addEventListener('mouseout', () => backToTop.style.transform = 'scale(1)');

function removeActive() {
  navLinks.forEach(link => link.parentElement.classList.remove('active'));
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: (targetSection ? targetSection.offsetTop : 0) - 80,
      behavior: 'smooth'
    });
    removeActive();
    link.parentElement.classList.add('active');
  });
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      removeActive();
      const activeLink = document.querySelector(`.ul-list li a[href="#${section.id}"]`);
      if (activeLink) activeLink.parentElement.classList.add('active');
    }
  });
  if(window.scrollY > 500){
    backToTop.style.display = "flex";
  } else {
    backToTop.style.display = "none";
  }
  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;
    if(elementTop < windowHeight - revealPoint){
      el.classList.add('active-reveal');
    }
  });
});

const cards = document.querySelectorAll('.project-card, .c1, .cert-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-8px) scale(1.05)');
  card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
});
const typingElement = document.getElementById('typing-element') || document.querySelector('.info-home h3'); 
const words = ["Python Developer", "AI Project Builder", "Algorithm Enthusiast", "B.Tech Student"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
function type() {
    if (!typingElement) return;
    const currentWord = words[wordIndex];
    let displayedText = currentWord.substring(0, charIndex);
    typingElement.innerHTML = displayedText + '<span class="cursor">|</span>';
    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, typingSpeed / 2);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 1000);
    }
}
document.addEventListener('DOMContentLoaded', type);
document.addEventListener("DOMContentLoaded", () => {
  const mainPage = document.getElementById("main-page");
  const loadingScreen = document.getElementById("loading-screen");
  const contactForm = document.getElementById("contact-form");
  
  // Hide loading screen immediately and show main page
  if (loadingScreen) {
    loadingScreen.style.display = 'none';
  }
  if (mainPage) {
    mainPage.classList.add("visible");
    mainPage.style.opacity = '1';
  }
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const userName = formData.get('name');
      const userEmail = formData.get('email');
      const message = formData.get('message');
      
      // Remove existing message if any
      const existingMessage = contactForm.querySelector('.form-message');
      if (existingMessage) existingMessage.remove();
      
      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      
      // Add animation keyframes if not exists
      if (!document.getElementById('form-message-animation')) {
        const style = document.createElement('style');
        style.id = 'form-message-animation';
        style.textContent = `
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `;
        document.head.appendChild(style);
      }
      
      try {
        // Submit to Formspree (free email service)
        // IMPORTANT: Replace YOUR_FORM_ID in the form action attribute with your actual Formspree form ID
        // Sign up at https://formspree.io to get a free form endpoint
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // Create success message
          const successMsg = document.createElement('div');
          successMsg.className = 'form-message form-success';
          successMsg.innerHTML = '<i class="fa-solid fa-check-circle"></i> Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
          successMsg.style.cssText = `
            margin-top: 20px;
            padding: 15px;
            background-color: #d4edda;
            border: 1px solid #c3e6cb;
            border-radius: 8px;
            color: #155724;
            animation: slideIn 0.3s ease-out;
          `;
          contactForm.appendChild(successMsg);
          contactForm.reset();
          
          // Remove message after 8 seconds
          setTimeout(() => {
            successMsg.style.animation = 'slideIn 0.3s ease-out reverse';
            setTimeout(() => successMsg.remove(), 300);
          }, 8000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        // Show error message
        const errorMsg = document.createElement('div');
        errorMsg.className = 'form-message form-error';
        errorMsg.innerHTML = '<i class="fa-solid fa-exclamation-circle"></i> Sorry, there was an error. Please email me directly at udaydeore006@gmail.com';
        errorMsg.style.cssText = `
          margin-top: 20px;
          padding: 15px;
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
          border-radius: 8px;
          color: #721c24;
          animation: slideIn 0.3s ease-out;
        `;
        contactForm.appendChild(errorMsg);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  }
});

/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Dark Mode Variables - Navy/Orange Theme */
:root {
  --primary-color: #ff9800; /* Vibrant Orange/Amber */
  --secondary-color: #FFC107; /* Light Orange/Gold Accent */
  --dark-bg: #001f3f; /* Deep Navy Blue */
  --light-bg: #004080; /* Medium Navy Blue */
  --text-color: #f0f0f0; /* Off-White for high contrast */
  --card-bg: #003366; /* Darker Card Navy */
  --accent-shadow: rgba(255, 152, 0, 0.5); 
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
  background: var(--dark-bg);
  color: var(--text-color);
  line-height: 1.7; 
  scroll-behavior: smooth; 
}

/* Typography Enhancements */
h1, h2, h3 {
  margin-bottom: 15px;
  color: var(--text-color);
}

h2 {
    /* Headlines are set to Primary Orange */
    color: var(--primary-color);
    font-size: 2.2em;
    padding-bottom: 5px;
    /* Underline is set to Secondary Gold */
    border-bottom: 2px solid var(--secondary-color);
    display: inline-block;
    /* Subtle glow for effect */
    text-shadow: 0 0 5px rgba(255, 152, 0, 0.5); 
}

/* Navbar */
header {
  background: var(--dark-bg);
  padding: 15px 30px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.logo {
  color: white;
  font-size: 28px;
  font-weight: 700;
}

.logo span {
  color: var(--primary-color);
  text-shadow: 0 0 5px var(--primary-color);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  list-style: none;
}

.nav-links li {
  display: inline;
  margin: 0 5px;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 600;
  padding: 8px 15px;
  border-radius: 5px;
  border: 1px solid transparent; 
  transition: all 0.3s ease;
}

.nav-links a:hover {
  color: var(--secondary-color);
  background: rgba(255, 193, 7, 0.1); /* Light Gold background on hover */
  border-color: var(--secondary-color);
  text-shadow: 0 0 3px var(--secondary-color);
}


/* Hero Section */
.hero {
  text-align: center;
  padding: 120px 20px;
  /* Deep navy gradient */
  background: linear-gradient(135deg, var(--dark-bg) 0%, #001020 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.hero h1 {
  font-size: 56px;
  margin-bottom: 10px;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3); 
}

/* Styling for the Hero Tagline */
.hero p {
  font-size: 1.5em; 
  font-weight: 500; 
  margin-top: 5px; 
  letter-spacing: 1.5px; 
  /* Tagline is set to Primary Orange */
  text-shadow: 0 0 5px rgba(255, 152, 0, 0.7); 
  font-family: 'Lucida Sans', 'Lucida Grande', 'Segoe UI', sans-serif; 
  color: var(--primary-color); 
}

/* Typing Effect Cursor */
#typed-text {
  font-weight: bold;
  color: var(--secondary-color); /* Light Orange typed text */
  border-right: 3px solid var(--secondary-color); /* Light Orange cursor */
  animation: blink-cursor 0.75s step-end infinite;
}

@keyframes blink-cursor {
  from, to { border-color: transparent }
  50% { border-color: var(--secondary-color); }
}

.btn {
  display: inline-block;
  margin-top: 30px;
  padding: 15px 30px;
  background: var(--primary-color); 
  color: var(--dark-bg);
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1px;
  border: 2px solid var(--primary-color);
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px var(--accent-shadow);
}

.btn:hover {
  background: var(--dark-bg);
  color: var(--primary-color);
  border-color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px var(--accent-shadow);
}

/* Sections */
.section {
  padding: 80px 20px;
  text-align: center;
  background: var(--light-bg);
}

/* Alternating Section Backgrounds (used two shades of Navy) */
#about {
    background: var(--dark-bg); /* Deep Navy */
}

#certs {
    background: var(--light-bg); /* Medium Navy */
}

#projects {
    background: var(--dark-bg); /* Deep Navy */
}

#contact {
    background: var(--light-bg); /* Medium Navy */
}

/* --- CERTIFICATIONS SECTION --- */

.cert-container {
    display: flex;
    flex-direction: column;
    gap: 15px; 
    max-width: 700px;
    margin: 20px auto;
}

.cert-item {
    background: var(--card-bg); /* Darker Card Navy */
    padding: 20px 30px;
    border-radius: 8px;
    border-left: 5px solid var(--secondary-color); /* Gold/Amber accent line */
    text-align: left;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease;
}

.cert-item h3 {
    color: var(--secondary-color); /* Gold Title */
    margin-bottom: 5px;
}

.cert-item p {
    font-size: 0.95em;
    color: #b0b0b0;
    margin-bottom: 10px;
}

.cert-item a {
    font-weight: 600;
    color: var(--primary-color); /* Orange link */
    text-decoration: none;
    transition: color 0.3s;
}

.cert-item a:hover {
    color: var(--secondary-color); /* Gold hover */
    text-decoration: underline;
}

/* Inherit scroll animation properties */
.cert-item.hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* --- PROJECTS SECTION --- */
.project-card {
  background: var(--card-bg); /* Darker Card Navy */
  margin: 25px auto;
  padding: 30px;
  max-width: 550px;
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  /* Orange shadow on hover */
  box-shadow: 0 12px 25px var(--accent-shadow); 
}

.project-card h3 {
    color: var(--secondary-color); /* Gold Project Title */
}

.project-card p {
    color: var(--text-color);
}

/* Project Links/Buttons */
.project-links {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.project-btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.demo-btn {
  background: var(--primary-color);
  color: var(--dark-bg);
  border: 2px solid var(--primary-color);
}

.demo-btn:hover {
  background: var(--dark-bg);
  color: var(--primary-color);
  border-color: var(--primary-color);
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 4px 15px var(--accent-shadow);
}

.github-btn {
  background: var(--card-bg);
  color: var(--text-color);
  border: 2px solid var(--text-color);
}

.github-btn:hover {
  background: var(--primary-color);
  color: var(--dark-bg);
  border-color: var(--primary-color);
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 4px 15px var(--accent-shadow);
}

/* Contact Section */
#contact a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

#contact a:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}

/* Footer */
footer {
  background: var(--dark-bg);
  color: #888;
  text-align: center;
  padding: 20px;
  font-size: 0.9em;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

/* --- MOBILE MENU STYLES (Use dark background and orange accents) --- */

/* Hamburger Icon Styling */
.hamburger {
  display: none; 
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: white;
  transition: all 0.3s ease-in-out;
  border-radius: 2px;
}

/* Styles for when the menu is active (creates the 'X' icon) */
.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}


/* Media Query for Mobile Screens (Under 768px) */
@media (max-width: 768px) {
  
  nav {
    display: flex;
    justify-content: space-between;
  }

  /* Show the hamburger icon on mobile */
  .hamburger {
    display: block;
  }

  /* Style the navigation links for mobile */
  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    background: var(--dark-bg);
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    text-align: center;
    padding-top: 20px;
  }

  /* Class to display the menu */
  .nav-links.active {
    transform: translateX(0);
  }

  .nav-links li {
    margin: 25px 0;
    display: block;
  }

  .nav-links a {
    font-size: 1.2rem;
    padding: 10px 20px; 
    border: 1px solid var(--primary-color); /* Orange border on mobile menu items */
  }
}

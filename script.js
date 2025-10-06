// script.js (Existing simple JS + new Typing Effect)

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio site loaded successfully!");
  
  // --- Start Typing Effect Logic ---

  const typedTextSpan = document.getElementById("typed-text");
  // The text we want to type out
  const textToType = "Uday"; 
  const typingSpeed = 150; // Milliseconds per character
  const eraseSpeed = 100; // Milliseconds per character for erasing (if you wanted to loop)
  const newTextDelay = 1500; // Delay before starting the next loop (if looping)
  let charIndex = 0;
  
  function type() {
    if (charIndex < textToType.length) {
      // Add the next character to the span
      typedTextSpan.textContent += textToType.charAt(charIndex);
      charIndex++;
      // Call the function again after the typingSpeed delay
      setTimeout(type, typingSpeed);
    } 
    // If you wanted to loop the effect, you'd add an else block here to call an erase function.
  }

  // Start the typing sequence after the DOM loads
  setTimeout(type, newTextDelay); 

  // --- End Typing Effect Logic ---
});

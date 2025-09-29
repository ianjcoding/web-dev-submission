// script.js - Interactive features for The Big Three Site

document.addEventListener("DOMContentLoaded", () => {
  // Find spoiler sections
  const spoilerSections = document.querySelectorAll("section.spoiler");

  spoilerSections.forEach(section => {
    const button = document.createElement("button");
    button.textContent = "Toggle Spoiler";
    button.classList.add("spoiler-btn");

    const content = section.querySelector(".spoiler-content");
    if (content) content.style.display = "none"; // hide initially

    button.addEventListener("click", () => {
      if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Hide Spoiler";
      } else {
        content.style.display = "none";
        button.textContent = "Show Spoiler";
      }
    });

    section.insertBefore(button, section.firstChild);
  });

  // Add hover glow effect for all sections
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    sec.addEventListener("mouseenter", () => {
      sec.style.boxShadow = "0 0 12px #ff0050";
    });
    sec.addEventListener("mouseleave", () => {
      sec.style.boxShadow = "none";
    });
  });
});
// === Fan Feedback Form Interaction ===
// === Fan Feedback Form Interaction ===
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".fan-form form");
  
    if (form) { // ✅ Only run if form exists
      const successMessage = document.createElement("p");
      successMessage.classList.add("success-message");
      successMessage.textContent = "🎉 Thanks for sharing your thoughts, we appreciate it!";
      form.parentNode.appendChild(successMessage);
  
      form.addEventListener("submit", (e) => {
        e.preventDefault(); // stop page reload
  
        // Grab values (could be logged or sent later to a server)
        const name = form.querySelector("#name").value;
        const fav = form.querySelector("#fav").value;
        const message = form.querySelector("#message").value;
  
        console.log("Fan Feedback:");
        console.log("Name:", name);
        console.log("Favorite Aspect:", fav);
        console.log("Message:", message);
  
        // Show success message
        successMessage.style.display = "block";
  
        // Reset form after submission
        form.reset();
  
        // Hide message after 5 seconds
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 5000);
      });
    }
  });
  
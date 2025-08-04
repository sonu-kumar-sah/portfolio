// ✅ Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "⚠️ Please fill in all fields!";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "✅ Message sent successfully!";
    formMessage.style.color = "lightgreen";
    document.getElementById("contactForm").reset();

    setTimeout(() => {
      formMessage.textContent = "";
    }, 3000);
  }
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// ✅ Typing Effect
const texts = ["Frontend Developer", "JavaScript Enthusiast", "Web Designer"];
let count = 0;
let index = 0;
let isDeleting = false;
const typingElement = document.querySelector(".typing-text");

function type() {
  const currentText = texts[count];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, index--);
  } else {
    typingElement.textContent = currentText.substring(0, index++);
  }

  if (!isDeleting && index === currentText.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 80 : 150);
}

type();

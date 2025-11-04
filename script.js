// Toggle Mobile Menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu")
  if (menu) {
    menu.classList.toggle("hidden")
  }
}

// Toggle FAQ Items
function toggleFAQ(element) {
  const answer = element.querySelector("p")
  const plus = element.querySelector("span")
  if (answer) {
    answer.classList.toggle("hidden")
    plus.textContent = answer.classList.contains("hidden") ? "+" : "−"
  }
}

// Handle Contact Form
function handleFormSubmit(event) {
  event.preventDefault()
  alert("Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.")
  event.target.reset()
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

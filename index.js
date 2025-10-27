// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);

  // Add bounce animation to the toggle button
  themeToggle.classList.add("bounce");
  setTimeout(() => {
    themeToggle.classList.remove("bounce");
  }, 1000);
});

function updateThemeIcon(theme) {
  if (theme === "dark") {
    themeIcon.className = "bi bi-sun-fill";
  } else {
    themeIcon.className = "bi bi-moon-fill";
  }
}

// Sidebar toggle functionality for mobile
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("mainContent");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

// Job response functions
function respondRemote() {
  const responseMessage = document.getElementById("responseMessage");
  responseMessage.innerHTML =
    '<i class="bi bi-check-circle-fill me-2"></i>Thank you for the update. I truly appreciate the opportunity. However, I am currently seeking a remote position so I would not be able to attend an on-site role in Okara. Please do keep me in mind for any remote opportunities in the future.';
  responseMessage.classList.add("bounce");
  setTimeout(() => {
    responseMessage.classList.remove("bounce");
  }, 1000);
}

function respondIgnore() {
  const responseMessage = document.getElementById("responseMessage");
  responseMessage.innerHTML =
    '<i class="bi bi-info-circle-fill me-2"></i>You chose to ignore this message.';
  responseMessage.classList.remove("text-success");
  responseMessage.classList.add("text-warning");
  responseMessage.classList.add("bounce");
  setTimeout(() => {
    responseMessage.classList.remove("bounce");
  }, 1000);
}

// Chart.js bar chart
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("jobChart").getContext("2d");
  const jobChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Applied", "Interviewed", "Shortlisted", "Rejected", "Offers"],
      datasets: [
        {
          label: "Applications",
          data: [12, 4, 3, 5, 2],
          backgroundColor: [
            "#0d6efd",
            "#20c997",
            "#ffc107",
            "#dc3545",
            "#6f42c1",
          ],
          borderRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      animation: {
        duration: 2000,
        easing: "easeOutQuart",
      },
    },
  });
});

// Add animation to cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});

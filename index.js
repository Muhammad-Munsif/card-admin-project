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
    themeIcon.className = "bi bi-sun";
  } else {
    themeIcon.className = "bi bi-moon";
  }
}

// Hamburger menu functionality
const hamburgerMenu = document.getElementById("hamburgerMenu");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
  sidebarOverlay.classList.toggle("active");
});

sidebarOverlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  hamburgerMenu.classList.remove("active");
  sidebarOverlay.classList.remove("active");
});

// Job response functions
function respondRemote() {
  const responseMessage = document.getElementById("responseMessage");
  responseMessage.innerHTML =
    '<i class="bi bi-check-circle-fill me-2 text-success"></i>Thank you for the update. I truly appreciate the opportunity. However, I am currently seeking a remote position so I would not be able to attend an on-site role in Okara. Please do keep me in mind for any remote opportunities in the future.';
  responseMessage.style.display = "block";
  responseMessage.classList.add("bounce");
  setTimeout(() => {
    responseMessage.classList.remove("bounce");
  }, 1000);
}

function respondIgnore() {
  const responseMessage = document.getElementById("responseMessage");
  responseMessage.innerHTML =
    '<i class="bi bi-info-circle-fill me-2 text-warning"></i>You chose to ignore this message.';
  responseMessage.style.display = "block";
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
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Applications",
          data: [8, 12, 6, 14, 10, 16],
          backgroundColor: "#3b82f6",
          borderRadius: 8,
          borderSkipped: false,
        },
        {
          label: "Interviews",
          data: [2, 4, 3, 5, 4, 7],
          backgroundColor: "#10b981",
          borderRadius: 8,
          borderSkipped: false,
        },
        {
          label: "Offers",
          data: [0, 1, 1, 2, 1, 3],
          backgroundColor: "#f59e0b",
          borderRadius: 8,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            stepSize: 5,
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
          position: "top",
          labels: {
            usePointStyle: true,
            padding: 15,
          },
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

// Close sidebar when clicking on a link (mobile)
document.querySelectorAll(".sidebar a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      sidebar.classList.remove("active");
      hamburgerMenu.classList.remove("active");
      sidebarOverlay.classList.remove("active");
    }
  });
});

// Add gradient to user avatar
document.querySelector(".user-avatar").style.background = "var(--bg-gradient)";

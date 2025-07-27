function respondRemote() {
  document.getElementById("responseMessage").innerText =
    "Thank you for the update. I truly appreciate the opportunity. However, I am currently seeking a remote position so I would not be able to attend an on-site role in Okara. Please do keep me in mind for any remote opportunities in the future.";
}

function respondIgnore() {
  document.getElementById("responseMessage").innerText =
    "You chose to ignore this message .";
}

// Chart.js bar chart
const ctx = document.getElementById("jobChart").getContext("2d");
const jobChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Applied", "Interviewed", "Shortlisted", "Rejected"],
    datasets: [
      {
        label: "Applications",
        data: [12, 4, 3, 5],
        backgroundColor: ["#0d6efd", "#20c997", "#ffc107", "#dc3545","#ddd599"],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true },
    },
  },
});

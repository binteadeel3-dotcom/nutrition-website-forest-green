// ------------------------
// Smooth Scroll for Navigation Links
// ------------------------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    // Smooth scroll
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // offset for navbar height
        behavior: "smooth",
      });
    }

    // Close offcanvas sidebar if open
    const sidebar = document.getElementById("sidebarMenu");
    if (sidebar.classList.contains("show")) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(sidebar);
      if (bsOffcanvas) bsOffcanvas.hide();
    }
  });
});

// ------------------------
// BMI Calculator Logic
// ------------------------
function calculateBMI() {
  const weight = document.getElementById("bmiWeight")?.value;
  const height = document.getElementById("bmiHeight")?.value;

  if (!weight || !height) {
    if (document.getElementById("bmiResult")) {
      document.getElementById("bmiResult").innerText =
        "Please enter valid values.";
    }
    return;
  }

  const heightMeters = height / 100; // convert cm → meters
  const bmi = (weight / (heightMeters * heightMeters)).toFixed(1);

  let status = "";

  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 24.9) status = "Healthy weight";
  else if (bmi < 29.9) status = "Overweight";
  else status = "Obese";

  if (document.getElementById("bmiResult")) {
    document.getElementById("bmiResult").innerText = `BMI: ${bmi} (${status})`;
  }
}

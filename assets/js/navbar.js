document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/pages/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});


document.addEventListener("DOMContentLoaded", function () {
    fetch("../pages/navbar.html") // Adjust the path according to your folder structure
      .then(response => {
        if (!response.ok) {
          throw new Error("Navbar not found.");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;

        // Fix the logo path dynamically
        const logo = document.querySelector("#navbar-placeholder .logo-image img");
        if (logo) {
          logo.src = "../images/image-logo.png"; // Adjust based on the page location
        }
      })
      .catch(error => console.error("Error loading navbar:", error));
  });


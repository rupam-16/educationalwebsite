document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        // You can now send the form data to a server using an AJAX request or other methods.
        console.log(formData);
        // Optionally, you can display a success message to the user.
        alert("Form submitted successfully!");
        // Clear the form
        contactForm.reset();
    });
});
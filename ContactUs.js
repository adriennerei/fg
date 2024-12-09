document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const comment = document.getElementById("comment").value.trim();

    // Validation
    if (!firstName || !lastName || !email || !comment) {
        alert("All fields are required!");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Enter a valid email address!");
        return;
    }

    // On successful validation
    alert("Thank you for contacting us, " + firstName + " " + lastName + "! We will reach out to you shortly.");
    window.location.href = "Home.html"; // Redirect to the home page
});

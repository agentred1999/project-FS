function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

document.addEventListener("DOMContentLoaded", function () {

    // Step click
    const steps = document.querySelectorAll(".step");
    steps.forEach(function (step) {
        step.addEventListener("click", function () {
            steps.forEach(function (s) { s.classList.remove("active"); });
            step.classList.add("active");
        });
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
                closeMenu();
            }
        });
    });

    // Email form
    const emailForm = document.querySelector(".email-form");
    if (emailForm) {
        emailForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const input = emailForm.querySelector("input");
            if (input.value === "") {
                alert("Please enter your email.");
            } else {
                alert("Thanks! We'll be in touch at " + input.value);
                input.value = "";
            }
        });
    }

    // Get Started button
    const emailBtn = document.querySelector(".email-form button");
    if (emailBtn) {
        emailBtn.addEventListener("click", function () {
            const input = document.querySelector(".email-form input");
            if (input.value === "") {
                alert("Please enter your email.");
            } else {
                alert("Thanks! We'll be in touch at " + input.value);
                input.value = "";
            }
        });
    }

    // Buy Now buttons
    document.querySelectorAll(".plan-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const planName = this.closest(".plan").querySelector(".plan-name").textContent;
            alert("You selected the " + planName + " plan! Redirecting to checkout...");
        });
    });

    // CTA Get Started
    const btnWhite = document.querySelector(".btn-white");
    if (btnWhite) {
        btnWhite.addEventListener("click", function () {
            document.querySelector("#landing").scrollIntoView({ behavior: "smooth" });
        });
    }

    // CTA Contact Us
    const btnOutline = document.querySelector(".btn-outline-white");
    if (btnOutline) {
        btnOutline.addEventListener("click", function () {
            alert("Contact us at: hello@treact.com");
        });
    }

    // Login and Sign Up
    document.querySelectorAll("a").forEach(function (a) {
        if (a.textContent.trim() === "Login") {
            a.addEventListener("click", function (e) {
                e.preventDefault();
                alert("Login page coming soon!");
            });
        }
        if (a.textContent.trim() === "Sign Up") {
            a.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector("#landing").scrollIntoView({ behavior: "smooth" });
            });
        }
    });

});
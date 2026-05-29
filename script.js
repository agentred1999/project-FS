"use strict";

function openMenu() {
  document.body.classList.add("menu--open");
  const modal = document.querySelector(".modal");
  if (modal) modal.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
  const modal = document.querySelector(".modal");
  if (modal) modal.setAttribute("aria-hidden", "true");
}

document.addEventListener("DOMContentLoaded", function () {

  // Menu open/close — no more inline onclick
  const menuOpenBtn = document.getElementById("menu-open-btn");
  const menuCloseBtn = document.getElementById("menu-close-btn");
  if (menuOpenBtn) menuOpenBtn.addEventListener("click", openMenu);
  if (menuCloseBtn) menuCloseBtn.addEventListener("click", closeMenu);

  // Close menu when clicking outside modal
  document.addEventListener("click", function (e) {
    if (document.body.classList.contains("menu--open")) {
      const modal = document.querySelector(".modal");
      const menuBtn = document.getElementById("menu-open-btn");
      if (modal && !modal.contains(e.target) && e.target !== menuBtn) {
        closeMenu();
      }
    }
  });

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
      const href = this.getAttribute("href");
      if (href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        closeMenu();
      }
    });
  });

  // Email validation helper
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Email form
  const emailBtn = document.getElementById("get-started-btn");
  if (emailBtn) {
    emailBtn.addEventListener("click", function () {
      const input = document.getElementById("email-input");
      if (!input || input.value.trim() === "") {
        alert("Please enter your email.");
      } else if (!isValidEmail(input.value.trim())) {
        alert("Please enter a valid email address.");
      } else {
        // Sanitize output with textContent — never innerHTML
        const safeEmail = input.value.trim();
        alert("Thanks! We\u2019ll be in touch at " + safeEmail);
        input.value = "";
      }
    });
  }

  // Buy Now buttons
  document.querySelectorAll(".plan-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const planEl = this.closest(".plan");
      if (!planEl) return;
      const nameEl = planEl.querySelector(".plan-name");
      if (!nameEl) return;
      // Use textContent, never innerHTML
      const planName = nameEl.textContent.trim();
      alert("You selected the " + planName + " plan! Redirecting to checkout...");
    });
  });

  // CTA Get Started
  const btnWhite = document.getElementById("cta-start");
  if (btnWhite) {
    btnWhite.addEventListener("click", function () {
      const landing = document.getElementById("landing");
      if (landing) landing.scrollIntoView({ behavior: "smooth" });
    });
  }

  // CTA Contact Us
  const btnOutline = document.getElementById("cta-contact");
  if (btnOutline) {
    btnOutline.addEventListener("click", function () {
      alert("Contact us at: hello@treact.com");
    });
  }

  // Login
  const loginLink = document.getElementById("login-link");
  const modalLogin = document.getElementById("modal-login");
  const footerLogin = document.querySelector(".footer-login");
  [loginLink, modalLogin, footerLogin].forEach(function (el) {
    if (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Login page coming soon!");
      });
    }
  });

  // Sign Up
  const signupLink = document.getElementById("signup-link");
  const modalSignup = document.getElementById("modal-signup");
  [signupLink, modalSignup].forEach(function (el) {
    if (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        const landing = document.getElementById("landing");
        if (landing) landing.scrollIntoView({ behavior: "smooth" });
        closeMenu();
      });
    }
  });

  // Escape key closes modal
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("menu--open")) {
      closeMenu();
    }
  });

});
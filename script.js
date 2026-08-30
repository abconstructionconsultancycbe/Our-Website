// =========================================================
// AB CONSTRUCTION CONSULTANCY
// Website JavaScript
// =========================================================


// =========================================================
// 1. MOBILE MENU
// =========================================================

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (mobileMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}


// =========================================================
// 2. CLOSE MOBILE MENU WHEN A LINK IS CLICKED
// =========================================================

const mobileLinks =
    document.querySelectorAll("#mobile-menu a");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


// =========================================================
// 3. HEADER SHADOW WHEN SCROLLING
// =========================================================

const header =
    document.getElementById("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =========================================================
// 4. ACTIVE NAVIGATION LINK
// =========================================================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// =========================================================
// 5. CONTACT FORM
// EMAIL + WHATSAPP
// =========================================================

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        // =================================================
        // BASIC VALIDATION
        // =================================================

        if (name === "") {

            showFormMessage(
                "Please enter your name."
            );

            return;

        }


        if (phone === "") {

            showFormMessage(
                "Please enter your phone number."
            );

            return;

        }


        if (service === "") {

            showFormMessage(
                "Please select a service."
            );

            return;

        }


        // =================================================
        // DISABLE BUTTON WHILE SUBMITTING
        // =================================================

        const submitButton =
            contactForm.querySelector(".form-submit");

        submitButton.disabled = true;

        submitButton.innerHTML =
            'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';


        // =================================================
        // SEND FORM TO FORMSPREE
        // =================================================

        const formData =
            new FormData(contactForm);


        try {

            const response =
                await fetch(
                    contactForm.action,
                    {
                        method: "POST",
                        body: formData,
                        headers: {
                            "Accept": "application/json"
                        }
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "Form submission failed."
                );

            }


            // =================================================
            // CREATE WHATSAPP MESSAGE
            // =================================================

            const whatsappMessage =
                `Hello AB Construction Consultancy,

Name: ${name}

Phone: ${phone}

Email: ${email || "Not provided"}

Service Required: ${service}

Requirement:
${message || "Not provided"}

I would like to discuss my building requirement.`;


            const encodedMessage =
                encodeURIComponent(
                    whatsappMessage
                );


            const whatsappNumber =
                "916379120341";


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


            // =================================================
            // SUCCESS MESSAGE
            // =================================================

            showFormMessage(
                "Thank you! Your enquiry has been sent. Opening WhatsApp..."
            );


            // =================================================
            // RESET FORM
            // =================================================

            contactForm.reset();


            // =================================================
            // OPEN WHATSAPP
            // =================================================

            setTimeout(function () {

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }, 700);


        } catch (error) {

            console.error(
                "Form submission error:",
                error
            );


            showFormMessage(
                "Sorry, we could not send your enquiry. Please call us directly."
            );


        } finally {

            // =================================================
            // RESTORE BUTTON
            // =================================================

            submitButton.disabled = false;

            submitButton.innerHTML =
                'Send Enquiry <i class="fa-solid fa-paper-plane"></i>';

        }

    });

}


// =========================================================
// FORM MESSAGE FUNCTION
// =========================================================

function showFormMessage(message) {

    if (!formMessage) {
        return;
    }

    formMessage.textContent =
        message;

    formMessage.style.color =
        "#126a9b";

}

// =========================================================
// 6. SIMPLE SCROLL REVEAL ANIMATION
// =========================================================

const revealElements =
    document.querySelectorAll(
        ".service-card, .mini-card, .about-box, .why-item, .process-step"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});


// =========================================================
// 7. CURRENT YEAR IN FOOTER
// =========================================================

const currentYear =
    new Date().getFullYear();

const footerText =
    document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.innerHTML =
        `© ${currentYear} AB Construction Consultancy. All Rights Reserved.`;

}


// =========================================================
// WEBSITE READY
// =========================================================

console.log(
    "AB Construction Consultancy website loaded successfully."
);

/* =====================================================
   SPLASH SCREEN
   Shown in full only on a visitor's first visit in a
   browser session. Returning within the same session
   (e.g. navigating back, refreshing) skips straight in.
===================================================== */

window.addEventListener("load", function () {

    const splash = document.getElementById("splash-screen");

    if (!splash) {
        return;
    }

    const hasVisited = sessionStorage.getItem("abcc_visited");

    if (hasVisited) {

        // Skip the splash instantly for returning visits this session
        splash.style.transition = "none";
        splash.classList.add("hide");
        splash.style.display = "none";

    } else {

        sessionStorage.setItem("abcc_visited", "true");

        setTimeout(function () {

            splash.classList.add("hide");

            setTimeout(function () {

                splash.style.display = "none";

            }, 900);

        }, 2200);

    }

});

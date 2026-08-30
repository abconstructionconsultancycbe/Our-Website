/* =========================================================
   AB CONSTRUCTION CONSULTANCY
   Main Website Styles
========================================================= */


/* =========================================================
   1. RESET & GLOBAL STYLES
========================================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    color: #172033;
    background: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

button,
input,
textarea,
select {
    font-family: inherit;
}

button {
    cursor: pointer;
}

img {
    max-width: 100%;
    display: block;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}


/* =========================================================
   2. COLOUR VARIABLES
========================================================= */

:root {

    --primary: #2c9edb;

    --primary-dark: #126a9b;

    --primary-light: #e9f7ff;

    --secondary: #0b3558;

    --dark: #132238;

    --text: #526174;

    --light-text: #738095;

    --white: #ffffff;

    --light-bg: #f5faff;

    --border: #dcebf4;

    /* Warm accent — used sparingly for eyebrow labels, highlights
       and a few interactive details, so the palette reads as
       "navy + gold" rather than a single flat blue. */
    --accent: #d99a3d;

    --accent-dark: #b87f28;

    --accent-light: #fbf1e1;

    --shadow:
        0 15px 40px rgba(20, 70, 100, 0.10);

    --shadow-lg:
        0 25px 60px rgba(13, 40, 65, 0.16);

}


/* =========================================================
   3. HEADER
========================================================= */

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    background: rgba(255, 255, 255, 0.96);

    border-bottom: 1px solid var(--border);

    transition: 0.3s ease;
}

.header.scrolled {
    box-shadow:
        0 5px 25px rgba(0, 0, 0, 0.08);
}

.nav-container {
    height: 78px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 25px;
}


/* =========================================================
   LOGO
========================================================= */

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    color: var(--secondary);

    font-size: 13px;
    font-weight: 600;

    line-height: 1.2;
}

.logo-icon {
    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;

    background: var(--primary);

    color: white;

    font-size: 20px;
}

.logo-text strong {
    display: block;

    font-size: 20px;

    color: var(--primary-dark);

    letter-spacing: 0.5px;
}


/* =========================================================
   NAVIGATION
========================================================= */

.navbar {
    display: flex;
    align-items: center;

    gap: 28px;
}

.nav-link {
    position: relative;

    color: #405066;

    font-size: 14px;
    font-weight: 600;

    padding: 8px 0;

    transition: 0.3s ease;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-dark);
}

.nav-link::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 0;

    width: 0;
    height: 2px;

    background: var(--primary);

    transition: 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}


/* =========================================================
   HEADER BUTTON
========================================================= */

.header-button {
    padding: 12px 20px;

    background: var(--secondary);

    color: white;

    border-radius: 7px;

    font-size: 13px;
    font-weight: 700;

    transition: 0.3s ease;
}

.header-button:hover {
    background: var(--primary-dark);

    transform: translateY(-2px);
}


/* =========================================================
   MOBILE MENU
========================================================= */

.menu-toggle {
    display: none;

    align-items: center;
    justify-content: center;

    width: 44px;
    height: 44px;
    min-width: 44px;
    min-height: 44px;

    border: none;

    background: transparent;

    font-size: 24px;

    color: var(--secondary);
}

.mobile-menu {
    display: none;
}


/* =========================================================
   4. HERO SECTION
========================================================= */

.hero {
    min-height: 760px;

    position: relative;

    display: flex;
    align-items: center;

    padding-top: 78px;

    background:
        linear-gradient(
            115deg,
            rgba(7, 43, 71, 0.95),
            rgba(20, 94, 135, 0.84)
        ),
        url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85")
        center / cover no-repeat;
}

.hero-overlay {
    position: absolute;

    inset: 0;

    background:
        radial-gradient(
            circle at 80% 30%,
            rgba(71, 190, 241, 0.25),
            transparent 40%
        );
}

.hero-container {
    position: relative;
    z-index: 2;
}

.hero-content {
    max-width: 780px;

    color: white;
}

.hero-badge {
    display: inline-flex;

    align-items: center;
    gap: 9px;

    padding: 9px 15px;

    margin-bottom: 22px;

    border: 1px solid rgba(255,255,255,0.25);

    border-radius: 30px;

    background: rgba(255,255,255,0.08);

    backdrop-filter: blur(10px);

    font-size: 13px;
    font-weight: 600;
}

.hero h1 {
    font-size: clamp(45px, 6vw, 75px);

    line-height: 1.08;

    letter-spacing: -2px;

    margin-bottom: 25px;
}

.hero h1 span {
    color: #77d4ff;
}

.hero p {
    max-width: 680px;

    font-size: 18px;

    color: rgba(255,255,255,0.85);

    margin-bottom: 32px;
}


/* =========================================================
   BUTTONS
========================================================= */

.hero-buttons,
.cta-buttons {
    display: flex;

    flex-wrap: wrap;

    gap: 14px;
}

.btn {
    display: inline-flex;

    align-items: center;
    justify-content: center;

    gap: 10px;

    padding: 14px 22px;

    border-radius: 7px;

    font-size: 14px;

    font-weight: 700;

    border: 2px solid transparent;

    transition: 0.3s ease;
}

.btn-primary {
    background: var(--primary);

    color: white;
}

.btn-primary:hover {
    background: #1687c1;

    transform: translateY(-3px);

    box-shadow:
        0 10px 25px rgba(44, 158, 219, 0.3);
}

.btn-outline {
    border-color: rgba(255,255,255,0.35);

    color: white;

    background: rgba(255,255,255,0.05);
}

.btn-outline:hover {
    background: white;

    color: var(--secondary);
}

.btn-white {
    background: white;

    color: var(--secondary);
}

.btn-white:hover {
    transform: translateY(-3px);
}

.btn-whatsapp {
    background: #25d366;

    color: white;
}

.btn-whatsapp:hover {
    background: #1db954;

    transform: translateY(-3px);
}


/* =========================================================
   HERO TRUST
========================================================= */

.hero-trust {
    display: flex;

    flex-wrap: wrap;

    gap: 20px;

    margin-top: 40px;
}

.trust-item {
    display: flex;

    align-items: center;

    gap: 7px;

    font-size: 12px;

    color: rgba(255,255,255,0.82);
}

.trust-item i {
    color: #6dd5ff;
}


/* =========================================================
   5. SECTION GLOBAL
========================================================= */

section {
    scroll-margin-top: 85px;
}

.section-label {
    display: inline-block;

    margin-bottom: 12px;

    color: var(--accent-dark);

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 1.7px;
}

.section-heading {
    max-width: 720px;

    margin: 0 auto 50px;

    text-align: center;
}

.section-heading h2,
.intro-text h2,
.doctor-content h2,
.about-content h2,
.why-content h2,
.contact-info h2 {
    font-size: clamp(32px, 4vw, 48px);

    line-height: 1.15;

    letter-spacing: -1px;

    color: var(--dark);

    margin-bottom: 18px;
}

.section-heading h2 span,
.intro-text h2 span,
.doctor-content h2 span,
.about-content h2 span,
.why-content h2 span,
.contact-info h2 span {
    color: var(--primary-dark);
}

.section-heading p,
.intro-text p,
.doctor-content p,
.about-content p,
.why-content p,
.contact-info > p {
    color: var(--text);

    font-size: 15px;
}


/* =========================================================
   6. INTRO SECTION
========================================================= */

.intro-section {
    padding: 110px 0;
}

.intro-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 70px;

    align-items: center;
}

.intro-text p {
    margin-bottom: 15px;
}

.text-link {
    display: inline-flex;

    align-items: center;

    gap: 8px;

    margin-top: 15px;

    color: var(--primary-dark);

    font-size: 14px;

    font-weight: 700;
}

.text-link:hover {
    gap: 12px;
}


/* =========================================================
   INTRO CARDS
========================================================= */

.intro-cards {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 18px;
}

.mini-card {
    padding: 27px;

    border: 1px solid var(--border);

    border-radius: 12px;

    background: white;

    box-shadow: var(--shadow);

    transition: 0.3s ease;
}

.mini-card:hover {
    transform: translateY(-6px);

    border-color: #a9dbf2;
}

.mini-icon {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 15px;

    border-radius: 10px;

    background: var(--primary-light);

    color: var(--primary-dark);

    font-size: 19px;
}

.mini-card h3 {
    margin-bottom: 5px;

    font-size: 18px;
}

.mini-card p {
    color: var(--light-text);

    font-size: 13px;
}


/* =========================================================
   7. CONSULTANCY APPROACH
========================================================= */

.building-doctor {
    padding: 110px 0;

    background: var(--light-bg);
}

.doctor-grid {
    display: grid;

    grid-template-columns: 0.9fr 1.1fr;

    gap: 70px;

    align-items: center;
}

.doctor-image {
    min-height: 560px;

    border-radius: 18px;

    position: relative;

    overflow: hidden;

    background:
        linear-gradient(
            rgba(8,52,83,0.45),
            rgba(8,52,83,0.72)
        ),
        url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85")
        center / cover no-repeat;

    box-shadow:
        0 25px 60px rgba(13, 65, 95, 0.20);
}

.doctor-image-content {
    position: absolute;

    left: 35px;
    right: 35px;
    bottom: 35px;

    color: white;
}

.doctor-image-content i {
    font-size: 40px;

    margin-bottom: 15px;

    color: #78d6ff;
}

.doctor-image-content h3 {
    font-size: 30px;

    margin-bottom: 7px;
}

.doctor-image-content p {
    color: rgba(255,255,255,0.8);
}

.doctor-content p {
    margin-bottom: 15px;
}

.doctor-list {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 12px;

    margin: 28px 0 30px;
}

.doctor-list div {
    display: flex;

    align-items: center;

    gap: 10px;

    color: var(--text);

    font-size: 13px;
}

.doctor-list i {
    color: var(--primary);

    font-size: 14px;
}


/* =========================================================
   8. SERVICES
========================================================= */

.services-section {
    padding: 110px 0;
}

.services-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 22px;
}

.service-card {
    position: relative;

    padding: 32px 28px;

    border: 1px solid var(--border);

    border-radius: 14px;

    background: white;

    transition: 0.35s ease;

    overflow: hidden;
}

.service-card::before {
    content: "";

    position: absolute;

    left: 0;
    top: 0;

    width: 100%;
    height: 3px;

    background: linear-gradient(90deg, var(--accent), var(--primary));

    transform: scaleX(0);

    transform-origin: left;

    transition: 0.35s ease;
}

.service-card:hover {
    transform: translateY(-7px);

    border-color: transparent;

    box-shadow: var(--shadow-lg);
}

.service-card:hover::before {
    transform: scaleX(1);
}

.service-number {
    position: absolute;

    top: 22px;
    right: 24px;

    color: var(--border);

    font-size: 30px;

    font-weight: 800;
}

.service-icon {
    width: 55px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 22px;

    border-radius: 12px;

    background: var(--secondary);

    color: var(--accent);

    font-size: 21px;

    transition: 0.35s ease;
}

.service-card:hover .service-icon {
    background: var(--accent);

    color: white;

    transform: scale(1.06);
}

.service-card h3 {
    margin-bottom: 10px;

    font-size: 18px;

    color: var(--dark);
}

.service-card p {
    margin-bottom: 8px;

    color: var(--text);

    font-size: 13px;
}

.service-card a {
    display: inline-flex;

    align-items: center;

    gap: 8px;

    color: var(--accent-dark);

    font-size: 13px;

    font-weight: 700;
}

.service-card a:hover {
    gap: 12px;
}


/* =========================================================
   9. ABOUT
========================================================= */

.about-section {
    padding: 110px 0;

    background: var(--light-bg);
}

.about-grid {
    display: grid;

    grid-template-columns: 1.1fr 0.9fr;

    gap: 70px;

    align-items: center;
}

.about-content p {
    margin-bottom: 15px;
}

.consultants {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 15px;

    margin-top: 30px;
}

.consultant {
    display: flex;

    align-items: center;

    gap: 13px;

    padding: 18px;

    background: white;

    border: 1px solid var(--border);

    border-radius: 10px;
}

.consultant-icon {
    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: var(--primary-light);

    color: var(--primary-dark);
}

.consultant span {
    display: block;

    color: var(--light-text);

    font-size: 11px;
}

.consultant h3 {
    font-size: 15px;
}

.about-highlight {
    display: grid;

    gap: 18px;
}

.about-box {
    padding: 35px;

    background: white;

    border-radius: 14px;

    border: 1px solid var(--border);

    box-shadow: var(--shadow);
}

.about-box i {
    margin-bottom: 17px;

    color: var(--primary);

    font-size: 32px;
}

.about-box h3 {
    margin-bottom: 8px;

    font-size: 20px;
}

.about-box p {
    color: var(--text);

    font-size: 13px;
}


/* =========================================================
   10. PROCESS
========================================================= */

.process-section {
    padding: 110px 0;
}

.process-grid {
    display: flex;

    align-items: flex-start;
}

.process-step {
    flex: 1 1 0;
    min-width: 0;

    text-align: center;

    padding: 0 10px;
}

.step-number {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto 18px;

    border-radius: 50%;

    background: var(--primary);

    color: white;

    font-size: 12px;

    font-weight: 800;
}

.process-step > i {
    color: var(--primary-dark);

    font-size: 24px;

    margin-bottom: 12px;
}

.process-step h3 {
    font-size: 15px;

    margin-bottom: 7px;
}

.process-step p {
    color: var(--text);

    font-size: 12px;
}

.process-line {
    flex: 0 1 48px;
    align-self: flex-start;

    height: 2px;

    margin-top: 24px;

    background: var(--border);
}


/* =========================================================
   11. WHY CHOOSE US
========================================================= */

.why-section {
    padding: 110px 0;

    background: var(--secondary);

    color: white;
}

.why-grid {
    display: grid;

    grid-template-columns: 0.9fr 1.1fr;

    gap: 80px;

    align-items: center;
}

.why-content .section-label {
    color: #74d3ff;
}

.why-content h2 {
    color: white;
}

.why-content h2 span {
    color: #6ed0fa;
}

.why-content > p {
    color: rgba(255,255,255,0.75);
}

.why-list {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 25px;
}

.why-item {
    display: flex;

    gap: 15px;

    padding: 24px;

    border: 1px solid rgba(255,255,255,0.12);

    border-radius: 10px;

    background: rgba(255,255,255,0.05);
}

.why-icon {
    flex-shrink: 0;

    width: 43px;
    height: 43px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 9px;

    background: rgba(73,187,234,0.15);

    color: #6fd1fb;
}

.why-item h3 {
    margin-bottom: 5px;

    font-size: 15px;
}

.why-item p {
    color: rgba(255,255,255,0.6);

    font-size: 12px;
}


/* =========================================================
   12. PROJECTS
========================================================= */

.projects-section {
    padding: 110px 0;
}

.coming-soon-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.project-placeholder {
    min-height: 260px;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;

    border: 2px dashed #cce4ef;

    border-radius: 16px;

    background: var(--light-bg);
}

.project-placeholder i {
    color: var(--primary);

    font-size: 45px;

    margin-bottom: 15px;
}

.project-placeholder h3 {
    font-size: 22px;

    margin-bottom: 7px;
}

.project-placeholder p {
    max-width: 500px;

    color: var(--text);

    font-size: 13px;
}


/* =========================================================
   14. CONTACT CTA
========================================================= */

.contact-cta {
    padding: 100px 0;

    background:
        linear-gradient(
            120deg,
            #0b456d,
            #2c9edb
        );

    text-align: center;

    color: white;
}

.cta-content {
    max-width: 750px;

    margin: auto;
}

.contact-cta .section-label {
    color: #9be1ff;
}

.contact-cta h2 {
    font-size: clamp(34px, 5vw, 55px);

    line-height: 1.1;

    margin-bottom: 18px;
}

.contact-cta h2 span {
    color: #a1e5ff;
}

.contact-cta p {
    max-width: 600px;

    margin: 0 auto 30px;

    color: rgba(255,255,255,0.82);
}

.cta-buttons {
    justify-content: center;
}


/* =========================================================
   15. CONTACT SECTION
========================================================= */

.contact-section {
    padding: 110px 0;
}

.contact-grid {
    display: grid;

    grid-template-columns: 0.9fr 1.1fr;

    gap: 80px;

    align-items: start;
}

.contact-details {
    margin-top: 35px;

    display: grid;

    gap: 22px;
}

.contact-detail {
    display: flex;

    align-items: center;

    gap: 15px;
}

.contact-icon {
    flex-shrink: 0;

    width: 45px;
    height: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 9px;

    background: var(--primary-light);

    color: var(--primary-dark);
}

.contact-detail span {
    display: block;

    color: var(--light-text);

    font-size: 11px;

    margin-bottom: 2px;
}

.contact-detail a {
    color: var(--secondary);

    font-weight: 700;

    font-size: 14px;
}

.contact-detail p {
    color: var(--text);

    font-size: 14px;
}


/* =========================================================
   CONTACT FORM
========================================================= */

.contact-form-container {
    padding: 35px;

    border-radius: 15px;

    background: var(--light-bg);

    border: 1px solid var(--border);
}

.contact-form h3 {
    margin-bottom: 6px;

    font-size: 24px;
}

.contact-form > p {
    margin-bottom: 25px;

    color: var(--text);

    font-size: 13px;
}

.form-group {
    margin-bottom: 18px;
}

.form-row {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 15px;
}

.form-group label {
    display: block;

    margin-bottom: 7px;

    font-size: 12px;

    font-weight: 700;

    color: var(--dark);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;

    padding: 13px 14px;

    border: 1px solid var(--border);

    border-radius: 7px;

    outline: none;

    background: white;

    color: var(--dark);

    font-size: 13px;

    transition: 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--primary);

    box-shadow:
        0 0 0 3px rgba(44,158,219,0.1);
}

.form-group textarea {
    resize: vertical;
}

.form-submit {
    width: 100%;

    border: none;
}

.form-message {
    margin-top: 15px;

    font-size: 13px;

    font-weight: 600;
}


/* =========================================================
   16. FOOTER
========================================================= */

.footer {
    padding-top: 70px;

    background: #071e32;

    color: white;
}

.footer-grid {
    display: grid;

    grid-template-columns:
        1.5fr 1fr 1fr 1fr;

    gap: 45px;

    padding-bottom: 55px;
}

.footer-logo {
    color: white;

    margin-bottom: 20px;
}

.footer-logo .logo-text {
    color: white;
}

.footer-brand > p {
    color: #72d2fa;

    font-size: 14px;

    font-weight: 700;

    margin-bottom: 10px;
}

.footer-description {
    max-width: 300px;

    color: rgba(255,255,255,0.55) !important;

    font-size: 12px !important;

    font-weight: 400 !important;
}

.footer-column {
    display: flex;

    flex-direction: column;

    gap: 10px;
}

.footer-column h3 {
    margin-bottom: 10px;

    font-size: 15px;
}

.footer-column a,
.footer-column span {
    display: flex;

    align-items: center;

    gap: 8px;

    color: rgba(255,255,255,0.55);

    font-size: 12px;

    transition: 0.3s ease;
}

.footer-column a:hover {
    color: #71d2fa;
}

.footer-column i {
    color: #69ccef;
}

.footer-bottom {
    display: flex;

    justify-content: space-between;

    gap: 20px;

    padding: 20px 0;

    border-top: 1px solid rgba(255,255,255,0.1);

    color: rgba(255,255,255,0.4);

    font-size: 11px;
}


/* =========================================================
   17. FLOATING WHATSAPP
========================================================= */

.whatsapp-float {
    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 55px;
    height: 55px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #25d366;

    color: white;

    font-size: 27px;

    box-shadow:
        0 8px 25px rgba(0,0,0,0.18);

    z-index: 900;

    transition: 0.3s ease;
}

.whatsapp-float:hover {
    transform: scale(1.08);
}


/* =========================================================
   18. RESPONSIVE DESIGN — TABLET
========================================================= */

@media (max-width: 1050px) {

    .navbar {
        gap: 18px;
    }

    .nav-link {
        font-size: 12px;
    }

    .header-button {
        display: none;
    }

    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .process-grid {
        flex-wrap: wrap;

        gap: 35px;
    }

    .process-step {
        flex: 1 1 calc(33.333% - 24px);
    }

    .process-line {
        display: none;
    }

    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}


/* =========================================================
   19. RESPONSIVE DESIGN — MOBILE
========================================================= */

@media (max-width: 768px) {

    .container {
        width: 92%;
    }


    /* Header */

    .navbar {
        display: none;
    }

    .menu-toggle {
        display: flex;
    }

    .mobile-menu {
        position: absolute;

        top: 78px;
        left: 0;

        width: 100%;

        padding: 20px;

        display: none;

        flex-direction: column;

        gap: 5px;

        background: white;

        border-top: 1px solid var(--border);

        box-shadow:
            0 15px 30px rgba(0,0,0,0.08);
    }

    .mobile-menu.active {
        display: flex;
    }

    .mobile-menu a {
        padding: 13px 10px;

        color: var(--secondary);

        font-size: 14px;

        font-weight: 600;

        border-radius: 6px;
    }

    .mobile-menu a:hover {
        background: var(--primary-light);
    }

    .mobile-consultation {
        background: var(--primary);

        color: white !important;

        text-align: center;

        margin-top: 8px;
    }


    /* Hero */

    .hero {
        min-height: 700px;
    }

    .hero h1 {
        font-size: 43px;

        letter-spacing: -1px;
    }

    .hero p {
        font-size: 15px;
    }

    .hero-trust {
        flex-direction: column;

        gap: 9px;
    }


    /* Intro */

    .intro-section,
    .building-doctor,
    .services-section,
    .about-section,
    .process-section,
    .why-section,
    .projects-section,
    .contact-section {
        padding: 75px 0;
    }

    .coming-soon-grid {
        grid-template-columns: 1fr;
    }

    .intro-grid,
    .doctor-grid,
    .about-grid,
    .why-grid,
    .contact-grid {
        grid-template-columns: 1fr;

        gap: 45px;
    }

    .intro-cards {
        grid-template-columns: 1fr 1fr;
    }


    /* Consultancy Approach */

    .doctor-image {
        min-height: 400px;
    }

    .doctor-list {
        grid-template-columns: 1fr;
    }


    /* Services */

    .services-grid {
        grid-template-columns: 1fr;
    }


    /* Consultants */

    .consultants {
        grid-template-columns: 1fr;
    }


    /* Process */

    .process-grid {
        flex-direction: column;

        gap: 30px;
    }

    .process-line {
        display: none;
    }


    /* Why */

    .why-list {
        grid-template-columns: 1fr;
    }


    /* Contact */

    .form-row {
        grid-template-columns: 1fr;
    }


    /* Footer */

    .footer-grid {
        grid-template-columns: 1fr;

        gap: 35px;
    }

    .footer-bottom {
        flex-direction: column;

        text-align: center;
    }

}


/* =========================================================
   20. SMALL MOBILE
========================================================= */

@media (max-width: 480px) {

    .logo-text {
        font-size: 10px;
    }

    .logo-text strong {
        font-size: 17px;
    }

    .logo-icon {
        width: 40px;
        height: 40px;
    }

    .hero h1 {
        font-size: 38px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .hero-buttons .btn {
        width: 100%;
    }

    .intro-cards {
        grid-template-columns: 1fr;
    }

    .doctor-image-content {
        left: 25px;
        right: 25px;
        bottom: 25px;
    }

    .contact-form-container {
        padding: 25px 20px;
    }

    .whatsapp-float {
        width: 50px;
        height: 50px;

        right: 18px;
        bottom: 18px;
    }

}

/* =========================
   AB CONSULTANCY LOGO
========================= */

.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.logo img {
    width: 84px;
    height: 84px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
}

/* Footer logo */

.footer-logo img {
    width: 90px;
    height: 90px;
}

/* Mobile */

@media (max-width: 768px) {

    .logo img {
        width: 72px;
        height: 72px;
    }

    .footer-logo img {
        width: 84px;
        height: 84px;
    }

}


/* =====================================================
   FULL SCREEN SPLASH SCREEN
===================================================== */

#splash-screen {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    height: 100dvh;

    background: linear-gradient(
        135deg,
        var(--dark),
        var(--secondary) 55%,
        var(--primary-dark)
    );
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 99999;

    overflow: hidden;

    opacity: 1;
    visibility: visible;

    transition:
        opacity 0.8s ease,
        visibility 0.8s ease;
}


/* Dark overlay */

.splash-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            135deg,
            rgba(4, 28, 48, 0.82),
            rgba(7, 66, 102, 0.65),
            rgba(0, 0, 0, 0.55)
        );
}


/* Splash content */

.splash-content {
    position: relative;
    z-index: 2;

    width: min(90%, 700px);

    text-align: center;

    color: #ffffff;

    animation: splashAppear 1.2s ease forwards;
}


/* Logo */

.splash-logo {
    width: 190px;
    height: 190px;

    object-fit: contain;

    display: block;

    margin: 0 auto 28px;

    filter:
        drop-shadow(0 10px 25px rgba(0, 0, 0, 0.45));

    animation: logoAppear 1.2s ease forwards;
}


/* Company name */

.splash-content h1 {
    margin: 0;

    font-size: clamp(28px, 4vw, 48px);

    font-weight: 800;

    letter-spacing: -1px;

    text-shadow:
        0 3px 15px rgba(0, 0, 0, 0.5);
}


/* Tagline */

.splash-content p {
    margin: 14px 0 35px;

    font-size: clamp(15px, 2vw, 20px);

    font-weight: 500;

    letter-spacing: 1px;

    color: rgba(255, 255, 255, 0.9);
}


/* Loading bar */

.splash-loader {
    width: min(280px, 70%);

    height: 4px;

    margin: 0 auto 12px;

    background: rgba(255, 255, 255, 0.25);

    border-radius: 10px;

    overflow: hidden;
}


.splash-loader span {
    display: block;

    width: 0;
    height: 100%;

    background: #35b8f2;

    border-radius: 10px;

    animation: loadingBar 2.2s ease forwards;
}


/* Loading text */

.splash-loading {
    font-size: 12px;

    text-transform: uppercase;

    letter-spacing: 3px;

    color: rgba(255, 255, 255, 0.75);
}


/* =====================================================
   SPLASH ANIMATIONS
===================================================== */

@keyframes splashAppear {

    from {
        opacity: 0;
        transform: translateY(25px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }

}


@keyframes logoAppear {

    from {
        opacity: 0;
        transform: scale(0.75);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }

}


@keyframes loadingBar {

    from {
        width: 0;
    }

    to {
        width: 100%;
    }

}


/* Splash disappears */

#splash-screen.hide {

    opacity: 0;

    visibility: hidden;

    pointer-events: none;

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 768px) {

    #splash-screen {
        background-position: center center;
    }

    .splash-logo {
        width: 145px;
        height: 145px;

        margin-bottom: 22px;
    }

    .splash-content h1 {
        font-size: 27px;

        line-height: 1.2;
    }

    .splash-content p {
        font-size: 14px;

        line-height: 1.5;

        margin-bottom: 28px;
    }

    .splash-loader {
        width: 220px;
    }

}

/* =========================================================
   SERVICE LOCATIONS
========================================================= */

.locations-section {
    padding: 110px 0;
    background: #ffffff;
}

.locations-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 45px;
}

.location-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px 18px;
    background: var(--light-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    color: var(--dark);
    font-weight: 600;
    transition: 0.25s ease;
}

.location-card:hover {
    transform: translateY(-3px);
    border-color: var(--primary);
    box-shadow: var(--shadow);
}

.location-card i {
    color: var(--primary);
    font-size: 17px;
}

.locations-note {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 28px;
    color: var(--light-text);
    font-size: 14px;
    text-align: center;
}

.locations-note i {
    color: var(--primary);
}

@media (max-width: 900px) {
    .locations-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 650px) {
    .locations-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }

    .location-card {
        padding: 16px 14px;
        font-size: 14px;
    }
}
.contact-detail-multi {
    display: flex;
    flex-direction: column;

    gap: 4px;
}

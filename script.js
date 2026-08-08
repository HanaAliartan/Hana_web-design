
const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    //Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when the nav link is clicked
navlinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
})

// Handle Contact form submission via Formspree
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const contactSubmit = document.querySelector("#contactSubmit");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        formStatus.textContent = "\u00A0";
        contactSubmit.disabled = true;
        const originalText = contactSubmit.textContent;
        contactSubmit.textContent = "Waa la dirayaa…";

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                formStatus.textContent = "Mahadsanid! Fariintaada waa la diray.";
                formStatus.style.color = "green";
                contactForm.reset();
            } else {
                formStatus.textContent = "Khalad ayaa dhacay. Isku day mar kale.";
                formStatus.style.color = "#8b0219";
            }
        } catch (err) {
            formStatus.textContent = "Ma jirto internet ama khalad ayaa dhacay.";
            formStatus.style.color = "#8b0219";
        } finally {
            contactSubmit.disabled = false;
            contactSubmit.textContent = originalText;
        }
    });
}

 
// Hasini Design - JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Current year in footer
    const year = document.querySelector("footer p:last-child");

    if (year) {
        year.textContent = "© " + new Date().getFullYear() +
            " Hasini Design. All Rights Reserved.";
    }

    // Smooth navigation
    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {
                event.preventDefault();

                const target = document.querySelector(targetId);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Simple scroll animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show-section");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });

});
const slider = document.querySelector(".visiting-slider");

if (slider) {
    const slides = slider.querySelectorAll(".visiting-slide");
    let currentSlide = 0;
    let startX = 0;

    function showVisitingSlide(index) {
        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.style.display =
                i === currentSlide ? "block" : "none";
        });
    }

    function changeSlide(direction) {
        showVisitingSlide(currentSlide + direction);
    }

    window.changeSlide = function(direction) {
    const slider = document.querySelector(".visiting-slider");
    if (!slider) return;

    const slides = slider.querySelectorAll(".visiting-slide");
    let current = -1;

    slides.forEach((slide, index) => {
        if (getComputedStyle(slide).display !== "none") {
            current = index;
        }
    });

    const next = (current + direction + slides.length) % slides.length;

    slides.forEach((slide, index) => {
        slide.style.display = index === next ? "block" : "none";
    });
};
    document.querySelectorAll(".slide-btn").forEach(button => {
    button.style.cursor = "pointer";
});

    slider.addEventListener("touchstart", function(event) {
        startX = event.touches[0].clientX;
    });

    slider.addEventListener("touchend", function(event) {
        const endX = event.changedTouches[0].clientX;

        if (startX - endX > 40) {
            changeSlide(1);
        } else if (endX - startX > 40) {
            changeSlide(-1);
        }
    });

    showVisitingSlide(0);
}

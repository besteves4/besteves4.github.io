document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".slider-track");
    const originalSlides = [...track.children];

    let visible = window.innerWidth <= 768 ? 1 : 3;

    function buildSlider() {

        // Remove previous clones
        track.querySelectorAll(".clone").forEach(el => el.remove());

        visible = window.innerWidth <= 768 ? 1 : 3;

        // Clone only the number of visible slides
        for (let i = 0; i < visible; i++) {
            const clone = originalSlides[i].cloneNode(true);
            clone.classList.add("clone");
            track.appendChild(clone);
        }
    }

    buildSlider();

    let current = 0;
    let timer;

    function slideWidth() {

        const slide = track.querySelector(".slide");
        const gap = parseFloat(getComputedStyle(track).gap);

        return slide.offsetWidth + gap;

    }

    function move() {

        track.style.transform =
            `translateX(-${current * slideWidth()}px)`;

    }

    function next() {

        current++;

        track.style.transition = "transform 0.9s ease";
        move();

    }

    track.addEventListener("transitionend", () => {

        if (current >= originalSlides.length) {

            track.style.transition = "none";
            current = 0;
            move();

            // Force browser reflow so transition is re-enabled cleanly
            track.offsetHeight;

            track.style.transition = "transform 0.9s ease";
        }

    });

    function start() {

        timer = setInterval(next, 4500);

    }

    function stop() {

        clearInterval(timer);

    }

    track.addEventListener("mouseenter", stop);
    track.addEventListener("mouseleave", start);

    window.addEventListener("resize", () => {

        stop();

        buildSlider();

        current = 0;

        track.style.transition = "none";
        move();

        start();

    });

    move();
    start();

});
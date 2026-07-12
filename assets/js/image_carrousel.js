document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".gallery-track");

    let speed = 1.4; // pixels per frame (~20 px/sec at 60fps)
    let position = 0;
    let paused = false;

    function getStep() {
        const first = track.firstElementChild;
        const gap = parseFloat(getComputedStyle(track).gap);
        return first.offsetHeight + gap;
    }

    function animate() {

        if (!paused) {

            position += speed;
            track.style.transform = `translateY(-${position}px)`;

            const step = getStep();

            if (position >= step) {

                position -= step;

                track.appendChild(track.firstElementChild);

                track.style.transform = `translateY(-${position}px)`;

            }

        }

        requestAnimationFrame(animate);

    }

    track.addEventListener("mouseenter", () => paused = true);
    track.addEventListener("mouseleave", () => paused = false);

    animate();

});
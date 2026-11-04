document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".gallery-track");
    if (!track || track.children.length < 2) return;

    // Respect the "reduce motion" accessibility setting: show the photos without scrolling them
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const speed = 84;      // pixels per second (same pace as before on a 60 Hz screen,
                           // but no longer twice as fast on 120 Hz phones and tablets)
    let position = 0;
    let paused = false;    // mouse over the gallery
    let visible = true;    // gallery on screen
    let last = null;
    let frameId = null;

    function getStep() {
        const first = track.firstElementChild;
        const gap = parseFloat(getComputedStyle(track).rowGap) || 0;
        const margin = parseFloat(getComputedStyle(first).marginBottom) || 0;
        return first.offsetHeight + margin + gap;   // include the margin to avoid a jump on each loop
    }

    function animate(now) {

        frameId = null;

        if (last !== null && !paused) {

            const elapsed = Math.min(now - last, 100) / 1000;   // seconds; capped after a stall
            position += speed * elapsed;

            const step = getStep();

            if (position >= step) {

                position -= step;

                track.appendChild(track.firstElementChild);

            }

            track.style.transform = `translateY(-${position}px)`;

        }

        last = now;

        if (visible) frameId = requestAnimationFrame(animate);

    }

    function start() {
        if (frameId === null) {
            last = null;
            frameId = requestAnimationFrame(animate);
        }
    }

    track.addEventListener("mouseenter", () => paused = true);
    track.addEventListener("mouseleave", () => paused = false);

    // Stop animating while the gallery is scrolled out of view (saves battery on phones)
    if ("IntersectionObserver" in window) {
        new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            if (visible) start();
        }).observe(track.parentElement);
    }

    start();

});

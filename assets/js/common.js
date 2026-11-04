// aHR0cHM6Ly9naXRodWIuY29tL2x1b3N0MjYvYWNhZGVtaWMtaG9tZXBhZ2U=
$(function () {
    lazyLoadOptions = {
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 300,
        placeholder: "",
        onError: function(element) {
            console.log('[lazyload] Error loading ' + element.data('src'));
        },
        afterLoad: function(element) {
            if (element.is('img')) {
                // remove background-image style
                element.css('background-image', 'none');
            } else if (element.is('div')) {
                // set the style to background-size: cover; 
                element.css('background-size', 'cover');
                element.css('background-position', 'center');
            }
        }
    }

    $('img.lazy, div.lazy:not(.always-load)').Lazy({visibleOnly: true, ...lazyLoadOptions});
    $('div.lazy.always-load').Lazy({visibleOnly: false, ...lazyLoadOptions});

    $('[data-toggle="tooltip"]').tooltip()

    var $grid = $('.grid').masonry({
        "percentPosition": true,
        "itemSelector": ".grid-item",
        "columnWidth": ".grid-sizer"
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });

    $(".lazy").on("load", function () {
        $grid.masonry('layout');
    });
})

// Mobile: close the drop-down menu when tapping anywhere outside the navbar
document.addEventListener("click", function (e) {
    var menu = document.getElementById("navbarNavDropdown");
    if (!menu || !menu.classList.contains("show") || e.target.closest(".navbar")) return;
    bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false }).hide();
});

// Mobile: keep the highlighted year/section chip visible in the swipeable chip row
document.addEventListener("activate.bs.scrollspy", function (e) {
    var link = e.relatedTarget;
    var nav = link && link.closest(".resume-nav nav");
    if (!nav || nav.scrollWidth <= nav.clientWidth) return; // desktop: vertical list, nothing to do
    var offset = link.getBoundingClientRect().left - nav.getBoundingClientRect().left;
    nav.scrollTo({ left: nav.scrollLeft + offset - (nav.clientWidth - link.offsetWidth) / 2, behavior: "smooth" });
});

// Keep --header-offset equal to the real height of the pinned header (navbar + tagline).
// On phones the tagline wraps onto two or more lines, so its height depends on the screen
// width and font; the section chips and in-page links use this value to stay below it.
(function () {
    var navbar = document.querySelector(".navbar");
    var tagline = document.querySelector(".hero-tagline");
    if (!navbar || !tagline || !window.ResizeObserver) return;
    var observer = new ResizeObserver(function () {
        var height = navbar.getBoundingClientRect().height + tagline.getBoundingClientRect().height;
        document.documentElement.style.setProperty("--header-offset", height + "px");
    });
    observer.observe(navbar);
    observer.observe(tagline);
})();

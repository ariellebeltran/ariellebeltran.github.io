// Declare slideIndex globally so it's accessible across functions
let slideIndex = [1, 1, 1, 1, 1]; // One index per slideshow
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5"];
let autoSlideInterval = 6000; // Change every 3 seconds

// Ensure script runs after page loads
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < slideId.length; i++) {
        showSlides(slideIndex[i], i); // Initialize slideshows
        autoSlides(i); // Start auto-sliding
    }

    // Add event listeners for navigation buttons only if they exist
    for (let i = 0; i < slideId.length; i++) {
        let prevBtn = document.querySelector(`.prev${i}`);
        let nextBtn = document.querySelector(`.next${i}`);

        if (prevBtn) {
            prevBtn.addEventListener("click", function () {
                plusSlides(-1, i);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", function () {
                plusSlides(1, i);
            });
        }
    }
});

function plusSlides(n, no) {
    if (slideIndex[no] !== undefined) {
        slideIndex[no] += n;
        showSlides(slideIndex[no], no);
    }
}

function showSlides(n, no) {
    let slides = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(`dot${no}`);

    // Ensure elements exist before modifying them
    if (!slides || slides.length === 0 || !dots || dots.length === 0) return;

    if (n > slides.length) { slideIndex[no] = 1; }
    if (n < 1) { slideIndex[no] = slides.length; }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Reset active dot
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the active slide and highlight the corresponding dot
    if (slides[slideIndex[no] - 1]) {
        slides[slideIndex[no] - 1].style.display = "block";
    }
    if (dots[slideIndex[no] - 1]) {
        dots[slideIndex[no] - 1].className += " active";
    }
}

function autoSlides(no) {
    setInterval(() => {
        plusSlides(1, no);
    }, autoSlideInterval);
}




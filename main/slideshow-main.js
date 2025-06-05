// 🔹 Slideshow Variables
let slideshowIndex = [1]; 
let slideId = ["mySlides1"]; 

// 🔹 Modal Variables
let baseUrl = "https://ariellebeltran.github.io/portfolio/main/images/";
let imageSets = {
    0: ["431-neonatal-assets1.png", "431-neonatal-assets2.png", "431-neonatal-assets3.png"],
    1: [""]
};
let currentSet = [];
let modalSlideIndex = 0;
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImage");
let captionText = document.getElementById("caption");

// 🔹 Initialize Slideshow
showSlides(1, 0);

// 🔹 Slideshow Navigation
function plusSlides(n, no) {
    console.log(`plusSlides clicked: n=${n}, no=${no}`);
    slideshowIndex[no] += n;
    showSlides(slideshowIndex[no], no);
}

// 🔹 Modal Navigation
function plusSlidesModal(n) {
    modalSlideIndex += n;
    showModalSlides(modalSlideIndex);
}

// 🔹 Slideshow Display Logic
function showSlides(n, no) {
    let i;
    let slides = document.getElementsByClassName(slideId[no]);
    let dots = document.getElementsByClassName(`dot${no}`);

    console.log("Dots length:", dots.length);
    console.log("Trying to access dot index:", slideshowIndex[no] - 1);
    console.log("Dots[slideshowIndex[no] - 1]:", dots[slideshowIndex[no] - 1]);

    if (n > slides.length) { slideshowIndex[no] = 1; }
    if (n < 1) { slideshowIndex[no] = slides.length; }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Update dots if they exist
    if (dots.length > 0 && dots[slideshowIndex[no] - 1]) { 
        dots[slideshowIndex[no] - 1].className += " active";
    }

    // Show correct slide
    slides[slideshowIndex[no] - 1].style.display = "block";
}

// 🔹 Modal Display Logic
function openModal(index) {
    currentSet = imageSets[index];
    modalSlideIndex = 0;
    modal.style.display = "block";
    showModalSlides(modalSlideIndex);
}

function closeModal() {
    modal.style.display = "none";
}

function showModalSlides(n) {
    if (n >= currentSet.length) modalSlideIndex = 0;
    if (n < 0) modalSlideIndex = currentSet.length - 1;

    modalImg.src = baseUrl + currentSet[modalSlideIndex];
    captionText.innerHTML = `Image ${modalSlideIndex + 1} of ${currentSet.length}`;

    console.log("Current modal index:", modalSlideIndex);
}

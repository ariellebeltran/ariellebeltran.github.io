let baseUrl = "https://ariellebeltran.github.io/portfolio/main/images/";

let imageSets = {
    0: ["431-neonatal-assets1.png", "431-neonatal-assets2.png"],
    1: ["image2-inside1.jpg", "image2-inside2.jpg", "image2-inside3.jpg"]
};

let currentSet = [];
let slideIndex = 0;
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImage");
let captionText = document.getElementById("caption");

function openModal(index) {
    currentSet = imageSets[index]; // Load correct image set
    slideIndex = 1; // Start at first image (index 1 for consistency)
    modal.style.display = "block";
    showSlides(slideIndex);
}

function closeModal() {
    modal.style.display = "none";
}

function showSlides(n) {
    if (n > currentSet.length) slideIndex = 1; // Loop back to first image
    if (n < 1) slideIndex = currentSet.length; // Go to last image
    modalImg.src = baseUrl + currentSet[slideIndex - 1]; // Set image source
    captionText.innerHTML = `Image ${slideIndex} of ${currentSet.length}`;
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

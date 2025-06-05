let baseUrl = "https://ariellebeltran.github.io/portfolio/main/images/";

let imageSets = {
    0: ["431-neonatal-assets1.png", "431-neonatal-assets2.png"],
    1: ["image2-inside1.jpg", "image2-inside2.jpg", "image2-inside3.jpg"]
};

let currentSet = [];
let modalSlideIndex = 0; // ✅ Updates the first slideshow
let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImage");
let captionText = document.getElementById("caption");

function openModal(index) {
    currentSet = imageSets[index]; // Load correct image set
    modalSlideIndex = 0; // Start at first image (index 1 for consistency)
    modal.style.display = "block";
    showSlides(modalSlideIndex);
}

function closeModal() {
    modal.style.display = "none";
}

function showSlides(n) {
    if (n >= currentSet.length) modalSlideIndex = 0; // Loop back to first image
    if (n < 0) modalSlideIndex = currentSet.length - 1; // Go to last image

    modalImg.src = baseUrl + currentSet[modalSlideIndex]; // ✅ Set image correctly
    captionText.innerHTML = `Image ${modalSlideIndex + 1} of ${currentSet.length}`;

    console.log("Current modal index:", modalSlideIndex); // ✅ Debugging check
}


function plusSlides(n) {
    modalSlideIndex += n;
    showSlides(modalSlideIndex);
}

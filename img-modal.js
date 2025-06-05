let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImage");
let captionText = document.getElementById("caption");

let imageSets = {
    0: ["431-neonatal-assets1.png", "431-neonatal-assets2.png", "image1-inside3.jpg"],
    1: ["image2-inside1.jpg", "image2-inside2.jpg", "image2-inside3.jpg"]
};

let currentSet = [];
let slideIndex = 0;

function openModal(index) {
    currentSet = imageSets[index]; // Load the correct image set
    slideIndex = 0;
    modal.style.display = "block";
    updateModal();
}

function closeModal() {
    modal.style.display = "none";
}

function updateModal() {
    modalImg.src = currentSet[slideIndex];
    captionText.innerHTML = `Image ${slideIndex + 1} of ${currentSet.length}`;
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= currentSet.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = currentSet.length - 1;
    updateModal();
}

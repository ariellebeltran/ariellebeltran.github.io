// let slideIndex1 = 1;
// showSlides1(slideIndex1);

// // Next/previous controls
// function plusSlides1(n) {
//     showSlides1(slideIndex1 += n);
// }

// // Thumbnail image controls
// function currentSlide1(n) {
//     showSlides1(slideIndex1 = n);
// }

// function showSlides1(n) {
//     let i;
//     let slides1 = document.getElementsByClassName("mySlides");
//     let dots1 = document.getElementsByClassName("dot1");
//     if (n > slides1.length) { slideIndex1 = 1 }
//     if (n < 1) { slideIndex1 = slides1.length }
//     for (i = 0; i < slides1.length; i++) {
//         slides1[i].style.display = "none";
//     }
//     for (i = 0; i < dots1.length; i++) {
//         dots1[i].className = dots1[i].className.replace(" active", "");
//     }
//     slides1[slideIndex1 - 1].style.display = "block";
//     dots1[slideIndex1 - 1].className += " active";
// }

// thank you w3schools
// let slideIndex = 1;
// showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

//adding dots for reference ================ vvvvvv
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

let slideIndex = [1,1,1]; //tracks # of slides
let slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0); //initializes slideshow
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

//n checks if user moves forward or backward in the slides
//no checks which slideshow to modify

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]); //x stores all slide elements belonging to that slideshow
  if (n > x.length) {slideIndex[no] = 1;} //if n is greater than amount of slides, it loops back to start
  if (n < 1) {slideIndex[no] = x.length;} //if n is less than 1 it goes to the last slide
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

// Adjusts arrow placement dynamically based on image heights
// window.addEventListener('load', function() {
//     slideId.forEach((id) => {
//         const slides = document.getElementsByClassName(id);

//         for (let slide of slides) {
//             const img = slide.querySelector("img"); // Select the image inside the slide
//             if (img) {
//                 const width = img.clientWidth;
//                 document.querySelector('.prev').style.left = `${-width * 0.5}px`; // Position prev arrow
//                 document.querySelector('.next').style.right = `${-width * 0.5}px`; // Position next arrow
//             }
//         }
//     });
// });


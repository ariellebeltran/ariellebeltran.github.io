var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// let coll = document.getElementsByClassName("collapsible");

//       for (let i = 0; i < coll.length; i++) {
//         coll[i].addEventListener("click", function () {
//           this.classList.toggle("active");
//           let content = this.nextElementSibling;
//           if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//           } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//           }
//         });
//       }

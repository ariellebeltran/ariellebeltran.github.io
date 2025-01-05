// navigation js

function myFunction() {
    var x = document.getElementById("aDropdown");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.hamburger_symb')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

// Add event listener to all dropdown links to close dropdown when clicked
var dropdownLinks = document.querySelectorAll("#aDropdown a");
dropdownLinks.forEach(function(link) {
  link.addEventListener('click', function() {
      var x = document.getElementById("aDropdown");
      if (x.style.display === "block") {
          x.style.display = "none";
      }
  });
});


// for the dropdown content for the about section
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
    event.stopPropagation(); // Prevent the click from propagating to the document
  });
}

// to open the about section if user clicks on 'about' under the nav bar
document.addEventListener("DOMContentLoaded", () => {
  const aboutLink = document.querySelector("a[href='#about-section']");
  if (aboutLink) {
      aboutLink.addEventListener("click", (event) => {
          event.preventDefault();
          const aboutSection = document.getElementById("about-section");
          const collapsible = aboutSection.querySelector(".collapsible");
          const aboutCollapsible = aboutSection.querySelector(".about-collapsible");

          if (collapsible && aboutCollapsible) {
              aboutCollapsible.style.display = "block";
              collapsible.classList.add("active");
              aboutSection.scrollIntoView({ behavior: "smooth" });
          }
          event.stopPropagation(); // Prevent the click from propagating to the document
      });
  }
});



// close the collapsible section if the user clicks anywhere else
document.addEventListener("click", (event) => {
    const aboutSection = document.getElementById("about-section");
    const collapsible = aboutSection.querySelector(".collapsible");
    const aboutCollapsible = aboutSection.querySelector(".about-collapsible");

    if (collapsible && aboutCollapsible && aboutCollapsible.style.display === "block") {
        if (!aboutSection.contains(event.target) && !collapsible.contains(event.target)) {
            aboutCollapsible.style.display = "none";
            collapsible.classList.remove("active");
        }
    }
});


//dropside? for the main content

function expandItem(element) {
  const expandedItem = document.querySelector('.item-role.expanded');
  if (expandedItem) {
      expandedItem.classList.remove('expanded');
  }
  element.classList.add('expanded');
}


// close the collapsible section if the user clicks anywhere else
// Add event listener for clicks on the document
document.addEventListener("click", (event) => {
  const expandedItem = document.querySelector('.item-role.expanded');
  if (expandedItem && !expandedItem.contains(event.target)) {
      expandedItem.classList.remove('expanded');
  }
});

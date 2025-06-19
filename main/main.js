// navigation js

function myFunction() {
    var x = document.getElementById("aDropdown");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

window.onclick = function (event) {
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
dropdownLinks.forEach(function (link) {
    link.addEventListener('click', function () {
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
    coll[i].addEventListener("click", function () {
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


//for the main content, need to separate the content that shows at default vs when expanded
function expandItem(element) {
    let collapsed = element.querySelector('.item-collapsed');
    let expanded = element.querySelector('.item-expanded');

    // Check if this item is already expanded
    let isExpanded = expanded.style.display === 'block';

    // Hide all other expanded items
    document.querySelectorAll('.item-role .item-expanded').forEach(item => {
        item.style.display = 'none';
    });

    // Toggle the clicked item's content inside itself
    if (!isExpanded) {
        collapsed.style.display = 'none';
        expanded.style.display = 'block';
    } else {
        collapsed.style.display = 'block';
        expanded.style.display = 'none';
    }

}


// Expands the clicked item
function expandItem(element) {
    const expandedItem = document.querySelector('.item-role.expanded');
    // const collapsedItem = document.querySelector('.item-role.collapsed');

    if (expandedItem) {
        expandedItem.classList.remove('expanded');
    }
    element.classList.add('expanded');

}


// Closes the expanded section if the user clicks anywhere else
document.addEventListener("click", (event) => {
    const expandedItem = document.querySelector('.item-role.expanded');
    // Ensure the click is outside of the expanded section
    if (expandedItem && !expandedItem.contains(event.target)) {
        expandedItem.classList.remove('expanded');
    }
});

// Close button functionality
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevents triggering the document click listener
        const expandedItem = this.closest('.item-role');
        if (expandedItem) {
            expandedItem.classList.remove('expanded');
        }
    });
});

// Close button functionality different method
document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".close-about");
    const aboutCollapsible = document.querySelector(".about-collapsible");

    closeButton.addEventListener("click", function () {
        aboutCollapsible.style.display = "none";
    });
});


//for highlighting the selected section in a page (career pages)
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("ol li a");
    const sections = document.querySelectorAll("div.section-project_overview ol li a");

    function highlightSection(id) {
        links.forEach(link => {
            link.classList.remove("active-section"); // Updated class name
            if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active-section"); // Updated class name
            }
        });
    }

    document.addEventListener("scroll", function () {
        sections.forEach(section => {
            const sectionElement = document.querySelector(section.getAttribute("href"));
            const rect = sectionElement.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 8) {
                highlightSection(sectionElement.id);
            }
        });
    });

    links.forEach(link => {
        link.addEventListener("click", function () {
            const id = this.getAttribute("href").substring(1);
            highlightSection(id);
        });
    });
});

//play or pause gif
document.querySelectorAll('.gif-toggle').forEach(img => {
    img.addEventListener('click', () => {
        img.src = img.src === img.dataset.gif ? img.dataset.static : img.dataset.gif;
    });
});

//show or hide button

//commented these out, found out i can combine the 2 functions together
// function toggleFunction1() {
//     var x = document.getElementById("moreProj");
//     var btn = document.getElementById("moreProj-bttn"); 
//     if (window.getComputedStyle(x).display === "none") {
//         x.style.display = "grid";
//         btn.innerText = "(Hide)";

//     } else {
//         x.style.display = "none";
//         btn.innerText = "(Show)"; 

//     }
// }

// function toggleFunction2() {
//     var x = document.getElementById("assetProj");
//     var btn = document.getElementById("assetProj-bttn");

//     if (window.getComputedStyle(x).display === "none") {
//         x.style.display = "grid";
//         btn.innerText = "(Hide)"; 
//     } else {
//         x.style.display = "none";
//         btn.innerText = "(Show)"; 

//     }
// }

function toggleFunction(elementId, buttonId) {
    var x = document.getElementById(elementId);
    var btn = document.getElementById(buttonId);

    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "grid";
        btn.innerText = "(Hide)";
    } else {
        x.style.display = "none";
        btn.innerText = "(Show)";
    }
}

document.addEventListener("click", function (event) {
    var elements = [
        { id: "moreProj", buttonId: "moreProj-bttn" },
        { id: "assetProj", buttonId: "assetProj-bttn" },
        { id: "appendixProj", buttonId: "appendix-bttn" }
    ];

    elements.forEach(({ id, buttonId }) => {
        var x = document.getElementById(id);
        var btn = document.getElementById(buttonId);

        if (window.getComputedStyle(x).display === "grid" && event.target !== x && event.target !== btn) {
            x.style.display = "none";
            btn.innerText = "(Show)";
        }
    });
});

// function copyEmail() {
//     const emailField = document.getElementById("emailToCopy");
//     emailField.select();
//     emailField.setSelectionRange(0, 99999);
//     navigator.clipboard.writeText(emailField.value).then(() => {
//         alert("Email copied: " + emailField.value);
//     });
// }


document.addEventListener("DOMContentLoaded", () => {
    function copyEmail(inputId) {
        const emailField = document.getElementById(inputId);
        emailField.select();
        emailField.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(emailField.value).then(() => {
            alert("Email copied: " + emailField.value);
        });
    }
});
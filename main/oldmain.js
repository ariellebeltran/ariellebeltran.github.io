// taken from w3schools

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//     document.getElementById("aDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropBttn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
// }

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



// function toggleLayout() {
//     const container = document.getElementById("timelineContainer");
//     const toggleButton = document.querySelector('.item3 h3'); // Adjust selector if needed

//     // Toggle between grid and timeline classes
//     if (container.classList.contains("grid-layout")) {
//         container.classList.remove("grid-layout");
//         container.classList.add("timeline-layout");
//         toggleButton.textContent = 'Timeline'; // Change text to "Timeline"
//     } else {
//         container.classList.remove("timeline-layout");
//         container.classList.add("grid-layout");
//         toggleButton.textContent = 'Grid'; // Change text back to "Grid"
//     }
// }

// // Get references to the slider, display, and container
// const yearSlider = document.getElementById("yearSlider");
// const yearDisplay = document.getElementById("yearDisplay");
// const timelineContainer = document.getElementById("timelineContainer");

// // Function to update displayed year and filter content
// function filterContentByYear() {
//     const selectedYear = yearSlider.value;
//     yearDisplay.textContent = selectedYear;

//     // Show or hide items based on data-year attribute
//     const items = timelineContainer.querySelectorAll(".itemb");
//     items.forEach(item => {
//         if (item.getAttribute("data-year") === selectedYear) {
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
// }

// // Add event listener to update content on slider change
// yearSlider.addEventListener("input", filterContentByYear);

// // Initial filter on page load
// filterContentByYear();

function toggleLayout() {
    const container = document.getElementById("timelineContainer");
    const toggleButton = document.getElementById("toggleButton");
    const sliderContainer = document.getElementById("sliderContainer"); // This should wrap the slider and label

    // Check if it's currently in grid layout
    if (container.classList.contains("grid-layout")) {
        // Switch to timeline layout
        container.classList.remove("grid-layout");
        container.classList.add("timeline-layout");
        toggleButton.textContent = 'Timeline'; // Change button text to 'Timeline'
        sliderContainer.style.display = "block"; // Show slider container in timeline view
        filterItemsByYear(document.getElementById("yearSlider").value); // Apply filter based on current slider value
    } else {
        // Switch to grid layout
        container.classList.remove("timeline-layout");
        container.classList.add("grid-layout");
        toggleButton.textContent = 'Grid'; // Change button text back to 'Grid'
        sliderContainer.style.display = "none"; // Hide slider container in grid view

        // Reset item visibility in grid view
        const items = document.querySelectorAll(".container2 .itemb");
        items.forEach(item => item.style.display = "block"); // Show all items in grid view
    }
}

// Function to filter items based on selected year
function filterItemsByYear(year) {
    const items = document.querySelectorAll(".container2 .itemb");
    items.forEach(item => {
        const itemYear = item.getAttribute("data-year");
        if (itemYear === year) {
            item.style.display = "block"; // Show item if year matches
        } else {
            item.style.display = "none"; // Hide item if year doesn't match
        }
    });
}

// Event listener for the slider
document.getElementById("yearSlider").addEventListener("input", function() {
    const selectedYear = this.value;
    document.getElementById("selectedYear").textContent = selectedYear; // Update displayed year
    filterItemsByYear(selectedYear); // Filter items based on the slider value
});

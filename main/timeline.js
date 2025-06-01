document.querySelectorAll(".interval").forEach(interval => {
    interval.addEventListener("mouseenter", () => {
        const eventBox = interval.querySelector(".events");
        eventBox.style.display = "block";
    });

    interval.addEventListener("mouseleave", () => {
        const eventBox = interval.querySelector(".events");
        eventBox.style.display = "none";
    });
});


// document.querySelectorAll(".year").forEach(year => {
//     year.addEventListener("click", () => {
//         // Hide all intervals first
//         document.querySelectorAll(".interval").forEach(interval => {
//             interval.style.display = "none";
//         });

//         // Show the intervals inside the clicked year
//         year.querySelectorAll(".interval").forEach(interval => {
//             interval.style.display = "block";
//         });
//     });
// });

// // Hide intervals when clicking outside the timeline
// document.addEventListener("click", (event) => {
//     const timeline = document.querySelector(".timeline");

//     if (!timeline.contains(event.target)) {
//         document.querySelectorAll(".interval").forEach(interval => {
//             interval.style.display = "none";
//         });
//     }
// });

document.querySelectorAll(".year").forEach(year => {
    year.addEventListener("click", () => {
        const intervals = year.querySelectorAll(".interval");
        const isVisible = [...intervals].some(interval => interval.style.display === "block");

        // Hide all intervals first
        document.querySelectorAll(".interval").forEach(interval => {
            interval.style.display = "none";
        });

        // Toggle only intervals (NOT events inside them)
        if (!isVisible) {
            intervals.forEach(interval => {
                interval.style.display = "block";
                
                // Ensure events inside intervals STAY hidden
                interval.querySelectorAll(".events").forEach(event => {
                    event.style.display = "none";
                });
            });
        }
    });
});

// Hide intervals when clicking outside the timeline
document.addEventListener("click", (event) => {
    const timeline = document.querySelector(".timeline");

    if (!timeline.contains(event.target)) {
        document.querySelectorAll(".interval").forEach(interval => {
            interval.style.display = "none";
        });

        // Also ensure events remain hidden when clicking outside
        document.querySelectorAll(".events").forEach(event => {
            event.style.display = "none";
        });
    }
});


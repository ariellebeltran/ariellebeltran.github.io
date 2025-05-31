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


document.querySelectorAll(".year").forEach(year => {
    year.addEventListener("click", () => {
        // Hide all intervals first
        document.querySelectorAll(".interval").forEach(interval => {
            interval.style.display = "none";
        });

        // Show the intervals inside the clicked year
        year.querySelectorAll(".interval").forEach(interval => {
            interval.style.display = "block";
        });
    });
});

// Hide intervals when clicking outside the timeline
document.addEventListener("click", (event) => {
    const timeline = document.querySelector(".timeline");
    
    if (!timeline.contains(event.target)) {
        document.querySelectorAll(".interval").forEach(interval => {
            interval.style.display = "none";
        });
    }
});

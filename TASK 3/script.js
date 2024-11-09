document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const leftButton = carousel.querySelector('.left-btn');
    const rightButton = carousel.querySelector('.right-btn');

    // Scroll Left
    leftButton.addEventListener('click', () => {
        track.scrollBy({ left: -200, behavior: 'smooth' });
    });

    // Scroll Right
    rightButton.addEventListener('click', () => {
        track.scrollBy({ left: 200, behavior: 'smooth' });
    });
});

// Function to open the dialog
function openDialog() {
    document.getElementById("dialogOverlay").style.display = "flex";
}

// Function to close the dialog
function closeDialog() {
    document.getElementById("dialogOverlay").style.display = "none";
}

// Optional: If you want the dialog to close when clicking outside the dialog content
document.getElementById("dialogOverlay").addEventListener("click", function(event) {
    if (event.target === document.getElementById("dialogOverlay")) {
        closeDialog();
    }
});

var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
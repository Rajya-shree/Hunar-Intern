// JavaScript functionality can be added here for interactivity
document.getElementById('enrollButton').addEventListener('click', function() {
    window.location.href = 'registration.html'; // Redirect to registration.html
});
// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight Active Section in Navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Dynamic Course Filtering
document.querySelector('.sort-button').addEventListener('click', () => {
    alert('Sorting functionality to be implemented here!');
    // Add your sorting logic
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark/Light Mode Toggle
const toggleThemeButton = document.createElement('button');
toggleThemeButton.innerText = 'Toggle Theme';
toggleThemeButton.className = 'theme-toggle';
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleThemeButton.innerText = document.body.classList.contains('dark-mode')
        ? 'Light Mode' : 'Dark Mode';
});

// Search Box Placeholder Validation
const searchBox = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const query = searchBox.value.trim();
    if (!query) {
        alert('Please enter a search term');
    } else {
        alert(`Searching for "${query}"...`);
    }
});

// Add event listener for Enroll Buttons
document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to course enrollment page...');
        // Use window.location.href for actual redirection
    });
});
//add 3
// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight Active Section in Navbar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark/Light Mode Toggle
const toggleThemeButton = document.createElement('button');
toggleThemeButton.innerText = 'Toggle Theme';
toggleThemeButton.className = 'theme-toggle';
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleThemeButton.innerText = document.body.classList.contains('dark-mode')
        ? 'Light Mode' : 'Dark Mode';
});

// Search Box Validation
document.querySelector('.search-box button').addEventListener('click', (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('.search-box input').value.trim();
    if (!searchInput) {
        alert('Please enter a search term.');
    } else {
        alert(`Searching for "${searchInput}"...`);
    }
});

// Course Sorting
document.querySelector('.sort-button').addEventListener('click', () => {
    const courses = Array.from(document.querySelectorAll('.course-card'));
    courses.sort((a, b) => {
        const priceA = parseInt(a.querySelector('.price').innerText.replace('$', ''));
        const priceB = parseInt(b.querySelector('.price').innerText.replace('$', ''));
        return priceA - priceB; // Sort by ascending price
    });

    const coursesGrid = document.querySelector('.courses-grid');
    coursesGrid.innerHTML = '';
    courses.forEach(course => coursesGrid.appendChild(course));
    alert('Courses sorted by price!');
});

// Enroll Button Confirmation
document.querySelectorAll('.download-button').forEach(button => {
    button.addEventListener('click', () => {
        const courseName = button.previousElementSibling.querySelector('h3').innerText;
        const userConfirmed = confirm(`Are you sure you want to enroll in "${courseName}"?`);
        if (userConfirmed) {
            window.location.href = 'registration.html'; // Redirect to registration
        }
    });
});

// Testimonials Carousel (Simple Example)
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const nextButton = document.querySelector('.next-testimonial');
const prevButton = document.querySelector('.prev-testimonial');

function updateTestimonials() {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === currentTestimonialIndex ? 'block' : 'none';
    });
}

nextButton.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonials();
});

prevButton.addEventListener('click', () => {
    currentTestimonialIndex =
        (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonials();
});

updateTestimonials(); // Initialize testimonials


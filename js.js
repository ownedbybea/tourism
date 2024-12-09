
  
//   Main content
// Select all tabs and cards
const tabs = document.querySelectorAll('.tab-button');
const cards = document.querySelectorAll('.card');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelector('.tab-button.active').classList.remove('active');
        // Add active class to the clicked tab
        tab.classList.add('active');

        // Get the selected filter category
        const filter = tab.getAttribute('data-filter');

        // Show/hide cards based on the selected filter
        cards.forEach(card => {
            const category = card.getAttribute('data-category')?.trim(); // Trim to remove extra spaces
            if (filter === 'recommended' || category === filter) {
                card.style.display = 'flex'; // Show matching cards
            } else {
                card.style.display = 'none'; // Hide non-matching cards
            }
        });
    });
});


// abatan
let currentIndex = 0;

        function showSlide(index) {
            const carousel = document.getElementById('carousel');
            const slides = document.querySelectorAll('.carousel img');
            const dots = document.querySelectorAll('.dot');

            if (index >= slides.length) currentIndex = 0;
            if (index < 0) currentIndex = slides.length - 1;

            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        }
        function moveSlide(direction) {
            currentIndex += direction;
            showSlide(currentIndex);
        }

        function createDots() {
            const dotsContainer = document.getElementById('dots-container');
            const slides = document.querySelectorAll('.carousel img');

            slides.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    showSlide(currentIndex);
                });
                dotsContainer.appendChild(dot);
            });

            showSlide(currentIndex);
        }

        document.addEventListener('DOMContentLoaded', createDots);
        
// for kwan
function toggleNavbar() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

       
   

// script.js

// Initialize variables to keep track of the current gallery set
let currentGallery = 1;

// Function to switch between different gallery sets
function switchGallery(galleryNumber) {
  // Hide all gallery sets
  const gallerySets = document.querySelectorAll('.Permsite');
  gallerySets.forEach(gallery => {
    gallery.style.display = 'none';
  });

  // Show the selected gallery set
  const selectedGallery = document.getElementById(`gallery${galleryNumber}`);
  selectedGallery.style.display = 'block';

  // Update current gallery
  currentGallery = galleryNumber;
}

// Add event listeners to navbar links to switch between gallery sets
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const galleryNumber = link.getAttribute('data-gallery');
    switchGallery(galleryNumber);
  });
});

// Initial gallery display (show the first gallery set)
switchGallery(currentGallery);

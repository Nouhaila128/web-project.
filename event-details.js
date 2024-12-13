// Sélection des éléments
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const galleryContainer = document.getElementById('gallery-container');
const images = document.querySelectorAll('.gallery-img');

// Variables
let currentIndex = 0;

// Fonction pour mettre à jour la position de la galerie
function updateGallery() {
    const offset = -currentIndex * galleryContainer.offsetWidth;
    galleryContainer.style.transform = `translateX(${offset}px)`;
    galleryContainer.style.transition = 'transform 0.5s ease';
}

// Événement pour le bouton précédent
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateGallery();
});

// Événement pour le bouton suivant
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateGallery();
});

// Initialisation
updateGallery();


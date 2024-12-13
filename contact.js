// Initialisation de la carte OpenStreetMap avec Leaflet.js
const map = L.map('map').setView([33.2554, -8.5088], 14); // Coordonnées pour El Jadida

// Ajouter une couche de tuiles depuis OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

// Ajouter un marqueur pour une scène à El Jadida
L.marker([33.2554, -8.5088]).addTo(map)
    .bindPopup('<b>Scène principale</b><br>El Jadida, Maroc.')
    .openPopup();

// Gestion de la soumission du formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Votre message a été envoyé avec succès !");
        // Réinitialiser le formulaire après l'envoi
        document.getElementById('contactForm').reset();
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});
4
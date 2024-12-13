// Récupération du formulaire et des champs
const form = document.getElementById('event-form');
const eventName = document.getElementById('event-name');
const eventLocation = document.getElementById('event-location');
const eventDate = document.getElementById('event-date');
const eventType = document.getElementById('event-type');
const eventDescription = document.getElementById('event-description');

// Validation dynamique
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire

    // Vérification des champs obligatoires
    if (!eventName.value.trim()) {
        alert("Le champ 'Nom de l'événement' est requis !");
        eventName.focus();
        return;
    }

    if (!eventLocation.value.trim()) {
        alert("Le champ 'Lieu' est requis !");
        eventLocation.focus();
        return;
    }

    if (!eventDate.value) {
        alert("Le champ 'Date' est requis !");
        eventDate.focus();
        return;
    }

    if (!eventType.value) {
        alert("Veuillez sélectionner un type d'événement !");
        eventType.focus();
        return;
    }

    if (!eventDescription.value.trim()) {
        alert("Le champ 'Description' est requis !");
        eventDescription.focus();
        return;
    }

    // Si tous les champs sont valides
    alert("Événement ajouté avec succès !");
    form.reset(); // Réinitialise le formulaire après validation
});

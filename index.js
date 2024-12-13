document.addEventListener('DOMContentLoaded', (event) => {
    // Fonction pour afficher le message de bienvenue
    function displayWelcomeMessage() {
        const hour = new Date().getHours();
        let message;

        if (hour < 12) {
            message = "Bonjour !";
        } else if (hour < 18) {
            message = "Bon après-midi !";
        } else {
            message = "Bonsoir !";
        }

        const quoteDiv = document.querySelector('.quote');
        quoteDiv.innerHTML = message + " " + quoteDiv.innerHTML;
    }

    // Appeler la fonction pour afficher le message de bienvenue
    displayWelcomeMessage();
});
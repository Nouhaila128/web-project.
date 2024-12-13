// Sélectionnez le canevas pour le graphique
const ctx = document.getElementById('eventChart').getContext('2d');

// Données fictives pour les catégories d'événements
const eventCategories = ['Concert', 'Conférence', 'Exposition', 'Atelier', 'Festival'];
const eventCounts = [12, 8, 5, 7, 10]; // Exemple de données

// Création du graphique avec Chart.js
const eventChart = new Chart(ctx, {
    type: 'bar', // Type de graphique : barres verticales
    data: {
        labels: eventCategories, // Catégories
        datasets: [{
            label: 'Nombre d\'événements',
            data: eventCounts, // Nombre d'événements
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Filtrer les événements par type ou date
    document.getElementById('filter-type').addEventListener('change', filterEvents);
    document.getElementById('filter-date').addEventListener('input', filterEvents);

    function filterEvents() {
        let typeFilter = document.getElementById('filter-type').value;
        let dateFilter = document.getElementById('filter-date').value;

        let rows = document.querySelectorAll('#events-table tbody tr');
        rows.forEach(row => {
            let type = row.cells[3]?.textContent?.toLowerCase() || '';
            let date = row.cells[1]?.textContent || '';

            let showRow = true;

            // Filtrer par type
            if (typeFilter !== 'all' && type !== typeFilter.toLowerCase()) {
                showRow = false;
            }

            // Filtrer par date
            if (dateFilter && date !== dateFilter) {
                showRow = false;
            }

            row.style.display = showRow ? '' : 'none';
        });
    }

    // Afficher/Masquer les détails
    document.querySelectorAll('.details-btn').forEach(button => {
        button.addEventListener('click', function() {
            let row = this.closest('tr');
            let detailsRow = document.getElementById(`details-${this.dataset.id}`);
            if (detailsRow) {
                // Toggle the visibility of the details row
                detailsRow.style.display = (detailsRow.style.display === 'none' || detailsRow.style.display === '') ? 'table-row' : 'none';
            }
        });
    });

    // Supprimer l'événement
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            let row = this.closest('tr'); // Trouver la ligne parent du bouton "Supprimer"
            let detailsButton = row.querySelector('.details-btn');
            let detailsRow = detailsButton ? document.getElementById(`details-${detailsButton.dataset.id}`) : null;

            // Supprimer la ligne de l'événement
            row.remove();

            // Supprimer la ligne de détails associée (si elle existe)
            if (detailsRow) {
                detailsRow.remove();
            }
        });
    });
});

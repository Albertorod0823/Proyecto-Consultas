const especialidades = document.querySelectorAll('.especialidad');

especialidades.forEach(function(card) {
    card.addEventListener('click', function() {
        // Si ya está activa, la desactiva
        if (card.classList.contains('activa')) {
            card.classList.remove('activa');
            especialidades.forEach(function(c) {
                c.classList.remove('inactiva');
            });
            return;
        }
        
        // Activa la seleccionada e inactiva las demás
        especialidades.forEach(function(c) {
            c.classList.remove('activa');
            c.classList.add('inactiva');
        });
        card.classList.remove('inactiva');
        card.classList.add('activa');
    });
});
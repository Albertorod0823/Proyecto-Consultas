emailjs.init("PUBLIC ID");

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

// Ocultar calendario
const form = document.querySelector('form');
const calendario = document.getElementById('calendario');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    calendario.style.display = 'flex';
    setTimeout(function() {
        calendario.classList.add('visible');
    }, 10);

    form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const templateParams = {
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value,
        seguro: document.querySelector('input[name="seguro"]:checked').value,
        motivo: document.getElementById('razon').value,
        fecha: 'Por confirmar'
    };

    emailjs.send('SERVICE KEY', 'TEMPLATE KEY', templateParams)
        .then(function() {
            calendario.style.display = 'flex';
            setTimeout(function() {
                calendario.classList.add('visible');
            }, 10);
        })
        .catch(function(error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar, intenta de nuevo');
        });
});
});

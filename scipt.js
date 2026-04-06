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

// Ocultar/desocultar calendario
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

    emailjs.send('SERVICE ID', 'TEMPLATE ID', templateParams)
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

// Calendario interactivo
// Calendario
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let mesActual = new Date().getMonth();
let anioActual = new Date().getFullYear();
let diaSeleccionado = null;

function generarCalendario(mes, anio) {
    document.querySelector('#cal-header h3').textContent = `${meses[mes]} ${anio}`;
    
    const primerDia = new Date(anio, mes, 1).getDay();
    const diasEnMes = new Date(anio, mes + 1, 0).getDate();
    
    // Ajustar para que empiece en lunes (0=lunes)
    const inicio = primerDia === 0 ? 6 : primerDia - 1;
    
    let html = '';
    let dia = 1;
    
    for (let fila = 0; fila < 6; fila++) {
        html += '<tr>';
        for (let col = 0; col < 7; col++) {
            const celda = fila * 7 + col;
            if (celda < inicio || dia > diasEnMes) {
                html += '<td></td>';
            } else {
                html += `<td data-dia="${dia}" data-mes="${mes}" data-anio="${anio}">${dia}</td>`;
                dia++;
            }
        }
        html += '</tr>';
    }
    
    document.getElementById('cal-body').innerHTML = html;
    
    // Agregar eventos de clic a los días
    document.querySelectorAll('#cal-body td[data-dia]').forEach(function(td) {
        td.addEventListener('click', function() {
            document.querySelectorAll('#cal-body td').forEach(t => t.classList.remove('dia-seleccionado'));
            this.classList.add('dia-seleccionado');
            diaSeleccionado = `${this.dataset.dia} de ${meses[mes]} de ${anio}`;
        });
    });
}

document.getElementById('prev-mes').addEventListener('click', function() {
    mesActual--;
    if (mesActual < 0) { mesActual = 11; anioActual--; }
    generarCalendario(mesActual, anioActual);
});

document.getElementById('next-mes').addEventListener('click', function() {
    mesActual++;
    if (mesActual > 11) { mesActual = 0; anioActual++; }
    generarCalendario(mesActual, anioActual);
});

generarCalendario(mesActual, anioActual);
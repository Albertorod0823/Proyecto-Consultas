# Consultas EGT
## Descripción
El proyecto consiste en la realización de una landing page para un servicio de consultas de un psicólogo, tendrá la funcionalidad de ver su introudcción, los tipos de casos que trata y un calendario para poder agendar citas.

## Problema identificado
La poca presencia en linea del psicólogo resulta detrimental para su crecimiento con clientes, ademas de ello, es conveniente tener un recurso disponible a todo momento para aquellos futuros clientes que deseen atender sesiones. Esto desata varios problemas:
- Poca gente descubre el servicio
- Limitación de horas de atencion
- Poco visual

## Solución
Creación de una paágina con disponibilidad a todo momento y la facilidad de poder ver sus tratamientos y disponibilidad sin la necesidad de utilizar mucha energia o salir a la calle, ideal para alguien con problemas por resolver.

## Arquitectura
La solución del proyecto está compuesta por:

- Frontend: HTML, CSS y JavaScript
- Backend / API: Emailjs y JavaScript
- Infraestructura: GitHub

![Diagrama de arquitectura](img/arqui.png)
El usuario interactúa con el frontend que envía los datos al backend, específicamente el servicio Emailjs, que envía el correo electrónico al psicólogo para que el pueda confirmar o rechazar la cita.

## Tabla de contenidos
- [Descripción](#descripción)
- [Problema identificado](#problema-identificado)
- [Solución](#solución)
- [Arquitectura](#arquitectura)
- [Requerimientos](#requerimientos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Contribución](#contribución)
- [Roadmap](#roadmap)


## Requerimientos

## Infraestructura
* Sistema operativo recomendado: Windows, macOS o Linux

## Software y dependencias
* Navegador web (Chrome, Firefox, Edge, Opera)
* Cuenta en EmailJS con Service ID, Template ID y Public Key configurados
* Git

## Paquetes adicionales
* [EmailJS](https://www.emailjs.com/) — servicio para envío de correos desde el frontend

## Instalación

## Clonar repositorio
git clone https://github.com/Albertorod0823/Proyecto-Consultas.git

cd Proyecto-Consultas

## Configurar EmailJS
1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Crear un servicio de correo en **Email Services**
3. Crear una plantilla en **Email Templates** con las variables descritas
4. Obtener **Service ID**, **Template ID** y **Public Key**
5. Reemplazar en `script.js`:

## Ejecutar en ambiente local
1. Abrir la carpeta del proyecto
2. Abrir `index.html` en cualquier navegador

## Pruebas

## Pruebas funcionales manuales
1. Abrir `index.html` en el navegador
2. Navegar a la sección **Agendar cita**
3. Llenar el formulario con datos de prueba
4. Dar clic en **Enviar información**
5. Verificar que aparece el calendario
6. Seleccionar un día disponible
7. Confirmar la cita en el popup
8. Verificar que llega el correo

## Configuración

## Archivos principales
* `index.html` — estructura de la página
* `styles.css` — estilos visuales
* `script.js` — lógica e interactividad
* `.github/workflows/test.yml` — configuración de GitHub Actions

## Configuración de EmailJS
Las credenciales de EmailJS no se incluyen en el repositorio por privacidad. Para configurar el proyecto es necesario reemplazar en `script.js`

## Validaciones previas
* Cuenta de EmailJS configurada
* Credenciales reemplazadas en script.js
* Navegador disponible

## Uso

## Referencia para usuario final (paciente)
El paciente puede:
* Ver la introducción y perfil del psicólogo para conocerlo un poco
* Consultar las especialidades y tipos de casos que se atienden
* Llenar el formulario con sus datos de contacto
* Seleccionar una fecha disponible en el calendario
* Confirmar su cita y recibir confirmación por telefono

## Referencia para usuario administrador (psicólogo)
El psicólogo puede:
* Recibir correos automáticos con los datos del paciente y fecha solicitada
* Confirmar o rechazar la cita mediante una llamada o mensaje
* Gestionar las credenciales de EmailJS

## Contribución

## 1. Clonar repositorio
git clone https://github.com/Albertorod0823/Proyecto-Consultas.git

cd Proyecto-Consultas

## 2. Crear nueva rama
git checkout -b feature/nombre-cambio

## 3. Guardar cambios
git add .
git commit -m "feat: descripción breve del cambio"

## 4. Subir rama
git push origin feature/nombre-cambio

## 5. Enviar Pull Request
* Abrir un Pull Request hacia `develop`
* Describir claramente el objetivo de la contribución
* Adjuntar evidencia en caso de tenerla

## 6. Esperar revisión y merge
* Atender comentarios
* Realizar ajustes
* Hacer merge al aprobarse

## Roadmap
* **Responsividad** — adaptar el diseño para dispositivos de diferentes tamaños mediante media queries
* **Base de datos** — implementar una base de datos para registrar citas agendadas y bloquear automáticamente las fechas y horarios ya ocupados
* **Calendario dinámico** — mostrar únicamente los horarios disponibles del psicólogo en tiempo real
* **Panel de administración** — permitir al psicólogo gestionar sus citas agendadas directamente desde la página, puediendo bloquear días o liberarlos

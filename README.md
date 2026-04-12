# Consultas EGT
## Descripción
El proyecto consiste en la realizacion de una landing page para un servicio de consultas de un psicologo, tendra la funcionalidad de ver su introudccion, los tipos de casos que trata y un calendario para poder agendar citas.

## Problema identificado
La poca presencia en linea del psicologo resulta detrimental para su crecimiento con clientes, ademas de ello, es conveniente tener un recurso disponible a todo momento para aquellos futuros clientes que deseen atender sesiones. Esto desata varios problemas:
* Poca gente descubre el servicio
* Limitacion de horasa de atencion
* Poco visual

## Solución
Creacion de una pagina con disponibilidad a todo momento y la facilidad de poder ver sus tratamientos y disponibilidad sin la necesidad de utilizar mucha energia o salir a la calle, ideal para alguien con problemas por resolver.

## Arquitectura
La solución del proyecto está compuesta por:
Frontend: HTML, CSS y JavaScript
Backend / API: Emailjs y JavaScript
Infraestructura: GitHub

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
* Servidor de aplicación: No aplica
* Servidor web: No aplica
* Base de datos: No aplica en esta versión
* Sistema operativo recomendado: Windows, macOS o Linux

## Software y dependencias
* Navegador web moderno (Chrome, Firefox, Edge, Opera)
* Git
* Cuenta en EmailJS con Service ID, Template ID y Public Key configurados

## Paquetes adicionales
* [EmailJS](https://www.emailjs.com/) — servicio para envío de correos desde el frontend

## Instalación

## Clonar repositorio
git clone https://github.com/tu-usuario/Proyecto-Consultas.git
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

Uso:
Sección de referencia para usuario final. Manual que se hará referencia para usuarios finales.
Sección de referencia para usuario administrador.
Contribución:
Guía de contribución para usuarios.
Debe contar con pasos específicos para clonar repositorio, crear un nuevo branch, enviar el pull request, esperar a hacer el merge.
Roadmap:
Requerimientos que se implementarán en un futuro.

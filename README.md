HeroesApp
HeroesApp es una aplicación web desarrollada con Angular 19, que utiliza tecnologías modernas y mejores prácticas para proporcionar una experiencia interactiva, con autenticación de usuario, integración de reCAPTCHA, y consumo de API externa (Rick and Morty API) el contenido esdta en la rama de develop.

Características
Angular 19: Aprovechando las últimas características de la versión 19.

Ng Zorro Ant Design: Biblioteca de componentes basada en Ant Design, usada para crear una UI moderna y profesional.

reCAPTCHA: Implementación de Google reCAPTCHA para proteger los formularios de login.

SweetAlert2: Librería para mostrar alertas interactivas y elegantes.

Lazy Loading: Implementación de carga perezosa (lazy loading) para mejorar el rendimiento de la aplicación.

Modularización: La aplicación está organizada de manera modular, lo que facilita su mantenimiento y escalabilidad.

Pipe de Fecha: Se usa un pipe para formatear fechas en un componente de detalle.

Servicios Aislados: Los servicios están aislados para garantizar una buena separación de responsabilidades y mejorar la mantenibilidad.

Tablas de Datos: Se utiliza un componente de tabla de Ng Zorro para mostrar datos en un formato estructurado.

Pruebas con Jasmine: Se han realizado pruebas unitarias usando Jasmine para asegurar el correcto funcionamiento de la aplicación.

Funcionalidades
Login: La aplicación cuenta con una pantalla de login. Las credenciales predeterminadas son:

Usuario: admin@admin.com

Contraseña: Admin

Consumo de API: Al iniciar sesión, la aplicación consume la API de Rick and Morty para obtener información relevante sobre los personajes.

Paginación de Personajes: La aplicación muestra todos los personajes de Rick and Morty paginados, permitiendo navegar entre las páginas para ver más personajes.

Detalle del Personaje: Al hacer clic en un personaje, se muestra una tarjeta (card) con el resumen de la información del personaje, incluida su foto.

Diseño Responsivo: Utiliza el diseño basado en Ng Zorro Ant Design para tener una interfaz moderna, con tablas, botones, y formularios bien estructurados.

Modularización: Los módulos están divididos de manera lógica para facilitar la expansión y mantenimiento del proyecto. Cada módulo tiene sus propios componentes, servicios y rutas.

Lazy Loading: Los módulos de la aplicación se cargan bajo demanda para mejorar el tiempo de carga inicial de la app.

Pipe de Fecha: Se usa un pipe para mostrar fechas en formato adecuado dentro de un componente de detalle.

Tecnologías Utilizadas
@angular/animations: ^19.1.0

@angular/common: ^19.1.0

@angular/compiler: ^19.1.0

@angular/core: ^19.1.0

@angular/forms: ^19.1.0

@angular/platform-browser: ^19.1.0

@angular/platform-browser-dynamic: ^19.1.0

@angular/router: ^19.1.0

ng-recaptcha: ^13.2.1

ng-zorro-antd: ^19.2.2

rxjs: ~7.8.0

sweetalert2: ^11.19.1

tslib: ^2.3.0

zone.js: ~0.15.0

Jasmine: Para pruebas unitarias.

Cómo Correr la Aplicación
Requisitos
Node.js: Asegúrate de tener instalada una versión de Node.js compatible con Angular (recomendado: 16.x.x o superior).

Angular CLI: Asegúrate de tener instalada la herramienta de línea de comandos de Angular (@angular/cli).

Pasos para la ejecución:
Clona el repositorio:

bash
Copiar
Editar
git clone <URL_DEL_REPOSITORIO>
Instalar dependencias: Navega a la carpeta del proyecto y ejecuta:


npm install
Correr la aplicación en modo desarrollo: Para iniciar el servidor de desarrollo, ejecuta:


ng serve
Abrir en el navegador: Abre el navegador y navega a http://localhost:4200.

Pruebas
La aplicación incluye pruebas unitarias utilizando Jasmine. Para ejecutar las pruebas, puedes usar el siguiente comando:


ng test
Este comando ejecutará las pruebas unitarias y generará un informe en la terminal.

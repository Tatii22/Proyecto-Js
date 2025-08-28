# 🎨 Análisis del diseño en Figma

## 📑 Índice
- [1. Pantallas diseñadas](#1-pantallas-diseñadas)
  - [Flujo de autenticación](#-flujo-de-autenticación)
  - [Pantallas de la tienda](#-pantallas-de-la-tienda)
  - [Flujo de Checkout](#-flujo-de-checkout)
- [2. Análisis de diseño y usabilidad](#2-análisis-de-diseño-y-usabilidad)
- [3. Justificación UX](#3-justificación-ux)
- [4. Integración con el proyecto](#4-integración-con-el-proyecto)
- [5. Conclusión](#5-conclusión )

## 1. Pantallas diseñadas

En [Figma](https://www.figma.com/design/6HFe4ssA0Sb96y06MzWRip/Untitled?node-id=0-1&m=dev&t=g66UOxt80POAkrtr-1) se desarrollaron las siguientes vistas principales del sistema:

### 🔹 Flujo de autenticación

- **Pantalla de bienvenida (Splash):**
  - Muestra el logo de la aplicación.
  - Refuerza la identidad visual de la marca.

<div align="center">
  <img src="/documentacion/img/1.svg" alt="Pantalla 1" width="150"/>
</div>

- **Pantalla de login:**
  - Campos de usuario y contraseña.
  - Botón para mostrar/ocultar contraseña.
  - Enlace de recuperación de contraseña (*Forgot password*).
  - Botón *Sign In*.
  - Opciones de login social (Google y Facebook).

<div align="center">
  <img src="/documentacion/img/Login.png" alt="Pantalla Login" width="700" style="border: 1px solid #ccc; border-radius: 1px;"/>
</div>

- **Pantalla de registro (Create Account):**
  - Campos de username, email, password y confirmación de password.
  - Botón *Register*.
  - Opciones de login social.
  - Enlace para volver al login (*Already a member? Log in*).

<div align="center">
  <img src="/documentacion/img/Register.png" alt="Pantalla Login" width="700" style="border: 1px solid #ccc; border-radius: 1px;"/>
</div>

- **Modal de éxito (Account Success):**
  - Confirma la creación de cuenta.
  - Incluye ícono de validación y botón para continuar al login.

<div align="center">
  <img src="/documentacion/img/Exito.png" alt="Exito" width="700" style="border: 1px solid #ccc; border-radius: 1px;"/>
</div>

---

### 🔹 Pantallas de la tienda

- **Home / Landing Page:**
  - Encabezado con logo, compra, búsqueda y menú.
  - Imagen destacada (hero banner) con llamada a la acción.
  - Sección de *New Arrival* con categorías destacadas.
  - Logos de marcas asociadas.
  - Sección promocional secundaria con imagen.
  - Sección de informción de la tienda.
  - Sección de tendencias.
  - Footer con enlaces de logo y redes sociales.

<div align="center">
  <img src="/documentacion/img/Home.png" alt="Home" width="700" style="border: 1px solid #ccc; border-radius: 1px;"/>
</div>

- **Catálogo de productos:**
  - Encabezado con logo, compra, búsqueda y menú.
  - Listado dinámico de productos en formato grid/lista.
  - Cada tarjeta muestra imagen, nombre, categoría, precio y botón de favoritos.
  - Paginación en la parte inferior para navegar entre productos.
  - Footer con enlaces de logo y redes sociales.

<div align="center">
  <img src="/documentacion/img/Catalogo.png" alt="Catalodo" width="700" style="border: 1px solid #ccc; border-radius: 1px;"/>
</div>

- **Detalle de producto**
- Encabezado con logo, compra, búsqueda y menú.
- Vista individual de un producto.
- Muestra imágenes en alta resolución.
- Información detallada: nombre, precio, talla, variaciones y guía de tallas.
- Botón para agregar al carrito.
- Sección de información adicional y políticas de servicio.
- Footer con enlaces de logo y redes sociales.

<div align="center">
  <img src="/documentacion/img/Description.png" alt="Detalle" width="700" style="border: 1px solid #ccc; border-radius: 1px;"/>
</div>

- **Carrito de compras**
- Encabezado con menú.
- Lista de productos seleccionados con imagen, nombre, precio y cantidad.
- Opción para modificar cantidad o eliminar productos.
- Cálculo automático del total.
- Botón para proceder al pago (*Checkout*).

<div align="center">
  <img src="/documentacion/img/Store.png" alt="Store" width="700" style="border: 1px solid #ccc; border-radius: 1px;"/>
</div>

### 🔹 Flujo de Checkout

- **Pantalla de Checkout (Selección inicial):**
  - Formulario para ingresar nombre, dirección, ciudad, estado, código postal y teléfono.
  - Botón *Add Now* para guardar.

<div align="center">
  <img src="/documentacion/img/direccion.png" alt="Pantalla Add Address" width="500" style="border:1px solid #ccc;"/>
</div>

- **Pantalla de añadir tarjeta (Add New Card):**
  - Formulario para ingresar datos de tarjeta: nombre, número, fecha de expiración y CVV.
  - Visualización previa de la tarjeta.
  - Botón *Add Card*.

<div align="center">
  <img src="/documentacion/img/tarjeta.png" alt="Pantalla Add Card" width="500" style="border:1px solid #ccc;"/>
</div>


- **Pantalla de éxito en el pago (Payment Success):**
  - Confirma que la transacción fue completada.
  - Muestra un *Payment ID* como comprobante.
  - Incluye opción de valorar la compra con tres iconos de satisfacción.
  - Botones:
    - *Submit* para enviar la valoración.
    - *Back to Home* para regresar a la pantalla principal.

<div align="center">
  <img src="/documentacion/img/Checkout.png" alt="Pantalla Payment Success" width="400" style="border:1px solid #ccc;"/>
</div>

---
## 2. Análisis de diseño y usabilidad
- Diseño mobile-first, limpio y consistente (tipografía, colores, espaciados).  
- Jerarquía clara: logo > título > contenido > CTA.  
- Checkout en pasos cortos para reducir errores.  
- Feedback inmediato (mensajes de error, éxito, loaders).  
- Accesibilidad: buen contraste, áreas táctiles grandes, texto alternativo.  
---
## 3. Justificación UX
- **Login/Registro:** pocos campos + login social → menor fricción.  
- **Catálogo/Detalle:** imágenes grandes, precio visible, CTA accesibles.  
- **Carrito/Checkout:** edición sencilla, totales en vivo y confirmación clara.  
- Heurísticas: consistencia, visibilidad de estado, control del usuario.  
- Filtros básicos (categoría, precio, popularidad) → búsqueda rápida y flexible.  
---
## 4. Integración con el proyecto
- Arquitectura modular: `/api`, `/state`, `/ui`, `/features`, `/utils`.  
- Flujo: login → catálogo → detalle → carrito → checkout → confirmación.  
- Persistencia con `localStorage` (carrito y token).  
- Rutas simples (`#/login`, `#/products`, `#/cart`, `#/checkout`).  
---
## 5. Conclusión
El diseño en Figma no solo cubre las vistas esenciales del flujo de e-commerce, sino que también aplica principios de usabilidad y UX modernos, dejando la base lista para integrar con el desarrollo real del proyecto.

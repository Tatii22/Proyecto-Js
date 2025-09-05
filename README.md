# 🛒 FakeStore - Proyecto JS

## 📌 Descripción
FakeStore es una aplicación web que simula una tienda en línea consumiendo la API pública [FakeStoreAPI](https://fakestoreapi.com/products).  
El proyecto está construido con **HTML, CSS y JavaScript**, aplicando `fetch()` para obtener datos dinámicos y `localStorage` para la persistencia del carrito de compras.  

El objetivo es brindar una experiencia de compra **interactiva, moderna y funcional**, con navegación entre páginas, autenticación simulada y un flujo completo de checkout.

---

## 🚀 Funcionalidades principales
- **Consumo de API**: Obtención de productos desde FakeStoreAPI.  
- **Renderizado dinámico**: Tarjetas de productos con imagen, nombre, precio y categoría.  
- **Carrito de compras**:
  - Agregar/eliminar productos.
  - Cálculo automático del total.
  - Persistencia en `localStorage`.  
- **Filtros y búsqueda** en la tienda (categorías, precio, nombre).  
- **Autenticación simulada**: registro e inicio de sesión.  
- **Checkout completo**:
  - Dirección de envío.
  - Selección de método de pago.
  - Confirmación de compra.  
- **Diseño responsivo** (desktop, tablet, móvil).  
- **Modales y pantallas de carga** para mejorar la UX.  

---

## 🗂️ Estructura de carpetas
```bash
📁Proyecto JS
 ├── 📁addcard          # Pantalla de agregar tarjeta
 │   ├── card.css
 │   ├── card.html
 ├── 📁cargador         # Pantalla de carga
 │   ├── cargador.css
 ├── 📁checkout         # Proceso de pago
 │   ├── checkout.css
 │   ├── checkout.html
 ├── 📁data             # Datos y consumo de API
 │   ├── data.js
 ├── 📁fuentes          # Tipografías personalizadas
 ├── 📁home             # Página principal
 │   ├── home.css
 │   ├── home.html
 ├── 📁login            # Login y registro
 │   ├── login.css
 │   ├── login.html
 │   ├── login.js
 │   ├── register.css
 │   ├── register.html
 │   ├── register.js
 ├── 📁method           # Selección de método de pago
 │   ├── method.css
 │   ├── method.html
 ├── 📁navegador        # Menú y carrito emergente
 │   ├── nav.css
 │   ├── nav.html
 │   ├── navegador.js
 ├── 📁products         # Vista individual de producto
 │   ├── product.css
 │   ├── product.html
 │   ├── product.js
 ├── 📁public           # Recursos multimedia
 │   └── 📁src
 │       ├── 📁icons
 │       ├── 📁img
 │       │   ├── 📁brands
 │       │   ├── 📁tap
 │       └── 📁video
 ├── 📁shipping         # Dirección de envío
 │   ├── shipping.css
 │   ├── shipping.html
 ├── 📁shop             # Tienda de productos
 │   ├── shop.css
 │   ├── shop.html
 │___├── shop.js
```

## 🧑‍💻 Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Tatii22/Proyecto-Js.git
   ```
2. Abrir el proyecto en tu editor preferido.  
3. Usar un servidor local para visualizar (ej: extensión **Live Server** en VSCode).  
4. Acceder a la URL local:  
   ```bash
   http://127.0.0.1:5500/index.html
   ```
---

## 📝 Historias de usuario y ramas

- **Cargador / Login / Register**  
- **Navegador / Home / Carrito / Tienda (Shop)**  
- **Checkout / Dirección (Shipping) / Métodos de pago / Perfil / Add Card**  

Cada historia está implementada en su respectiva carpeta y rama dentro del repositorio.

---

## 🛠️ Tecnologías utilizadas

- **HTML5**  
- **CSS3 (Flexbox + Grid)**  
- **JavaScript (ES6+)**  
- **LocalStorage**  
- **FakeStoreAPI**  

---

## 📌 Estado del proyecto

✅ **Producto Mínimo Viable (PMV)**: tienda + carrito básico + persistencia.  
🚧 **Mejoras en progreso**: filtros avanzados, autenticación y checkout completo.  

---

## ✨ Autores

- **Brandon Stiven**  
- **Tatiana Villamizar**

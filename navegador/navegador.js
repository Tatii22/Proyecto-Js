/*General*/
let flag = false;  // estado del nav
let flag2 = false; // estado del carrito

const nav = document.querySelector(".nav")
/*Nav*/
const boton = document.querySelector(".hamburguesa");
const x = document.querySelector(".equis");
const s_info = document.querySelector(".slide_info");

/*Carrito*/
const bag = document.querySelector(".Cart");
const x2 = document.querySelector(".equis2");
const cart_info = document.querySelector(".cart_info");

/*Nav abrir*/
boton.addEventListener("click", () => {
  if (!flag && !flag2) {
    document.body.style.overflow = "hidden"; // bloquea scroll
    s_info.style.display = "flex";
    s_info.classList.remove("slidein", "slideout");
    void s_info.offsetWidth; // forzar reflow
    s_info.classList.add("slideout");
    flag = true;
  }
});

/*Nav cerrar*/
x.addEventListener("click", () => {
  s_info.classList.remove("slideout", "slidein");
  void s_info.offsetWidth;
  s_info.classList.add("slidein");
  document.body.style.overflow = ""; 
});

/*Nav fin animación*/
s_info.addEventListener("animationend", (e) => {
  if (e.animationName === "slidein") {
    s_info.style.display = "none";
    flag = false;
  }
});

/*Carrito abrir*/
bag.addEventListener("click", () => {
  if (!flag && !flag2) {
    document.body.style.overflow = "hidden"; // bloquea scroll
    cart_info.style.display = "flex";
    cart_info.classList.remove("slidein-cart", "slideout-cart");
    void cart_info.offsetWidth; // forzar reflow
    cart_info.classList.add("slideout-cart");
    flag2 = true;
  }
});

/*Carrito cerrar*/
x2.addEventListener("click", () => {
  cart_info.classList.remove("slideout-cart", "slidein-cart");
  void cart_info.offsetWidth;
  cart_info.classList.add("slidein-cart");
  document.body.style.overflow = "";   
});

/*Carrito fin animación*/
cart_info.addEventListener("animationend", (e) => {
  if (e.animationName === "slidein-cart") {
    cart_info.style.display = "none";
    flag2 = false;
  }
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("#nav-container #nav");
  const limite = window.innerHeight * 0.05; 

  if (window.scrollY >= limite) {
  nav.style.backgroundColor = "#FCFCFC"; 
  } else {
  nav.style.backgroundColor = ""; 
  }
});
/* fetch("/navegador/nav.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav-container").innerHTML = data;

    const script = document.createElement("script");
    script.src = "/navegador/navegador.js";
    document.body.appendChild(script);
  })
  .catch(err => console.error("Error cargando navbar:", err)); */
  // Seleccionar contenedor donde se mostrarán los productos
const productsContainer = document.querySelector(".products_container");

// Obtener usuario activo desde localStorage
let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

// Función para renderizar productos del carrito
function renderizarCarrito() {
    if (!usuarioActivo || !usuarioActivo.carrito || usuarioActivo.carrito.length === 0) {
        productsContainer.innerHTML = "<p>Empty</p>";
        return;
    }

    productsContainer.innerHTML = "";

    usuarioActivo.carrito.forEach((p, index) => {
        const productHTML = `
            <div class="product" data-index="${index}">
                <div class="Test">
                    <div class="T_img">
                        <img src="${p.image}" alt="${p.title}" width="70">
                    </div>
                    <div class="T_info">
                        <div class="title"> 
                            <p><b>${p.title}</b></p>
                        </div>
                        <div class="des"> 
                            <p>Cantidad : ${p.quantity}</p>     <button class="eliminar">x</button>
                        </div>
                        <div class="price"> 
                            <p>$${p.price}</p>
                        </div>
                        <div class="rating"> 

                        </div>
                        <div class="size">
                            <p>Size</p>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                        </div>            
                    </div>
                </div> 
            </div>
        `;
        productsContainer.insertAdjacentHTML("beforeend", productHTML);
    });

    // Asignar eventos a los botones "Eliminar"
    document.querySelectorAll(".eliminar").forEach((btn, i) => {
        btn.addEventListener("click", () => {
            eliminarProducto(i);
        });
    });
}

// Función para eliminar/restar producto del carrito
function eliminarProducto(index) {
    if (usuarioActivo.carrito[index].quantity > 1) {
        // Restar 1 a la cantidad
        usuarioActivo.carrito[index].quantity -= 1;
    } else {
        // Si queda en 0, eliminar el producto
        usuarioActivo.carrito.splice(index, 1);
    }

    // Recalcular el total del carrito
    usuarioActivo.totalCarrito = usuarioActivo.carrito.reduce(
        (acc, p) => acc + p.price * p.quantity, 
        0
    );

    // Actualizar en localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let idx = usuarios.findIndex(u => u.id === usuarioActivo.id);
    if (idx !== -1) {
        usuarios[idx] = usuarioActivo;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioActivo));


    renderizarCarrito();
}
// Render inicial
    renderizarCarrito();
const productsContainer2 = document.querySelector(".container_products");

function renderizarCarrito2() {
    if (!usuarioActivo || !usuarioActivo.carrito || usuarioActivo.carrito.length === 0) {
        productsContainer2.innerHTML = "<p>Empty</p>";
        return;
    }

    productsContainer2.innerHTML = "";

    usuarioActivo.carrito.forEach((p, index) => {
        const productHTML = `
            <div class="product" data-index="${index}">
                <div class="Test">
                    <div class="T_img">
                        <img src="${p.image}" alt="${p.title}" width="70">
                    </div>
                    <div class="T_info">
                        <div class="title"> 
                            <p><b>${p.title}</b></p>
                        </div>
                        <div class="des"> 
                            <p>Cantidad : ${p.quantity}</p>     <button class="eliminar">x</button>
                        </div>
                        <div class="price"> 
                            <p>$${p.price}</p>
                        </div>
                        <div class="rating"> 

                        </div>
                        <div class="size">
                            <p>Size</p>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                        </div>            
                    </div>
                </div> 
            </div>
        `;
        productsContainer2.insertAdjacentHTML("beforeend", productHTML);
    });

    // Asignar eventos a los botones "Eliminar"
    document.querySelectorAll(".eliminar").forEach((btn, i) => {
        btn.addEventListener("click", () => {
            eliminarProducto(i);
        });
    });
}

// Función para eliminar/restar producto del carrito

renderizarCarrito2();
document.querySelector(".back-btn").addEventListener("click", (e) => {
  e.preventDefault(); // evitar que se vaya de inmediato

  let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarioActivo) {
    // Resetear carrito del usuario activo
    usuarioActivo.carrito = [];
    usuarioActivo.totalCarrito = 0;

    // Actualizar dentro de usuarios[]
    usuarios = usuarios.map(u =>
      u.id === usuarioActivo.id ? { ...u, carrito: [], totalCarrito: 0 } : u
    );

    // Guardar cambios
    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioActivo));
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    console.log("Carrito reseteado ✅", usuarioActivo, usuarios);
  }

  // Dar un pequeño delay para asegurar que se guarde
  setTimeout(() => {
    window.location.href = "/home/home.html";
  }, 100);
});
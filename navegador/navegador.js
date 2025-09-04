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
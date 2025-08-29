/*General*/
let flag = false;  // estado del nav
let flag2 = false; // estado del carrito

/*Nav*/
const boton = document.querySelector(".hamburguesa");
const x = document.querySelector(".equis");
const s_info = document.querySelector(".slide_info");

/*Carrito*/
const bag = document.querySelector(".Cart");
const x2 = document.querySelector(".equis2");
const cart_info = document.querySelector(".cart_info");

/*Nav*/
boton.addEventListener("click", () => {
  if (!flag && !flag2) { // solo abre si ninguno está abierto
    s_info.style.display = "flex";
    s_info.classList.remove("slidein");
    s_info.classList.add("slideout");
    flag = true;
  }
});

x.addEventListener("click", () => {
  s_info.classList.remove("slideout");
  s_info.classList.add("slidein");
});

s_info.addEventListener("animationend", (e) => {
  if (e.animationName === "slidein") {
    s_info.style.display = "none";
    flag = false;
  }
});

/*Carrito*/
bag.addEventListener("click", () => {
  if (!flag && !flag2) { // solo abre si ninguno está abierto
    cart_info.style.display = "flex";
    cart_info.classList.remove("slidein-cart");
    cart_info.classList.add("slideout-cart");
    flag2 = true;
  }
});

x2.addEventListener("click", () => {
  cart_info.classList.remove("slideout-cart");
  cart_info.classList.add("slidein-cart");
});

cart_info.addEventListener("animationend", (e) => {
  if (e.animationName === "slidein-cart") {
    cart_info.style.display = "none";
    flag2 = false;
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
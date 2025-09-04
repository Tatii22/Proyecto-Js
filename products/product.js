
document.body.style.overflow = "hidden";


fetch("/navegador/nav.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("nav-container").innerHTML = data;
    const script = document.createElement("script");
    script.src = "/navegador/navegador.js";
    document.body.appendChild(script);
  })
  .catch(err => console.error("Error cargando navbar:", err));


const minicargador = document.querySelector(".aa");
minicargador.style.display = "";

window.addEventListener("load", () => {
  if (minicargador) {
    setTimeout(() => {
      minicargador.style.display = "none";
      document.body.style.overflow = "";    
    }, 2000); 
  }
});


const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

if (!productId) {
  document.querySelector("#product").innerHTML = "<p>No se selecciono ningún producto.</p>";
} else {

  fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
      let product = data.find(p => p.id === productId);
      if (product) {
        renderProduct(product);
      } else {
        document.querySelector("#product").innerHTML = "<p>Producto no encontrado</p>";
      }
    })
    .catch(err => {
      document.querySelector("#product").innerHTML = `<p>Error cargando producto: ${err}</p>`;
    });
}

function renderProduct(product) {
  document.querySelector("#product").innerHTML = `
    <main class="main">
        <div class="img_product">
          <img src="${product.image}" alt="${product.title}" width="150">
        </div>
        <div class="title">
            <p><b>${product.title}</b></p>
        </div>
        <div class="description">
            <p>${product.description}</p>
        </div>
        <div class="price">
            <p>$${product.price}</p>
        </div>
          <div class="size">
            <p>Size</p>
            <div>S</div>
            <div>M</div>
            <div>L</div>
          </div> 
        <div class="button">
            <p>+ ADD TO CART</p>
        </div>
    </main>
    <section class="info">
        <div class="care">
            <p>CARE</p>
        </div>
        <div class="info_top">
            <img src="/products/Truck.png" alt="">
            <p style="color: black;">Free Flat Rate Shipping</p>
            <p>Estimated to be delivered on <br>
            09/11/2021 - 12/11/2021.
            </p>
            <div id="arrowup">
                <img src="/products/Forward (1).png" alt="">
            </div>
        </div>
        <div class="info_middle">
            <img src="/products/Tag.png" alt="">
            <p>COD Policy</p>
            <div id="arrowup">
                <img src="/products/Forward (1).png" alt="">
            </div>            
        </div>
        <div class="info_bottom">
            <img src="/products/Refresh.png" alt="">
            <p>Return Policy</p>
            <div id="arrowup">
                <img src="/products/Forward (1).png" alt="">
            </div>              
        </div>
    </section>
    <footer class="footer">
        <p>DISTRICT</p>
        <p>BUCARAMANGA COP / COL</p>
        <br>
        <br>
        <p>SERVICE CLIENTE</p>
        <p>RETURN</p>
        <p>CONTACT US</p>
        <p>NEXT NUMBER</p>
        <p>+57 7174757474</p>
        <br>
        <br>        
        <p>SUSCRIBE NOW</p>
        <p>LEGACY</p>
        <p>COOKIES</p>
        <p>ACCESIBILITY</p>
        <br>
        <br>   
        <p>NEWSLETTER</p>
        <p>PHOTOGRAPHIES</p>
        <br>
        <br>        
        <p>DOWNLOAD APPLICATION IO ></p>
        <p>DOWNLOAD APPLICATION ANDROID ></p>

    </footer>
  `;
}
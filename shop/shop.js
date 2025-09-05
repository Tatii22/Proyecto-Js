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
    const minicargador = document.querySelector(".aa");
    if (minicargador) {
    setTimeout(() => {
    minicargador.style.display = "none";
    document.body.style.overflow = "";    
    }, 2000); 
    }
    });


const itemsPerPage = 3;
let currentPage = 1;
let allProducts = [];  
let products = [];     
let totalPages = 1;

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  allProducts = await res.json();
  products = [...allProducts];
  console.log(products)
  totalPages = Math.ceil(products.length / itemsPerPage);
  renderPage(currentPage);

}


function renderPage(page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = products.slice(start, end);

  document.getElementById("products").innerHTML = pageItems
    .map(p => `
      <a class="Test product-link" href="/products/product.html?id=${p.id}">

      <div class="Test">
        <div class="T_img">
          <img src="${p.image}" alt="${p.title}" width="95">
        </div>
        <div class="T_info">
          <div class="title"> 
            <p><b>${p.title}</b></p>
          </div>
          <div class="des"> 
            <p>${p.description}</p>
          </div>
          <div class="price"> 
            <p>$${p.price}</p>
          </div>
          <div class="rating"> 
            <img src="/shop/Star 1 (1).png" alt=""><p> ${p.rating.rate} Rating</p>
          </div>
          <div class="size">
            <p>Size</p>
            <div>S</div>
            <div>M</div>
            <div>L</div>
          </div>            
        </div>
        </div>
        </a>
    `).join("");

  document.getElementById("back").disabled = page === 1;
  document.getElementById("next").disabled = page === totalPages;

  renderPagination();
}

function renderPagination() {
  const pageButtons = document.getElementById("pageButtons");
  pageButtons.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add("p_button");
    if (i === currentPage) {
      btn.style.background = "#333333";
      btn.style.color = "white";
    }
    btn.addEventListener("click", () => {
      currentPage = i;
      renderPage(currentPage);
    });
    pageButtons.appendChild(btn);
  }
}


document.getElementById("Chose").addEventListener("change", (e) => {
  const category = e.target.value;

  if (category === "all") {
    products = [...allProducts];
    const c = document.getElementById("c");
    c.innerText = "20 PRODUCTS"    
  } else if (category === "clothes") {

    products = allProducts.filter(p => p.category.includes("clothing"));
    let totalPrice = products.reduce(acc => acc + 1, 0);
    const c = document.getElementById("c");
    let m = Math.ceil(totalPrice) 
    c.innerText = m + " PRODUCTS"

  } else if (category === "technology") {
    products = allProducts.filter(p => p.category === "electronics");
    let totalPrice = products.reduce(acc => acc + 1, 0);
    const c = document.getElementById("c");
    let m = Math.ceil(totalPrice) 
    c.innerText = m + " PRODUCTS"    
  } else if (category === "jewelry") {
    products = allProducts.filter(p => p.category === "jewelery");
    let totalPrice = products.reduce(acc => acc + 1, 0);
    const c = document.getElementById("c");
    let m = Math.ceil(totalPrice) 
    c.innerText = m + " PRODUCTS"    
  }

  currentPage = 1;
  totalPages = Math.ceil(products.length / itemsPerPage);
  renderPage(currentPage);
});

fetchProducts();
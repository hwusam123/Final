const grid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

function getPrice(product){
  return Object.values(product.priceOptions)[0];
}

function renderProducts(list){
  grid.innerHTML = "";

  list.forEach(item=>{
    const card = document.createElement("div");

    card.className="product-card";

    card.innerHTML=`
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.roast}</p>
      <p class="price">NT$ ${getPrice(item)}</p>
    `;

    card.addEventListener("click",()=>{
      window.location.href=`product.html?id=${item.id}`;
    });

    grid.appendChild(card);
  });
}

function updateProducts(){

  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  if(sortSelect.value==="price"){
    filtered.sort((a,b)=>getPrice(a)-getPrice(b));
  }

  renderProducts(filtered);
}

renderProducts(products);

if(searchInput){
searchInput.addEventListener("input",updateProducts);
}

if(sortSelect){
sortSelect.addEventListener("change",updateProducts);
}
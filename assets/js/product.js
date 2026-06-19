const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(p => p.id === productId);

if (!product) {
  alert("找不到商品");
  throw new Error("Product not found");
}

const nameEl = document.querySelector(".product-name");
const descEl = document.querySelector(".product-desc");
const sizeEl = document.querySelector(".product-size");
const storageEl = document.querySelector(".product-storage");
const imgBox = document.querySelector(".product-detail-img");

const qtyEl = document.querySelector(".product-qty input");
const addBtn = document.getElementById("addToCartBtn");


nameEl.textContent = product.name;

descEl.innerHTML = `
產地：${product.origin}<br>
烘焙度：${product.roast}<br><br>
${product.desc}
`;

sizeEl.textContent = `重量：${product.weight}`;

storageEl.textContent =
`保存方式：${product.storage}`;

imgBox.innerHTML =
`<img src="${product.image}" alt="${product.name}">`;

const optionBox = document.querySelector(".product-options");

optionBox.innerHTML = `
<h3>重量選擇</h3>
${Object.entries(product.priceOptions).map(([size,price],index)=>`
<label>
<input
type="radio"
name="size"
value="${size}"
data-price="${price}"
${index===0?"checked":""}
>
${size} NT$${price}
</label>
`).join("")}

<h3>研磨方式</h3>

<label><input type="radio" name="grind" value="咖啡豆" checked>咖啡豆</label>
<label><input type="radio" name="grind" value="手沖研磨">手沖研磨</label>
<label><input type="radio" name="grind" value="義式研磨">義式研磨</label>
<label><input type="radio" name="grind" value="法壓壺研磨">法壓壺研磨</label>

<h3 class="total-price">
總金額：
<span id="totalPrice">NT$0</span>
</h3>
`;

const sizeRadios =
document.querySelectorAll('input[name="size"]');

function calculatePrice(){

let basePrice=0;

sizeRadios.forEach(r=>{
if(r.checked){
basePrice=Number(r.dataset.price);
}
});

const total=
basePrice*Number(qtyEl.value);

document.getElementById("totalPrice").textContent=
`NT$${total}`;
}

sizeRadios.forEach(r=>{
r.addEventListener("change",calculatePrice);
});

qtyEl.addEventListener("input",calculatePrice);

calculatePrice();

addBtn.addEventListener("click",()=>{

  const qty =
Number(qtyEl.value);
if(qty < 1){

  alert("數量至少要 1");

  return;

}

if(isNaN(qty) || qty < 1){

  alert("數量至少為1");

  return;
}

  const cart =
  JSON.parse(localStorage.getItem("cart")) || [];
  
  const selectedSize =
  document.querySelector('input[name="size"]:checked');
  
  const selectedGrind =
  document.querySelector('input[name="grind"]:checked');
  
  const price =
  Number(selectedSize.dataset.price);
  
  const total =
  price * qty;
  
  const existingItem = cart.find(item =>

    item.id === product.id &&
    item.weight === selectedSize.value &&
    item.grind === selectedGrind.value
  
  );
  
  if(existingItem){
  
    existingItem.qty += qty;
  
    existingItem.totalPrice =
    existingItem.qty * existingItem.price;
  
  }else{
  
    cart.push({
      id: product.id,
      name: product.name,
  
      weight: selectedSize.value,
      grind: selectedGrind.value,
  
      price: price,
  
      qty: qty,
  
      totalPrice: total,
  
      image: product.image
    });
  
  }
  
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
  
  alert("已加入購物車");
  
  });

  const reviewForm =
document.getElementById("reviewForm");

const reviewsList =
document.getElementById("reviews");

function loadReviews(){

  const reviews=
  JSON.parse(
    localStorage.getItem(
      "reviews_"+product.id
    )
  ) || [];

  reviewsList.innerHTML="";

  reviews.forEach(r=>{

    reviewsList.innerHTML += `
      <li>
        ${"★".repeat(r.rating)}
        ${"☆".repeat(5-r.rating)}
        <br>
        ${r.comment}
      </li>
    `;

  });

}

reviewForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  const rating=
  Number(
    document.getElementById("rating").value
  );

  const comment=
  document.getElementById("comment").value.trim();

  if(!comment){

    alert("請輸入評論內容");

    return;

  }

  const reviews=
  JSON.parse(
    localStorage.getItem(
      "reviews_"+product.id
    )
  ) || [];

  const currentUser =
JSON.parse(
  localStorage.getItem("currentUser")
);

if(!currentUser){

  alert("請先登入會員才能評論");

  return;

}

reviews.push({
  username: currentUser.username,
  rating: rating,
  comment: comment
});

  localStorage.setItem(
    "reviews_"+product.id,
    JSON.stringify(reviews)
  );

  reviewForm.reset();

  loadReviews();

});

loadReviews();
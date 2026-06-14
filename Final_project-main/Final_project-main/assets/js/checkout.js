const orderList = document.getElementById("orderList");
const checkoutTotalEl = document.getElementById("checkoutTotal");
const submitBtn = document.getElementById("submitOrderBtn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderOrder() {

  orderList.innerHTML = "";

  let total = 0;

  if (cart.length === 0) {

    orderList.innerHTML =
      "<li>目前沒有商品</li>";

    checkoutTotalEl.textContent =
      "NT$0";

    submitBtn.disabled = true;

    return;
  }

  cart.forEach(item => {

    const subtotal =
      item.price * item.qty;

    total += subtotal;

    orderList.innerHTML += `
      <li>

        <img
          src="${item.image}"
          alt="${item.name}"
          style="
            width:50px;
            vertical-align:middle;
            margin-right:8px;
          "
        >

        ${item.name}
        （${item.weight} / ${item.grind}）
        ×
        ${item.qty}

        <span>
          NT$${subtotal}
        </span>

      </li>
    `;
  });

  checkoutTotalEl.textContent =
    `NT$${total}`;
}

submitBtn.addEventListener("click", () => {

  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const address =
    document.getElementById("address").value.trim();

  if (!name || !phone || !address) {

    alert("請完整填寫訂購人資料");

    return;
  }

  const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

if(!currentUser){

  alert("請先登入會員");

  window.location.href =
  "member.html";

  return;
}

const cart =
JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length > 0){

  const history =
  JSON.parse(localStorage.getItem("purchaseHistory"))
  || [];

  history.push({

    id: Date.now(),

    username:
    currentUser.username,

    date:
    new Date().toLocaleString(),

    items: cart,

    customer:{
      name,
      phone,
      address
    }

  });

  localStorage.setItem(
    "purchaseHistory",
    JSON.stringify(history)
  );
}

  alert("訂單已完成，感謝您的購買！");

  localStorage.removeItem("cart");

  window.location.href =
    "index.html";
});

renderOrder();
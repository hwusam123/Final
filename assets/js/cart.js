addBtn.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const qty = Number(qtyEl.value);
  const totalPrice = product.price * qty;

  cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    qty: qty,
    totalPrice: totalPrice,
    image: product.image
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("已加入購物車");
});
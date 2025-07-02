// Cart functions
function addToCart(product, price, qtyInputId) {
  let quantity = 1;
  if (qtyInputId) {
    const input = document.getElementById(qtyInputId);
    if (input) {
      quantity = parseInt(input.value);
      if (isNaN(quantity) || quantity < 1) quantity = 1;
    }
  }
  const shipping = 15 * quantity;
  const total = price * quantity + shipping;
  alert(`${quantity}x ${product} added to cart. Total: $${total} (including $${shipping} shipping)`);
  animateAddToCart();
}

function addCologneToCart() {
  const select = document.getElementById('cologne-select');
  const fragrance = select.value;
  if (!fragrance || fragrance === "Choose a fragrance") {
    alert('Please select a fragrance.');
    return;
  }
  const price = 50;
  const shipping = 15;
  const total = price + shipping;
  alert(`1x ${fragrance} added to cart. Total: $${total} (including $${shipping} shipping)`);
  animateAddToCart();
}

function addSp5derToCart() {
  const colorSelect = document.getElementById('sp5der-color');
  const sizeSelect = document.getElementById('sp5der-size');
  const qtyInput = document.getElementById('sp5der-qty');
  if (!colorSelect.value || colorSelect.value === "Choose a Colorway") {
    alert('Please select a colorway.');
    return;
  }
  if (!size ​:contentReference[oaicite:0]{index=0}​

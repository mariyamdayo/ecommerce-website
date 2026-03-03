let total = 0;

function toggleCart() {
  const cart = document.getElementById('cart');
  cart.classList.toggle('show');
}

function addToCart(button) {
  const product = button.parentElement;
  const name = product.querySelector('.product-name').textContent;

  // Fix here
  const priceStr = product.querySelector('.product-price').dataset.price;
  const price = parseInt(priceStr.replace(/,/g, ''));

  const cart = document.getElementById('cart-items');
  const li = document.createElement('li');
  li.textContent = `${name} - Rs. ${price.toLocaleString()}`; // formatted with comma
  cart.appendChild(li);

  // Update total
  total += price;
  document.getElementById('total').textContent = total.toLocaleString();

  // Open cart automatically
  toggleCart();
}
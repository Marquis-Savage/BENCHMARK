// script.js
let cartItems = [];

function addToCart(productName, price) {
  const item = {
    name: productName,
    price: price
  };
  
  cartItems.push(item);
  console.log(`Added ${productName} to the cart`);
}

function displayCart() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <span>${item.name}</span>
        <span>$${item.price.toFixed(2)}</span>
      `;
      cartContainer.appendChild(cartItem);
    }
  }

  const totalPrice = calculateTotal();
  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.textContent = `Total: $${totalPrice}`;
}

function calculateTotal() {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  return totalPrice.toFixed(2);
}

function checkout() {
  const total = calculateTotal();
  alert(`Total: $${total}\nThank you for your purchase!`);

  // Reset the cart
  cartItems = [];
  displayCart();
}

// Add event listener to the checkout button
const checkoutButton = document.getElementById('checkout-button');
if (checkoutButton) {
  checkoutButton.addEventListener('click', checkout);
}

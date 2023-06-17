// Add your custom JavaScript code here

// Cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.getElementById('cart-items');

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const button = event.target;
  const productContainer = button.parentElement.parentElement;
  const productName = productContainer.querySelector('.product-name').textContent;
  const productImage = productContainer.querySelector('.product-image').src;

  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
    <img class="cart-item-image" src="${productImage}" alt="${productName}">
    <div class="cart-item-details">
      <p>${productName}</p>
    </div>
  `;

  cartItemsContainer.appendChild(cartItem);
}

// Payment successful page
const shareButton = document.getElementById('share-button');
shareButton.addEventListener('click', sharePurchase);

function sharePurchase() {
  const purchasedItems = document.querySelectorAll('.cart-item');
  const sharedMessage = 'I just purchased these items from Benchmark Chef Supply! Check them out:';

  let sharedContent = sharedMessage + '\n\n';
  purchasedItems.forEach(item => {
    const productName = item.querySelector('.cart-item-details p').textContent;
    sharedContent += `• ${productName}\n`;
  });

  // Replace the following lines with the code for sharing via email or text message
  console.log('Shared content:');
  console.log(sharedContent);
}

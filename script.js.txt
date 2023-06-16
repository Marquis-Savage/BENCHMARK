// script.js
// Add your custom JavaScript functionality here
// For example, handling form submissions or adding products to the cart

// Sample product data
const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 9.99,
    ingredients: "Ingredient 1, Ingredient 2, Ingredient 3",
  },
  {
    id: 2,
    title: "Product 2",
    description: "Praesent nec enim sed nunc auctor vestibulum.",
    price: 12.99,
    ingredients: "Ingredient 4, Ingredient 5, Ingredient 6",
  },
  {
    id: 3,
    title: "Product 3",
    description: "Donec fermentum, neque vel dapibus consectetur.",
    price: 14.99,
    ingredients: "Ingredient 7, Ingredient 8, Ingredient 9",
  },
  {
    id: 4,
    title: "Product 4",
    description: "Vestibulum ante ipsum primis in faucibus orci luctus.",
    price: 8.99,
    ingredients: "Ingredient 10, Ingredient 11, Ingredient 12",
  },
  {
    id: 5,
    title: "Product 5",
    description: "Sed et dolor aliquet, congue diam id, mattis mauris.",
    price: 10.99,
    ingredients: "Ingredient 13, Ingredient 14, Ingredient 15",
  },
];

// Function to render products
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.dataset.ingredients = product.ingredients;

    const title = document.createElement("h2");
    title.textContent = product.title;

    const description = document.createElement("p");
    description.textContent = product.description;

    const price = document.createElement("p");
    price.textContent = "$" + product.price.toFixed(2);

    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", () => addToCart(product));

    productCard.appendChild(title);
    productCard.appendChild(description);
    productCard.appendChild(price);
    productCard.appendChild(addToCartBtn);

    container.appendChild(productCard);
  });
}

// Add products to Butcher's Blend Seasonings page
renderProducts(products, "butchers-blend-container");

// Add products to Hot Sauces page
renderProducts(products, "hot-sauces-container");

// Add products to BBQ Sauces page
renderProducts(products, "bbq-sauces-container");

// Shopping Cart
let cart = [];

function addToCart(product) {
  cart.push(product);
  alert("Product added to cart!");
}

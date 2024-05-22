let products = [
  { id: 1, name: "Product 1", image: "image1.jpg", price: 50, quantity: 1 },
  { id: 3, name: "Product 2", image: "download.jpeg", price: 100, quantity: 1 },
  { id: 4, name: "Product 3", image: "image2.jpg", price: 100, quantity: 1 },
  { id: 1, name: "Product 1", image: "image1.jpg", price: 50, quantity: 1 },
  { id: 3, name: "Product 2", image: "download.jpeg", price: 100, quantity: 1 },
  { id: 4, name: "Product 3", image: "image2.jpg", price: 100, quantity: 1 },
];

let cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>$${product.price}</p>
          ${
            productInCart
              ? `
              <button onclick="decrementQuantity(${product.id})">-</button>
              <span>${productInCart.quantity}</span>
              <button onclick="incrementQuantity(${product.id})">+</button>
          `
              : `<button onclick="addToCart(${product.id})">Add to Cart</button>`
          }
      `;
    productList.appendChild(productDiv);
  });
}

function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cart.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
          <button onclick="decrementQuantity(${item.id})">-</button>
          <span>${item.quantity}</span>
          <button onclick="incrementQuantity(${item.id})">+</button>
          <button onclick="removeFromCart(${item.id})">Remove</button>
      `;
    cartList.appendChild(cartItemDiv);
  });
  document.getElementById("total-price").innerText = calculateTotalPrice();
  document.getElementById("average-price").innerText = calculateAveragePrice();
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  displayProducts();
  displayCart();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  displayProducts();
  displayCart();
}

function incrementQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
  }
  displayProducts();
  displayCart();
}

function decrementQuantity(productId) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem && cartItem.quantity > 1) {
    cartItem.quantity--;
  } else if (cartItem && cartItem.quantity === 1) {
    removeFromCart(productId);
  }
  displayProducts();
  displayCart();
}

function calculateTotalPrice() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateAveragePrice() {
  if (cart.length === 0) return 0;
  const totalPrice = calculateTotalPrice();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  return (totalPrice / totalItems).toFixed(2);
}

function clearCart() {
  cart = [];
  displayProducts();
  displayCart();
  alert("Your cart is empty");
}

function toggleCart() {
  const cartPage = document.getElementById("cartPage");
  if (cartPage.style.right === "0px") {
    cartPage.style.right = "-100%";
  } else {
    cartPage.style.right = "0px";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts();
});

const availableProducts = [
  { id: 1, name: "Producto 1", price: 10 },
  { id: 2, name: "Producto 2", price: 20 },
  { id: 3, name: "Producto 3", price: 30 },
];

let total = 0;

// function to get cart from local storage and parse it
function getCart() {
  const cartStringify = localStorage.getItem("cart");
  const cart = cartStringify ? JSON.parse(cartStringify) : [];
  return cart;
}

function addProduct(id) {
  const product = availableProducts.find((prod) => prod.id === id);
  const cart = getCart();
  if (product) {
    cart.push(product);
    // stringify array and save it in local storage
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringify);
    total += product.price;

    updateCart();
  }
}

function updateCart() {
  const cartElement = document.getElementById("cart");
  const totalElement = document.getElementById("total");
  // get cart from local storage and parse it
  const cart = getCart();

  cartElement.innerHTML = "";

  cart.forEach((product) => {
    const { name, price } = product;
    const productElement = document.createElement("div");
    productElement.textContent = `${name} - $${price}`;

    cartElement.appendChild(productElement);
  });

  totalElement.textContent = `Total: $${total}`;
}

// save cart products when refresh the page
updateCart();

document
  .getElementById("product1")
  .addEventListener("click", () => addProduct(1));
document
  .getElementById("product2")
  .addEventListener("click", () => addProduct(2));
document
  .getElementById("product3")
  .addEventListener("click", () => addProduct(3));

document.getElementById("buy").addEventListener("click", () => {
  localStorage.removeItem("cart");
  total = 0;
  updateCart();
});

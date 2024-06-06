const availableProducts = [
  { id: 1, nombre: "Producto 1", precio: 10 },
  { id: 2, nombre: "Producto 2", precio: 20 },
  { id: 3, nombre: "Producto 3", precio: 30 },
];

let carrito = [];

let total = 0;

function addProduct(id) {
  const product = availableProducts.find((prod) => prod.id === id);
  if (product) {
    carrito.push(product);
    total += product.precio;
    actualizarCarrito();
  }
}

function actualizarCarrito() {
  const carritoElement = document.getElementById("carrito");
  const totalElement = document.getElementById("total");

  carritoElement.innerHTML = "";

  carrito.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.textContent = `${product.nombre} - $${product.precio}`;
    carritoElement.appendChild(productElement);
  });

  totalElement.textContent = `Total: $${total}`;
}

document
  .getElementById("producto1")
  .addEventListener("click", () => addProduct(1));
document
  .getElementById("producto2")
  .addEventListener("click", () => addProduct(2));
document
  .getElementById("producto3")
  .addEventListener("click", () => addProduct(3));

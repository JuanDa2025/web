const menu = [
  { id: 1, nombre: "Combo Hamburguesa", precio: 12000, imagen: "https://assets.onecompiler.app/43ftuv7vk/43ftuyhb4/hamburguesa.jpeg" },
  { id: 2, nombre: "Combo Perro Caliente", precio: 10000, imagen: "https://assets.onecompiler.app/43ftuv7vk/43ftuyhb4/perro.jpeg" },
  { id: 3, nombre: "Combo Papas Fritas + Bebida", precio: 8000, imagen: "https://assets.onecompiler.app/43ftuv7vk/43ftuyhb4/papas.jpeg" },
  { id: 4, nombre: "Combo Gaseosa + Snack", precio: 8000, imagen: "https://assets.onecompiler.app/43ftuv7vk/43ftuyhb4/gaseosa.jpeg" },
  { id: 5, nombre: "Combo Vegetariano", precio: 9500, imagen: "https://assets.onecompiler.app/43ftuv7vk/43ftptc3s/vegetariano.jpeg" },
  { id: 6, nombre: "Carne asada", precio: 15000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEt51L7no5YWFOS-0fMA6flrfmrXgtMENGUg&s" },
  { id: 7, nombre: "Chicharrones acompañados con yuca", precio: 12000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBP52JBviy8iYYGJmE4O087EEfERfJRqRe9A&s" },
  { id: 8, nombre: "Empanadas - Papas - carimañolas und", precio: 2000, imagen: "https://congeladossalomia.com/wp-content/uploads/2020/09/prod-combo-celebracion.jpg" },
  { id: 9, nombre: "Burritos", precio: 10000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMYOnbD67fpQn4NuVONCnQcHmA2WiSUPrcOQ&s" },
  { id: 10, nombre: "Pizza", precio: 7000, imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLIoaKElZ6PJTNO2F74jImfIR8YLn4O_3oMQ&s" },
  { id: 11, nombre: "Pechuga de pollo con patacones", precio: 15000, imagen: "https://media-cdn.tripadvisor.com/media/photo-m/1280/17/d9/15/83/pechuga-de-pollo-a-la.jpg" }
];

const carrito = [];
const menuContainer = document.getElementById("menu");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

function renderMenu() {
  menu.forEach((item) => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}">
      <h3>${item.nombre}</h3>
      <p>Precio: $${item.precio}</p>
      <button onclick="agregarAlCarrito(${item.id})">Agregar</button>
    `;
    menuContainer.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const producto = menu.find((p) => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function actualizarCarrito() {
  cartItems.innerHTML = "";
  let total = 0;
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nombre} - $${item.precio}
      <button class="remove-btn" onclick="eliminarDelCarrito(${index})">Quitar</button>
    `;
    cartItems.appendChild(li);
    total += item.precio;
  });
  totalElement.textContent = total;
}

function seleccionarPago(metodo) {
  document.getElementById("card-form").style.display = metodo === "tarjeta" ? "block" : "none";
  document.getElementById("cash-info").style.display = metodo === "efectivo" ? "block" : "none";
}

function validarTarjeta(event) {
  event.preventDefault();
  alert("💳 Pago con tarjeta procesado correctamente.");
}

document.querySelector('.logo').addEventListener('mouseenter', () => {
  const sonido = document.getElementById('homeroSound');
  sonido.currentTime = 0;
  sonido.play();
});

renderMenu();

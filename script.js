const products = [
  { id: 1, name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { id: 2, name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { id: 3, name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { id: 4, name: "Denim Jeans", price: 59.99, category: "clothing" }
];

const grid = document.getElementById("productGrid");
const filterDropdown = document.getElementById("categoryFilter");

function displayProducts(items) {
  grid.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${product.name}</h2>
      <p class="price">$${product.price}</p>
      <span class="badge ${product.category}">${product.category}</span>
    `;

    grid.appendChild(card);
  });
}

// Initial load
displayProducts(products);

// Filter event
filterDropdown.addEventListener("change", () => {
  const selected = filterDropdown.value;

  const filtered =
    selected === "all"
      ? products
      : products.filter(p => p.category === selected);

  displayProducts(filtered);
});

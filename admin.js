let adminProducts = [];
let orders = [];
let feedbacks = [];

async function apiRequest(url, options = {}) {
  const response = await fetch(url, {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  const data = await response.json().catch(() => ({ success: false, message: "Réponse serveur invalide." }));

  if (!response.ok && !data.message) {
    data.message = "Une erreur est survenue.";
  }

  return data;
}

async function initAdminDashboard() {
  const user = await protectAdminPage();
  if (!user) return;

  await loadAdminData();
  renderAdminDashboard();
}

async function loadAdminData() {
  const productsData = await apiRequest("api/products.php");
  const ordersData = await apiRequest("api/orders.php");
  const feedbacksData = await apiRequest("api/feedbacks.php");

  adminProducts = productsData.products || [];
  orders = ordersData.orders || [];
  feedbacks = feedbacksData.feedbacks || [];
}

function renderAdminDashboard() {
  document.getElementById("totalProducts").textContent = adminProducts.length;
  document.getElementById("totalOrders").textContent = orders.length;
  document.getElementById("totalFeedbacks").textContent = feedbacks.length;

  const revenue = orders.reduce((sum, order) => {
    return sum + Number(order.total || 0);
  }, 0);

  document.getElementById("totalRevenue").textContent = revenue + " DT";

  renderAdminProducts();
  renderOrders();
  renderFeedbacks();
}

function renderAdminProducts() {
  const table = document.getElementById("adminProductsTable");
  table.innerHTML = "";

  if (adminProducts.length === 0) {
    table.innerHTML = `
      <tr>
        <td colspan="5">Aucun produit disponible.</td>
      </tr>
    `;
    return;
  }

  adminProducts.forEach(product => {
    table.innerHTML += `
      <tr>
        <td>
          <img src="${product.img}" alt="${product.name}" class="admin-product-img" />
        </td>
        <td>
          <strong>${product.name}</strong>
          <small>${product.desc || ""}</small>
        </td>
        <td>${product.category}</td>
        <td>${product.price} DT</td>
        <td>
          <button class="edit-admin-btn" onclick="editAdminProduct('${product.id}')">
            Modifier
          </button>
          <button class="delete-admin-btn" onclick="deleteAdminProduct('${product.id}')">
            Supprimer
          </button>
        </td>
      </tr>
    `;
  });
}

async function saveAdminProduct() {
  const editId = document.getElementById("editProductId").value;
  const name = document.getElementById("productName").value.trim();
  const price = document.getElementById("productPrice").value.trim();
  const category = document.getElementById("productCategory").value;
  const img = document.getElementById("productImage").value.trim();
  const badge = document.getElementById("productBadge").value.trim() || "New";
  const rating = document.getElementById("productRating").value.trim() || "4.8";
  const desc = document.getElementById("productDesc").value.trim();

  if (name === "" || price === "" || img === "" || desc === "") {
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }

  const productPayload = {
    id: editId,
    name,
    price: Number(price),
    category,
    img,
    desc,
    badge,
    rating
  };

  const data = await apiRequest("api/products.php", {
    method: editId ? "PUT" : "POST",
    body: JSON.stringify(productPayload)
  });

  if (!data.success) {
    alert(data.message || "Erreur lors de l’enregistrement du produit.");
    return;
  }

  await loadAdminData();
  renderAdminDashboard();
  resetProductForm();
}

function editAdminProduct(id) {
  const product = adminProducts.find(item => String(item.id) === String(id));
  if (!product) return;

  document.getElementById("editProductId").value = product.id;
  document.getElementById("productName").value = product.name;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productCategory").value = product.category;
  document.getElementById("productImage").value = product.img;
  document.getElementById("productBadge").value = product.badge || "New";
  document.getElementById("productRating").value = product.rating || "4.8";
  document.getElementById("productDesc").value = product.desc;

  document.getElementById("saveProductBtn").textContent = "Modifier produit";
  window.location.href = "#productsAdmin";
}

async function deleteAdminProduct(id) {
  const confirmed = confirm("Voulez-vous vraiment supprimer ce produit ?");
  if (!confirmed) return;

  const data = await apiRequest(`api/products.php?id=${id}`, {
    method: "DELETE"
  });

  if (!data.success) {
    alert(data.message || "Erreur lors de la suppression.");
    return;
  }

  await loadAdminData();
  renderAdminDashboard();
}

function resetProductForm() {
  document.getElementById("editProductId").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productImage").value = "";
  document.getElementById("productBadge").value = "";
  document.getElementById("productRating").value = "";
  document.getElementById("productDesc").value = "";
  document.getElementById("productCategory").value = "bijoux";
  document.getElementById("saveProductBtn").textContent = "Ajouter produit";
}

function renderOrders() {
  const ordersList = document.getElementById("ordersList");
  ordersList.innerHTML = "";

  if (orders.length === 0) {
    ordersList.innerHTML = `<p class="empty-admin-message">Aucune commande pour le moment.</p>`;
    return;
  }

  orders.slice().reverse().forEach(order => {
    const productsHtml = (order.panier || []).map(item => {
      return `<li>${item.name} × ${item.quantity} — ${item.price} DT</li>`;
    }).join("");

    ordersList.innerHTML += `
      <div class="admin-order-card">
        <div class="order-headline">
          <h3>Commande #${order.id}</h3>
          <span>${order.statut || "en attente"}</span>
        </div>
        <p><strong>Compte :</strong> ${order.clientName || "Client"} ${order.clientEmail ? `(${order.clientEmail})` : ""}</p>
        <p><strong>Nom livraison :</strong> ${order.client}</p>
        <p><strong>Téléphone :</strong> ${order.telephone}</p>
        <p><strong>Adresse :</strong> ${order.adresse}</p>
        <p><strong>Livraison :</strong> ${order.livraison}</p>
        <p><strong>Total :</strong> ${order.total} DT</p>
        <p><strong>Date :</strong> ${order.date}</p>
        <ul class="order-products-list">${productsHtml}</ul>
      </div>
    `;
  });
}

function renderFeedbacks() {
  const feedbackList = document.getElementById("feedbackList");
  feedbackList.innerHTML = "";

  if (feedbacks.length === 0) {
    feedbackList.innerHTML = `<p class="empty-admin-message">Aucun feedback pour le moment.</p>`;
    return;
  }

  feedbacks.slice().reverse().forEach(feedback => {
    feedbackList.innerHTML += `
      <div class="admin-order-card">
        <div class="order-headline">
          <h3>${feedback.rating}</h3>
          <span>${feedback.date || ""}</span>
        </div>
        <p><strong>Nom :</strong> ${feedback.name}</p>
        <p><strong>Avis :</strong> ${feedback.text}</p>
      </div>
    `;
  });
}

initAdminDashboard();

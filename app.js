const IMG_EXT = "jpg";

let products = [
  // Bijoux b1 -> b10
  {
    id: 1,
    name: "Bijou handmade rose",
    price: 25,
    category: "bijoux",
    img: `image/b1.${IMG_EXT}`,
    desc: "Bijou handmade élégant et girly.",
    badge: "Best seller",
    rating: "4.9"
  },
  {
    id: 2,
    name: "Bracelet perlé doux",
    price: 28,
    category: "bijoux",
    img: `image/b2.${IMG_EXT}`,
    desc: "Bracelet fait main avec finition raffinée.",
    badge: "Nouveau",
    rating: "4.8"
  },
  {
    id: 3,
    name: "Collier minimaliste",
    price: 32,
    category: "bijoux",
    img: `image/b3.${IMG_EXT}`,
    desc: "Collier doux pour un look féminin.",
    badge: "Chic",
    rating: "4.7"
  },
  {
    id: 4,
    name: "Bijou fleuri",
    price: 30,
    category: "bijoux",
    img: `image/b4.${IMG_EXT}`,
    desc: "Création handmade inspirée des fleurs.",
    badge: "Lovely",
    rating: "4.9"
  },
  {
    id: 5,
    name: "Bracelet pastel",
    price: 24,
    category: "bijoux",
    img: `image/b5.${IMG_EXT}`,
    desc: "Un bracelet léger, doux et élégant.",
    badge: "Cute",
    rating: "4.8"
  },
  {
    id: 6,
    name: "Collier cœur",
    price: 38,
    category: "bijoux",
    img: `image/b6.${IMG_EXT}`,
    desc: "Collier cœur parfait pour un cadeau.",
    badge: "Top",
    rating: "5.0"
  },
  {
    id: 7,
    name: "Bijou perlé",
    price: 27,
    category: "bijoux",
    img: `image/b7.${IMG_EXT}`,
    desc: "Bijou délicat avec des détails perlés.",
    badge: "Handmade",
    rating: "4.8"
  },
  {
    id: 8,
    name: "Bracelet élégant",
    price: 29,
    category: "bijoux",
    img: `image/b8.${IMG_EXT}`,
    desc: "Bracelet féminin pour tous les jours.",
    badge: "Favori",
    rating: "4.9"
  },
  {
    id: 9,
    name: "Bijou romantique",
    price: 34,
    category: "bijoux",
    img: `image/b9.${IMG_EXT}`,
    desc: "Création romantique faite avec amour.",
    badge: "Romantic",
    rating: "4.8"
  },
  {
    id: 10,
    name: "Set bijoux girly",
    price: 45,
    category: "bijoux",
    img: `image/b10.${IMG_EXT}`,
    desc: "Set handmade élégant et doux.",
    badge: "Set",
    rating: "5.0"
  },

  // Bougies c1 -> c8, c10 -> c13
  {
    id: 11,
    name: "Bougie vanille fleurie",
    price: 32,
    category: "bougies",
    img: `image/c1.${IMG_EXT}`,
    desc: "Bougie parfumée artisanale douce et girly.",
    badge: "Nouveau",
    rating: "4.8"
  },
  {
    id: 12,
    name: "Bougie rose poudrée",
    price: 29,
    category: "bougies",
    img: `image/c2.${IMG_EXT}`,
    desc: "Bougie décorative parfaite pour un cadeau.",
    badge: "Promo",
    rating: "4.8"
  },
  {
    id: 13,
    name: "Bougie florale",
    price: 35,
    category: "bougies",
    img: `image/c3.${IMG_EXT}`,
    desc: "Parfum floral doux et ambiance cosy.",
    badge: "Flower",
    rating: "4.9"
  },
  {
    id: 14,
    name: "Bougie pastel",
    price: 30,
    category: "bougies",
    img: `image/c4.${IMG_EXT}`,
    desc: "Bougie handmade au style pastel.",
    badge: "Cute",
    rating: "4.7"
  },
  {
    id: 15,
    name: "Bougie décorative",
    price: 33,
    category: "bougies",
    img: `image/c5.${IMG_EXT}`,
    desc: "Belle bougie pour décorer votre espace.",
    badge: "Decor",
    rating: "4.8"
  },
  {
    id: 16,
    name: "Bougie cadeau",
    price: 39,
    category: "bougies",
    img: `image/c6.${IMG_EXT}`,
    desc: "Bougie parfaite pour offrir.",
    badge: "Gift",
    rating: "5.0"
  },
  {
    id: 17,
    name: "Bougie romantique",
    price: 36,
    category: "bougies",
    img: `image/c7.${IMG_EXT}`,
    desc: "Ambiance romantique et senteur douce.",
    badge: "Romantic",
    rating: "4.9"
  },
  {
    id: 18,
    name: "Bougie cosy",
    price: 31,
    category: "bougies",
    img: `image/c8.${IMG_EXT}`,
    desc: "Bougie cosy pour une ambiance chaleureuse.",
    badge: "Cosy",
    rating: "4.7"
  },
  {
    id: 19,
    name: "Bougie artisanale",
    price: 34,
    category: "bougies",
    img: `image/c10.${IMG_EXT}`,
    desc: "Bougie faite main avec soin.",
    badge: "Handmade",
    rating: "4.8"
  },
  {
    id: 20,
    name: "Bougie soft pink",
    price: 37,
    category: "bougies",
    img: `image/c11.${IMG_EXT}`,
    desc: "Bougie girly aux tons doux.",
    badge: "Soft",
    rating: "4.9"
  },
  {
    id: 21,
    name: "Bougie bloom",
    price: 40,
    category: "bougies",
    img: `image/c12.${IMG_EXT}`,
    desc: "Bougie inspirée de l'univers floral.",
    badge: "Bloom",
    rating: "5.0"
  },
  {
    id: 22,
    name: "Bougie premium",
    price: 45,
    category: "bougies",
    img: `image/c13.${IMG_EXT}`,
    desc: "Bougie premium avec finition élégante.",
    badge: "Premium",
    rating: "5.0"
  },

  // Accessoires a1 -> a16
  {
    id: 23,
    name: "Pack 4 Chouchou Pastel",
    price: 18,
    category: "accessoires",
    img: `image/a1.${IMG_EXT}`,
    desc: "Accessoire handmade doux et pratique.",
    badge: "Cute",
    rating: "4.7"
  },
  {
    id: 24,
    name: "Pack 6 Chouchou Rosé",
    price: 45,
    category: "accessoires",
    img: `image/a2.${IMG_EXT}`,
    desc: "Petite pochette handmade chic et pratique.",
    badge: "Chic",
    rating: "4.9"
  },
  {
    id: 25,
    name: "Pack 3 Hair Clips",
    price: 15,
    category: "accessoires",
    img: `image/a3.${IMG_EXT}`,
    desc: "Accessoire cheveux doux et féminin.",
    badge: "Top",
    rating: "4.8"
  },
  {
    id: 26,
    name: "Pack 4 Hair Clips Blue",
    price: 35,
    category: "accessoires",
    img: `image/a4.${IMG_EXT}`,
    desc: "Trousse handmade avec détails floraux.",
    badge: "Flower",
    rating: "4.8"
  },
  {
    id: 27,
    name: "Pack 4 Hair Clips Red",
    price: 28,
    category: "accessoires",
    img: `image/a5.${IMG_EXT}`,
    desc: "Pièce brodée avec amour.",
    badge: "Brodé",
    rating: "4.9"
  },
  {
    id: 28,
    name: "Hair Clips Fleur Gold",
    price: 55,
    category: "accessoires",
    img: `image/a6.${IMG_EXT}`,
    desc: "Sac doux et pratique pour tous les jours.",
    badge: "Bag",
    rating: "5.0"
  },
  {
    id: 29,
    name: "Hair Clips floral",
    price: 24,
    category: "accessoires",
    img: `image/a7.${IMG_EXT}`,
    desc: "Accessoire inspiré des fleurs.",
    badge: "Lovely",
    rating: "4.7"
  },
  {
    id: 30,
    name: "Hair Clips floral",
    price: 42,
    category: "accessoires",
    img: `image/a8.${IMG_EXT}`,
    desc: "Pochette pastel douce et élégante.",
    badge: "Pastel",
    rating: "4.8"
  },
  {
    id: 31,
    name: "Hair Clips floral",
    price: 20,
    category: "accessoires",
    img: `image/a9.${IMG_EXT}`,
    desc: "Création douce pour compléter votre style.",
    badge: "Soft",
    rating: "4.7"
  },
  {
    id: 32,
    name: "Duo Hair Clips floral",
    price: 33,
    category: "accessoires",
    img: `image/a10.${IMG_EXT}`,
    desc: "Mini pochette pratique et girly.",
    badge: "Mini",
    rating: "4.8"
  },
  {
    id: 33,
    name: "Cache Téléphone floral",
    price: 26,
    category: "accessoires",
    img: `image/a11.${IMG_EXT}`,
    desc: "Accessoire élégant fait main.",
    badge: "Elegant",
    rating: "4.9"
  },
  {
    id: 34,
    name: "Création brodée",
    price: 39,
    category: "accessoires",
    img: `image/a12.${IMG_EXT}`,
    desc: "Création artisanale avec broderie.",
    badge: "Handmade",
    rating: "4.8"
  },
  {
    id: 35,
    name: "Sac croché",
    price: 27,
    category: "accessoires",
    img: `image/a13.${IMG_EXT}`,
    desc: "Accessoire inspiré de Handmade Bloom.",
    badge: "Bloom",
    rating: "4.7"
  },
  {
    id: 36,
    name: "Sac croché",
    price: 44,
    category: "accessoires",
    img: `image/a14.${IMG_EXT}`,
    desc: "Pochette girly idéale pour offrir.",
    badge: "Gift",
    rating: "4.9"
  },
  {
    id: 37,
    name: "Sac plage croché",
    price: 48,
    category: "accessoires",
    img: `image/a15.${IMG_EXT}`,
    desc: "Accessoire premium avec finition soignée.",
    badge: "Premium",
    rating: "5.0"
  },
  {
    id: 38,
    name: "Porte clé papillon",
    price: 60,
    category: "accessoires",
    img: `image/a16.${IMG_EXT}`,
    desc: "Set handmade doux, pratique et élégant.",
    badge: "Set",
    rating: "5.0"
  }
];

let cart = JSON.parse(localStorage.getItem("hb_cart")) || [];
let currentCategory = "all";

const productsGrid = document.getElementById("productsGrid");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const subTotal = document.getElementById("subTotal");
const deliveryFee = document.getElementById("deliveryFee");
const cartCount = document.getElementById("cartCount");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category");

const confirmOrder = document.getElementById("confirmOrder");
const orderMessage = document.getElementById("orderMessage");
const deliveryMethod = document.getElementById("deliveryMethod");

const sendFeedback = document.getElementById("sendFeedback");
const feedbackMessage = document.getElementById("feedbackMessage");
const feedbackGrid = document.getElementById("feedbackGrid");

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const toast = document.getElementById("toast");

function renderProducts() {
  const searchValue = searchInput.value.toLowerCase();

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      currentCategory === "all" || product.category === currentCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.desc.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue);

    return matchesCategory && matchesSearch;
  });

  productsGrid.innerHTML = "";

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <p style="text-align:center; grid-column:1/-1; color:#777;">
        Aucun produit trouvé.
      </p>
    `;
    return;
  }

  filteredProducts.forEach(product => {
    productsGrid.innerHTML += `
      <div class="product-card">
        <span class="product-badge">${product.badge}</span>

        <button class="wishlist-btn" onclick="showToast('Produit ajouté aux favoris 💕')">
          ♡
        </button>

        <div class="product-img">
          <img src="${product.img}" alt="${product.name}" />
        </div>

        <h3>${product.name}</h3>

        <p>${product.desc}</p>

        <div class="product-meta">
          <span>⭐ ${product.rating}</span>
          <span>${product.category}</span>
        </div>

        <div class="price-row">
          <span class="price">${product.price} DT</span>

          <button class="add-btn" onclick="addToCart(${product.id})">
            Ajouter
          </button>
        </div>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(item => item.id === id);
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
  openCartDrawer();
  showToast("Produit ajouté au panier 🛍️");
}

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <h3>Votre panier est vide</h3>
        <p>Ajoutez des produits pour commencer votre commande.</p>
      </div>
    `;
  }

  let subtotalValue = 0;
  let count = 0;

  cart.forEach(item => {
    subtotalValue += item.price * item.quantity;
    count += item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div class="cart-img">
          <img src="${item.img}" alt="${item.name}" />
        </div>

        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>${item.price} DT</p>

          <div class="qty">
            <button onclick="changeQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
        </div>

        <button class="remove-btn" onclick="removeFromCart(${item.id})">
          Supprimer
        </button>
      </div>
    `;
  });

  const deliveryValue = getDeliveryFee();
  const totalValue = subtotalValue + deliveryValue;

  subTotal.textContent = `${subtotalValue} DT`;
  deliveryFee.textContent = `${deliveryValue} DT`;
  cartTotal.textContent = `${totalValue} DT`;
  cartCount.textContent = count;
}

function changeQuantity(id, value) {
  const item = cart.find(product => product.id === id);

  if (!item) return;

  item.quantity += value;

  if (item.quantity <= 0) {
    removeFromCart(id);
  } else {
    saveCart();
    renderCart();
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  showToast("Produit supprimé du panier");
}

function getDeliveryFee() {
  if (deliveryMethod.value === "domicile" && cart.length > 0) {
    return 7;
  }

  return 0;
}

function saveCart() {
  localStorage.setItem("hb_cart", JSON.stringify(cart));
}

function openCartDrawer() {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("show");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("show");
}

async function confirmCustomerOrder() {
  const currentUser = JSON.parse(localStorage.getItem("hb_current_user"));

  if (!currentUser || currentUser.role !== "client") {
    showOrderMessage("Veuillez vous connecter avant de confirmer la commande.", "crimson");
    showToast("Connectez-vous pour passer votre commande 💖");

    localStorage.setItem("hb_redirect_after_login", "index.html");
    localStorage.setItem("hb_after_login_action", "open_cart");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1200);

    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const delivery = document.getElementById("deliveryMethod").value;
  const note = document.getElementById("orderNote").value.trim();

  if (cart.length === 0) {
    showOrderMessage("Votre panier est vide.", "crimson");
    return;
  }

  if (name === "" || phone === "" || address === "" || delivery === "") {
    showOrderMessage("Veuillez remplir toutes les informations.", "crimson");
    return;
  }

  if (phone.length < 8) {
    showOrderMessage("Numéro de téléphone invalide.", "crimson");
    return;
  }

  const subtotalValue = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const orderPayload = {
    client: name,
    telephone: phone,
    adresse: address,
    livraison: delivery,
    note: note,
    panier: cart,
    sousTotal: subtotalValue,
    fraisLivraison: getDeliveryFee(),
    total: subtotalValue + getDeliveryFee()
  };

  try {
    const response = await fetch("api/orders.php", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderPayload)
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      if (response.status === 401) {
        localStorage.setItem("hb_redirect_after_login", "index.html");
        localStorage.setItem("hb_after_login_action", "open_cart");
        window.location.href = "login.html";
        return;
      }

      showOrderMessage(data.message || "Erreur lors de la commande.", "crimson");
      return;
    }

    showOrderMessage(data.message || "Commande confirmée avec succès 💖", "#ff7eb6");
    showToast("Commande confirmée 💖");

    cart = [];
    saveCart();
    renderCart();

    document.getElementById("customerName").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerAddress").value = "";
    document.getElementById("deliveryMethod").value = "";
    document.getElementById("orderNote").value = "";
  } catch (error) {
    showOrderMessage("Impossible de contacter le serveur PHP.", "crimson");
  }
}

function showOrderMessage(message, color) {
  orderMessage.textContent = message;
  orderMessage.style.color = color;
}

async function sendCustomerFeedback() {
  const feedbackName = document.getElementById("feedbackName").value.trim();
  const feedbackRating = document.getElementById("feedbackRating").value;
  const feedbackText = document.getElementById("feedbackText").value.trim();

  if (feedbackName === "" || feedbackText === "") {
    feedbackMessage.textContent = "Veuillez remplir le feedback.";
    feedbackMessage.style.color = "crimson";
    return;
  }

  try {
    const response = await fetch("api/feedbacks.php", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: feedbackName,
        rating: feedbackRating,
        text: feedbackText
      })
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      feedbackMessage.textContent = data.message || "Erreur lors de l’envoi du feedback.";
      feedbackMessage.style.color = "crimson";
      return;
    }

    const newFeedback = document.createElement("div");
    newFeedback.className = "feedback-card";

    newFeedback.innerHTML = `
      <div class="stars">${feedbackRating}</div>
      <p>"${feedbackText}"</p>
      <h4>- ${feedbackName}</h4>
    `;

    feedbackGrid.prepend(newFeedback);

    feedbackMessage.textContent = data.message || "Merci pour votre avis 💕";
    feedbackMessage.style.color = "#ff7eb6";

    document.getElementById("feedbackName").value = "";
    document.getElementById("feedbackRating").value = "★★★★★";
    document.getElementById("feedbackText").value = "";

    showToast("Feedback ajouté 💕");
  } catch (error) {
    feedbackMessage.textContent = "Impossible de contacter le serveur PHP.";
    feedbackMessage.style.color = "crimson";
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

openCart.addEventListener("click", openCartDrawer);
closeCart.addEventListener("click", closeCartDrawer);
cartOverlay.addEventListener("click", closeCartDrawer);

deliveryMethod.addEventListener("change", renderCart);

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    currentCategory = button.dataset.category;

    renderProducts();
  });
});

searchInput.addEventListener("input", renderProducts);

confirmOrder.addEventListener("click", confirmCustomerOrder);
sendFeedback.addEventListener("click", sendCustomerFeedback);

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});

async function loadProductsFromBackend() {
  try {
    const response = await fetch("api/products.php", { credentials: "same-origin" });
    const data = await response.json();

    if (response.ok && data.success && Array.isArray(data.products)) {
      products = data.products;
      renderProducts();
    }
  } catch (error) {
    console.log("Backend PHP non disponible, utilisation des produits locaux.");
  }
}

function prefillUserInfo() {
  const currentUser = JSON.parse(localStorage.getItem("hb_current_user"));

  if (!currentUser || currentUser.role !== "client") {
    return;
  }

  const customerName = document.getElementById("customerName");

  if (customerName && customerName.value === "") {
    customerName.value = currentUser.name;
  }
}

function openCartAfterLogin() {
  const action = localStorage.getItem("hb_after_login_action");

  if (action === "open_cart") {
    localStorage.removeItem("hb_after_login_action");

    setTimeout(() => {
      openCartDrawer();
      showToast("Vous pouvez maintenant confirmer votre commande 💖");
    }, 500);
  }
}

async function syncCurrentUserFromBackend() {
  try {
    const response = await fetch("api/auth.php?action=current", { credentials: "same-origin" });
    const data = await response.json();

    if (response.ok && data.success && data.loggedIn && data.user) {
      localStorage.setItem("hb_current_user", JSON.stringify(data.user));
    } else if (response.ok && data.success && !data.loggedIn) {
      localStorage.removeItem("hb_current_user");
    }

    prefillUserInfo();
  } catch (error) {
    console.log("Session PHP non disponible.");
  }
}

renderProducts();
renderCart();
loadProductsFromBackend();
syncCurrentUserFromBackend();
prefillUserInfo();
openCartAfterLogin();

const AUTH_API = "api/auth.php";

async function hbApi(url, options = {}) {
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

function showAuthMessage(element, message, color) {
  if (!element) return;
  element.textContent = message;
  element.style.color = color;
}

async function getCurrentUser() {
  const data = await hbApi(`${AUTH_API}?action=current`, { method: "GET" });

  if (data.success && data.loggedIn && data.user) {
    localStorage.setItem("hb_current_user", JSON.stringify(data.user));
    return data.user;
  }

  localStorage.removeItem("hb_current_user");
  return null;
}

async function registerUser() {
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  const message = document.getElementById("registerMessage");

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    showAuthMessage(message, "Veuillez remplir tous les champs.", "crimson");
    return;
  }

  showAuthMessage(message, "Création du compte...", "#777");

  const data = await hbApi(`${AUTH_API}?action=register`, {
    method: "POST",
    body: JSON.stringify({ name, email, password, confirmPassword })
  });

  if (!data.success) {
    showAuthMessage(message, data.message || "Erreur lors de l’inscription.", "crimson");
    return;
  }

  showAuthMessage(message, data.message || "Compte créé avec succès 💖", "#ff7eb6");

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1200);
}

async function loginUser() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const message = document.getElementById("loginMessage");

  if (email === "" || password === "") {
    showAuthMessage(message, "Veuillez remplir tous les champs.", "crimson");
    return;
  }

  showAuthMessage(message, "Connexion en cours...", "#777");

  const data = await hbApi(`${AUTH_API}?action=login`, {
    method: "POST",
    body: JSON.stringify({ email, password })
  });

  if (!data.success) {
    showAuthMessage(message, data.message || "Email ou mot de passe incorrect.", "crimson");
    return;
  }

  localStorage.setItem("hb_current_user", JSON.stringify(data.user));
  showAuthMessage(message, data.message || "Connexion réussie 💖", "#ff7eb6");

  const redirectAfterLogin = localStorage.getItem("hb_redirect_after_login");
  localStorage.removeItem("hb_redirect_after_login");

  setTimeout(() => {
    if (data.user.role === "admin") {
      window.location.href = "admin.html";
    } else {
      window.location.href = redirectAfterLogin || "index.html";
    }
  }, 900);
}

async function logoutUser() {
  await hbApi(`${AUTH_API}?action=logout`, { method: "POST", body: JSON.stringify({}) });
  localStorage.removeItem("hb_current_user");
  window.location.href = "login.html";
}

async function protectAdminPage() {
  const user = await getCurrentUser();

  if (!user || user.role !== "admin") {
    window.location.href = "login.html";
    return null;
  }

  return user;
}

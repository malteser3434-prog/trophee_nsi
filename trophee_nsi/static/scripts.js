// Sélection des éléments
const btn = document.querySelector(".notebook-btn");
const notebook = document.querySelector(".notebook");
const textarea = document.querySelector(".notebook-text");
const closeBtn = document.querySelector(".close-btn");

// --- Ouvrir le carnet ---
btn.addEventListener("click", () => {
  notebook.style.display = "flex";
  btn.style.display = "none";
});

// --- Fermer le carnet ---
closeBtn.addEventListener("click", () => {
  notebook.style.display = "none";
  btn.style.display = "block";
});

// --- Sauvegarde automatique ---
textarea.value = localStorage.getItem("notebook") || "";
textarea.addEventListener("input", () => {
  // Si le texte dépasse la hauteur de la boîte, bloquer le dernier caractère
  if (textarea.scrollHeight > textarea.clientHeight) {
    textarea.value = textarea.value.slice(0, -1);
  }

  // Sauvegarde
  localStorage.setItem("notebook", textarea.value);
});

function appliquerEtatJeu() {
  const btn = document.querySelector(".notebook-btn");
  const bg = document.getElementById("background-img");
  const objetAuSol = document.getElementById("clip-eglise");

  // ON VÉRIFIE LA VARIABLE DÉFINITIVE (notre variable "1")
  // localStorage.getItem renvoie une chaîne, donc on vérifie si c'est "1"
  if (localStorage.getItem("clipboard_recupere") === "1") {
    // 1. Le bouton devient toujours visible
    if (btn) {
      btn.classList.add("visible");
      btn.style.display = "block"; // Sécurité
    }

    // 2. Le fond change définitivement (si on est dans l'église)
    if (bg) {
      const imageVide = bg.getAttribute("data-empty");
      if (imageVide) bg.src = imageVide;
    }

    // 3. L'objet au sol est supprimé définitivement
    if (objetAuSol) {
      objetAuSol.style.display = "none";
    }
  }
}

function ramasserObjet(nomObjet) {
  if (nomObjet === "clipboard") {
    // ON PASSE LA VARIABLE À 1 POUR TOUJOURS
    localStorage.setItem("clipboard_recupere", "1");

    // On applique immédiatement les changements
    appliquerEtatJeu();
    initialiserCarnet(); // Pour que le bouton soit cliquable tout de suite
  }

  // On prévient Flask pour la session serveur
  fetch("/ramasser/" + nomObjet);
}

// Au chargement de CHAQUE page
document.addEventListener("DOMContentLoaded", () => {
  appliquerEtatJeu();
  initialiserCarnet();
});

// --- Ta fonction de gestion du carnet (inchangée) ---
function initialiserCarnet() {
  const btn = document.querySelector(".notebook-btn");
  const notebook = document.querySelector(".notebook");
  const textarea = document.querySelector(".notebook-text");
  const closeBtn = document.querySelector(".close-btn");

  if (btn && notebook && closeBtn) {
    // --- OUVRIR LE CARNET ---
    btn.onclick = () => {
      notebook.style.display = "flex";
      // On retire la classe visible et on force le cache
      btn.classList.remove("visible");
      btn.style.setProperty("display", "none", "important");
    };

    // --- FERMER LE CARNET ---
    closeBtn.onclick = () => {
      notebook.style.display = "none";
      // On remet la classe visible
      btn.classList.add("visible");
      btn.style.setProperty("display", "block", "important");
    };

    // --- SAUVEGARDE TEXTE ---
    textarea.value = localStorage.getItem("notebook") || "";
    textarea.oninput = () => {
      localStorage.setItem("notebook", textarea.value);
    };
  }
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("reset")) {
  localStorage.clear();
  window.location.href = "/"; // On recharge proprement sans le paramètre
}

let accessRefused = true;

function checkAcces() {
  // On appelle la route Python /verifier_barriere
  fetch("/verifier_barriere")
    .then((response) => response.json())
    .then((data) => {
      const resultDiv = document.getElementById("affichage-resultat");
      resultDiv.innerText = data.message;
      resultDiv.className = data.statut; // Applique le rouge ou le vert
    });
}

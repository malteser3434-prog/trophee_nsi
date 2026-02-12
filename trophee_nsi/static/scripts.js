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

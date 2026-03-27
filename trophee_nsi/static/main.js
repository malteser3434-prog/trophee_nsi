const bootLines = [
  "INITIALISATION...",
  "CONNEXION AU RÉSEAU... OK",
  "ACCÈS ACCORDÉ",
  "OUVERTURE DE L'INTERFACE...",
];

const bootScreen = document.getElementById("bootScreen");
const bootTextEl = document.getElementById("bootText");
const mainContent = document.getElementById("mainContent");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runBootSequence() {
  let displayed = "";
  for (const line of bootLines) {
    displayed += line + "\n";
    bootTextEl.textContent = displayed;
    await sleep(400);
  }

  await sleep(600);

  // Cache le boot
  bootScreen.style.display = "none";

  // Affiche le contenu principal
  mainContent.style.display = "flex";

  updateHUD();
}

function updateHUD() {
  const now = new Date();
  const dateEl = document.getElementById("hudDate");
  const timeEl = document.getElementById("hudTime");

  if (dateEl) {
    const d = String(now.getDate()).padStart(2, "0");
    const m = String(now.getMonth() + 1).padStart(2, "0");
    dateEl.textContent = `${d}/${m}/${now.getFullYear()}`;
  }
  if (timeEl) {
    const h = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    timeEl.textContent = `${h}:${min}`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  runBootSequence();
  setInterval(updateHUD, 30000);
});

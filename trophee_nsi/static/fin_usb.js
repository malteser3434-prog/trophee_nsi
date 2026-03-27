// On attend que la page soit totalement chargée
window.addEventListener("DOMContentLoaded", () => {
  const textToDisplay =
    "> Agent, mission accomplie. En sécurisant la Clé de Données Finale d'AÉLLO-S, vous avez offert à la CIA un avantage technologique sans précédent. Détruire une telle prouesse technique aurait été un gâchis scientifique monumental. Bien que les risques de dérive soient réels, la maîtrise du climat entre les mains d'une structure régulée permet d'envisager la fin des famines et la stabilisation des zones de conflits climatiques. Vous avez compris que dans ce siècle, la neutralité n'existe pas : soit nous contrôlons l'outil, soit nous subissons celui de nos adversaires. La récupération de l'IA assure que le savoir ne sera pas perdu et que l'infrastructure pourra être réinitialisée sous une supervision stricte. Votre pragmatisme honore l'Agence. Le monde est instable, mais avec AÉLLO-S sous notre contrôle, nous avons enfin les moyens de dicter l'ordre au milieu du chaos.";

  const element = document.getElementById("argument-paragraph");
  const typeSpeed = 40;

  function typeWriter(text, i) {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(() => typeWriter(text, i), typeSpeed);
    }
  }

  // On vérifie si l'élément existe avant de lancer pour éviter l'erreur "null"
  if (element) {
    setTimeout(() => {
      typeWriter(textToDisplay, 0);
    }, 1000);
  } else {
    console.error(
      "L'élément 'argument-paragraph' n'a pas été trouvé dans le HTML.",
    );
  }
});

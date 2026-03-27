// On attend que la page soit totalement chargée
window.addEventListener("DOMContentLoaded", () => {
  const textToDisplay =
    "> Agent, votre décision est irréversible. En choisissant la destruction totale de l'IA AÉLLO-S, vous avez neutralisé la menace la plus insidieuse du projet : sa propre existence. Confier cette puissance à la CIA aurait simplement déplacé le problème, transformant un outil de contrôle atmosphérique global en une arme géopolitique redoutable. Le risque de corruption, de piratage ou d'une utilisation unilatérale par une agence d'État était inacceptable face à l'enjeu climatique mondial. La récupération n'était pas une option viable, car elle aurait perpétué le cycle du contrôle par la peur. Votre acte de 'destruction finale' n'est pas une défaite, mais une victoire pour la sécurité commune et la souveraineté des peuples sur leur propre environnement. Le projet AÉLLO-S n'est plus, et avec lui s'éteint le rêve dangereux d'une gestion centralisée du chaos.";

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

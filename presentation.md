---
Auteur: VUADELLE Corto, DAMON Alexandre, LEONARD Sacha
title: README pour les trophées NSI 
tags: trophées NSI, lycée
---

# 🚀 Project

## 📝 Description

Notre projet est un arg. Son objectif est de proposer une expérience unique au joueur. Mais à travers cette expérience, notre équipe veut passer un message fort, celui d'un monde au bord du gouffre condanmé par des ia devenues autonomes et puissantes. On laisse au joueur une vision personnelle de notre seul et unique monde, détruit par les plus grands.
A chaque seconde de nos vies, des personnes meurent, ou doivent quitter leurs terres natales à cause de changement climatique. Et à coté de cela, les plus grand de ce monde, s'acharnent à le détruire pour leurs intérêts personnels. Malgré tout, la fin du jeu pousse le joueur a faire un dilemme (Petite option de rejouabilité), l'histoire est d'ailleurs volontairement floue sur certains aspect pour provoquer l'imagination du joueur et peut etre le partage entre les joueurs. 
Il répond aux critères d'originalité des Trophées NSI, car il traite de l'environnement, et mobilise la curiosité du joueur dans une experience que nous pensons peu commune. 



## 🛠️ Aspects Techniques (Spécificités NSI)

Cette section est cruciale pour le jury. Expliquez comment vous avez utilisé le programme de NSI :

- **Langages & Libs :** Python (Flask), HTML(Flask), CSS(Flask), JS 
- **Structures de données :** Utilisation de flask.session (dictionnaire côté serveur) pour maintenir l'état de progression de l'utilisateur à travers les différentes pages.
- Séparation des préoccupations : Distinction claire entre la donnée (Python), la présentation (HTML/CSS) et le comportement (JS).
- **Concepts mobilisés :** Architecture Client-Serveur : Compréhension du protocole HTTP (requêtes GET pour afficher les énigmes et POST pour soumettre les solutions).
- Programmation Événementielle (JS) : Mise en place du système de clipboard.
- Interaction Dynamique :  Utilisation de variables dans les URLs Flask pour créer des pages d'énigmes uniques.
- Algorithmes de vérification des réponses pour débloquer l'accès aux étapes suivantes.

## 🚀 Installation et Utilisation

Expliquez comment tester votre projet :

1. **Prérequis :** Navigateur, accès au web, accès au fichier du jeu, python et Flask
2. **Installation des dépendances :** `pip install -r requirements.txt`
3. **Lancement :** `python main.py`

## est-ce que le projet est une création originale ? Si non, l'exploitation de codes existants est clairement énoncée, les autrices ou les auteurs sont identifiés et mentionnés. Avez-vous eu recours à l'Intelligence Artificielle ? Si oui, quelles ont été les modalités d'utilisation de l'IA dans ce projet (par exemple : fonctions utilisées, proportion de l'IA dans le projet global) ?

Le projet est une création originale malheureusement pas aussi aboutie que nous l'aurions souhaité (lore, éngimes...) mais qui reste une expérience que nous trouvons divertissante et qui apporte un peu de fraicheur. Nous avons eu recours à l'Intelligence artifiecelle pour la création de certaines images, certaines ont etes pyxelisées pour reduire un peu la generation d'image couteuse en eau/éléctricité. L'IA n'a pas été un outil créatif dans le sens de l'histoire ou des énigmes mais nous as servis pour generer du code et optimiser notre temps. De ce fait, nous estimons la part de l'IA dans notre projet de 40 %. 


## 📸 Captures d'écran
>
Comme nous voulons conserver un peu de mystère par rapport a notre projet, nous vous invitons a le découvrir par vous-mêmes pour une meilleure immersion. Nous vous encourageons d'ailleurs a bien fouiller partout surtout dans les poubelles et dans les fichiers !
>

## 📜 Licence

Ce projet est sous licence GNU.

Présentation du projet

La présentation du projet est une description synthétique rédigée par les élèves. Vous trouverez ci-dessous les informations à détailler dans ce fichier :
Présentation globale

Vous présentez le contexte de réalisation de votre projet => compétences évaluées : pertinence et son degré d'utilité de votre projet, originalité des idées.
Précisez les informations suivantes :

Notre projet est un arg (alternate reality game, voir https://fr.wikipedia.org/wiki/Jeu_en_r%C3%A9alit%C3%A9_altern%C3%A9e). Il se joue donc sur navigateur et son objectif est de proposer une expérience unique au joueur. Mais à travers cette expérience, notre équipe veut passer un message fort, celui d'un monde au bord du gouffre condanmé par des ia devenues autonomes et puissantes. On laisse au joueur une vision personnelle de notre seul et unique monde, détruit par les plus grands.
A chaque seconde de nos vies, des personnes meurent, ou doivent quitter leurs terres natales à cause de changement climatique. Et à coté de cela, les plus grand de ce monde, s'acharnent à le détruire pour leurs intérêts personnels. Malgré tout, la fin du jeu pousse le joueur a faire un dilemme (Petite option de rejouabilité), l'histoire est d'ailleurs volontairement floue sur certains aspect pour provoquer l'imagination du joueur et peut etre le partage entre les joueurs. 
Il répond aux critères d'originalité des Trophées NSI, car il traite de l'environnement, et mobilise la curiosité du joueur dans une experience que nous pensons peu commune. 

L'idée est né grâce à Sacha, qui voulait se lancer dans la création d'un arg parce qu'il regarde beaucoup de vidéos autour de ce genre de jeux sur YouTube et joue lui-meme à ces expériences communautaires. Corto et moi-meme connaisiont moins bien le domaine mais grâce a ce projet nous avons decouvert un univers passionant que nous vous invitons aussi à découvrir. 

Le premier grand défi a été de créer une histoire et un univers pour notre arg, avec un lien avec le thème de cette année. Nous avons d'abord pensé à un jeu basé sur l'analyse de données météorologiques réélles afin de résoudre des énigmes jusqu'a arriver à la version finale, une hsitoire beaucoup plus floue, libre et futuristique. Le concept d'IA a cependant toujours été là et est malgré peut etre son manque d'originalité quelque chose d'important pour nous. 

Ensuite, la création des énigmes à pris également un peu de temps en raison du fait que nous ayons vu trop grand dès le départ. Nous voulions faire des énigmes originales et nous ne savions pas trop ou mettre le curseur de difficulté. Cependant, nous sommes arrivés avec cette version du jeu à allier énigmes de cryptographie, d'OSINT, de fouille dans le code ou de logique. Nous avons également mis à disposition un carrnet de bord au joueur, ce dernier n'est pas autant exploité que ce qu'il aurait pu etre mais reste fonctionnel et surtout suscite l'imagination, la créativité et surtout offre la liberté au joueur, caractéristique essentielle d'un ARG. 

Présentation de l'équipe

Vous présentez l'organisation définie dans le groupe. Chaque membre de l’équipe doit impérativement réaliser un aspect technique du projet (hors design, gestion de projet, rédaction de la documentation) => compétences évaluées : capacité à travailler en équipe, bon équilibre des différentes tâches.
Précisez les informations suivantes :

présentation de l’équipe,
rôle de chacun et chacune,
répartition des tâches,
temps passé sur le projet.

Étapes du projet

Vous présentez les principales étapes de votre projet, de la naissance de l'idée jusqu’au développement de votre solution.
Validation de l’opérationnalité et du fonctionnement

Vous détaillez l'état d'avancement de votre projet et les actions menées pour garantir le bon fonctionnement de votre solution => compétences évaluées : capacité à innover, à identifier les difficultés et à proposer des améliorations, capacité à justifier des choix technologiques et à expliquer les concepts.
Précisez les informations suivantes :

état d’avancement du projet au moment du dépôt,
approches mises en œuvre pour vérifier l’absence de bugs,
difficultés rencontrées et les solutions apportées.

Ouverture

Vous réalisez un bilan personnel sur ce projet et détaillez l'expérience vécue par chaque membre de l'équipe => compétences évaluées : analyse critique, prise de recul, implication dans le projet.
Précisez les informations suivantes :

idées d'amélioration du projet,
analyse critique,
compétences personnelles développées.
démarche d'inclusion.

Ceci est un MODELE_PRESENTATION.

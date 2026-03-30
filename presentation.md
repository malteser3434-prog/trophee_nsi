
**Présentation du projet**

Notre projet est un arg (alternate reality game, voir https://fr.wikipedia.org/wiki/Jeu_en_r%C3%A9alit%C3%A9_altern%C3%A9e). Il se joue donc sur navigateur et son objectif est de proposer une expérience unique au joueur. Mais à travers cette expérience, notre équipe veut passer un message fort, celui d'un monde au bord du gouffre condanmé par des ia devenues autonomes et puissantes. On laisse au joueur une vision personnelle de notre seul et unique monde, détruit par les plus grands.
A chaque seconde de nos vies, des personnes meurent, ou doivent quitter leurs terres natales à cause de changement climatique. Et à coté de cela, les plus grand de ce monde, s'acharnent à le détruire pour leurs intérêts personnels. Malgré tout, la fin du jeu pousse le joueur a faire un dilemme (Petite option de rejouabilité), l'histoire est d'ailleurs volontairement floue sur certains aspect pour provoquer l'imagination du joueur et peut etre le partage entre les joueurs. 
Il répond aux critères d'originalité des Trophées NSI, car il traite de l'environnement, et mobilise la curiosité du joueur dans une experience que nous pensons peu commune. 

L'idée est né grâce à Sacha, qui voulait se lancer dans la création d'un arg parce qu'il regarde beaucoup de vidéos autour de ce genre de jeux sur YouTube et joue lui-meme à ces expériences communautaires. Corto et moi-meme connaisiont moins bien le domaine mais grâce a ce projet nous avons decouvert un univers passionant que nous vous invitons aussi à découvrir. 

Le premier grand défi a été de créer une histoire et un univers pour notre arg, avec un lien avec le thème de cette année. Nous avons d'abord pensé à un jeu basé sur l'analyse de données météorologiques réélles afin de résoudre des énigmes jusqu'a arriver à la version finale, une hsitoire beaucoup plus floue, libre et futuristique. Le concept d'IA a cependant toujours été là et est malgré peut etre son manque d'originalité quelque chose d'important pour nous. 

Ensuite, la création des énigmes à pris également un peu de temps en raison du fait que nous ayons vu trop grand dès le départ. Nous voulions faire des énigmes originales et nous ne savions pas trop ou mettre le curseur de difficulté. Cependant, nous sommes arrivés avec cette version du jeu à allier énigmes de cryptographie, d'OSINT, de fouille dans le code ou de logique. Nous avons également mis à disposition un carrnet de bord au joueur, ce dernier n'est pas autant exploité que ce qu'il aurait pu etre mais reste fonctionnel et surtout suscite l'imagination, la créativité et surtout offre la liberté au joueur, caractéristique essentielle d'un ARG. 

**Présentation de l'équipe**

Notre équipe est composé de trois membres dévoués présents ci-dessous !

-Vuadelle Corto (@malteser3434-prog) : Responsable Images + Histoire
-Damon Alexandre (@alexdam34) : Responsable Histoire/Enigmes + Code Flask
-Léonard Sacha (@TaLeon-gg) : Responsable Code HTML/CSS

Tous les membres de l'équipe ont étés très polyvalents, nous avons tous chacun travaillé sur le code, l'histoire, les éngimes ou les images.  Nous avons fait ce choix, pour d'une part que personne ne se sente à l'écart et d'autre part que tout le monde profite de tous ce que les différents roles au sein de l'equipe ont a apporter. De plus, ceci n'est qu'une répartition qui tient compte du temps que chacun a consacré à un ou plusieurs rôles mais ne représente pas vraiment l'investissement global. 
Nous vous invitons a regarder la vidéo pour mieux nous connaître ! (Corto est malheureusement absent en raison d'un voyage à Rome et d'une maladie)

**Étapes du projet et compétences mobilisées** 

- Langages & Libs : Python (Flask), HTML(Flask), CSS(Flask), JS 
- Structures de données : Utilisation de flask.session (dictionnaire côté serveur) pour maintenir l'état de progression de l'utilisateur à travers les différentes pages.
- Séparation des préoccupations : Distinction claire entre la donnée (Python), la présentation (HTML/CSS) et le comportement (JS).
- Concepts mobilisés : Architecture Client-Serveur : Compréhension du protocole HTTP (requêtes GET pour afficher les énigmes et POST pour soumettre les solutions).
- Programmation Événementielle (JS) : Mise en place du système de clipboard.
- Interaction Dynamique :  Utilisation de variables dans les URLs Flask pour créer des pages d'énigmes uniques.
- Algorithmes de vérification des réponses pour débloquer l'accès aux étapes suivantes.

Au moment du dépôt, le jeu est jouable de bout en bout. Les scènes principales sont fonctionnelles : introduction, navigation dans Lyon, église, base militaire, voiture, salle des serveurs. Le dilemme final propose deux fins distinctes. Une page d'entrée distincte présente le lien vers le jeu chiffré en César pour renforcer l'immersion.

Les tests ont été effectués manuellement en jouant l'intégralité du parcours plusieurs fois, en vérifiant chaque énigme, chaque redirection et chaque état de session. Nous avons notamment vérifié que l'inventaire persistait correctement entre les pages grâce aux sessions Flask, et que les conditions de déverrouillage des énigmes étaient bien respectées.

Une seconde difficulté a concerné la conception des énigmes elles-mêmes comme nous l'avons dits précédemment. Trouver le bon niveau de difficulté a demandé plusieurs chnagements : trop faciles, elles cassent l'immersion mais trop difficiles, elles bloquent le joueur et cassent, cette fois, le rythme du jeu.

La principale difficulté a été la gestion de l'état du jeu côté serveur. L'utilisation de Flask était une première pour nous et cela nous as demandé un temps d'adaptation pour bien tout comprendre pas seulement avoir quelque chose de fonctionnel.  

**Ouverture**

De nombreuses pistes d'amélioration sont envisageables. L'ajout d'une bande sonore d'ambiance renforcerait l'immersion (Nous en avions une composée par corto mais qui ne correspondait pas vraiment à l'ambiance). Nous aimeriont également mettre un système de sauvegarde de progression pour permettre permettant au joueur de reprendre sa partie. Enfin, davantage de scènes intermédiaires, d'énigmes et d'objets ramassables enrichiraient énormément la narration et allongeraient l'expérience de jeu comme prévu au départ.
Nous avons quelques regret concernant ce projet qui aurait pu etre plus abouti mais nous sommes quand meme très fier d'avoir créé cette ARG original et prometteur (nous reprendrons le projet par la suite) et surtout nous sommes très contents d'avoir pu participer à ce concours qui nous a énormément apporté sur le plan technique (Flask, HTML, CSS), sur le plan créatif (Histoire) et sur le plan social (résponsabilité, répartition et amitié !). 

Nous espérons sincèrement que ce projet vous plairera et nous vous remercions pour votre temps. 
Toute l'équipe 


# Évaluation en cours de formation Développeur web et web mobile

Cette évaluation a pour vocation de valider les compétences du titre Développeur Web et Web Mobile
ayant pour intitulé :
Activité Type 1 - Développer la partie front-end d’une application web ou web mobile sécurisée
- Développer la partie dynamique des interfaces utilisateur web ou web mobile

## Contexte fictif :

Vous travaillez pour une startup qui veut lancer un site de location d’hébergements.
Votre mission est de développer une première version du front-end avec React.
Objectifs de l’évaluation :
Les étudiants doivent créer une application React avec Vite, TypeScript, Sass qui
simule un site de location de logements ou d’hébergements, type "Airbnb simplifié".

## Critères d’évaluation :
✓ Initialisation correcte du projet Vite/TS/Sass
✓ Mise en place du routing (home + detail + 404)
✓ Affichage dynamique depuis le JSON (cards)
✓ Page détail avec affichage des données dynamiques
✓ Composants Carousel et Collapse fonctionnels
✓ Qualité du code, typage TypeScript, bonne structuration
✓ Utilisation de Sass bien structurée 

## Spécifications fonctionnelles

1. Page d’accueil /
• Doit afficher une liste de logements disponibles.
• Chaque logement est affiché sous forme de card (avec image, titre, localisation).
• Les données proviennent d’un fichier data/logements.json.
2. Page de détail /logement/:id
• Lorsqu’on clique sur une card, on est redirigé vers la page de détail du logement.
• Cette page affiche :
o Le carousel des images du logement
o Le titre, la localisation, les tags
o Le nom de l’hôte + photo
o La note sous forme d’étoiles
o Une section Description en collapse
o Une section Équipements en collapse (liste)
3. Page d’erreur /404
• Si on entre une URL qui ne correspond à aucune route, une page 404 personnalisée doit
s’afficher avec :
o Message d’erreur clair
o Lien pour revenir à l’accueil
4. Éléments techniques attendus – Structure recommandée
src/
├── assets/ # images
├── components/ # Card, Collapse, Carousel, Navbar, Footer, etc.
── pages/ # Home.tsx, Details.tsx, NotFound.tsx
├── styles/ # SCSS globaux
├── data/ # logements.json
├── App.tsx
├── main.tsx
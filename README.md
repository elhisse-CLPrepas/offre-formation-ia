# Challenge 100 Jours — Offre LN-IA, Automne 2026

Page statique HTML/CSS/JavaScript du LAB-NUMÉRIQUE-IA.
Pilotage : Prof. Abderrahman EL HISSE.

## État au 24 septembre 2026
**V2 — VALIDÉ : contrôle visuel et mise à jour locale approuvés par le pilote le 24 septembre 2026. Non publiée.**
Branche : `refonte-offre-six-affiches-automne-2026`.
La page publique présente déjà la session d’automne ; la composition à six affiches reste locale.

## Aperçu local
http://127.0.0.1:8773/offre-formation-ia/

Si le serveur est arrêté, depuis le dossier parent :
```powershell
python -m http.server 8773 --bind 127.0.0.1 --directory C:\DEV\CHALLENGE-01-Juin-2026
```
Pas de compilation, de backend ni d’installation. Le chemin teste le préfixe GitHub Pages.

## Contenu
- Départ vendredi 25 septembre 2026 ; 100 jours, environ 14 semaines, 28 séances et 7 modules.
- Deux séances par semaine, entièrement en ligne. Jours, horaires et conditions précisés lors de l’échange préalable.
- Besoin réel, production, contrôle humain, corrections et portfolio.
- Six affiches : accueil, méthode, accompagnement, livrables, portfolio et invitation.
- Six liens documentaires du portfolio conservés.
- Partage à l’initiative du visiteur, copie du lien et repli manuel.
- Texte et liens utilisables sans JavaScript.

Le nombre de places et les jours lundi/vendredi ne sont plus annoncés sans confirmation récente. Aucun abonnement payant inclus n’est promis.

## Fichiers utiles
- `index.html` : contenu, ancres et métadonnées.
- `assets/css/style.css` : présentation adaptative.
- `assets/js/site.js` : copie du lien depuis le canonical.
- `assets/images/affiche-00…05-*.webp` : dix-huit variantes.
- `assets/images/partage-challenge-automne-2026.jpg` : carte sociale 1200 × 630.
- `data/portfolio.json` : références existantes, conservées.
- `docs/03-matrice-liens.md` : destinations et limites.
- `docs/04-checklist-publication.md` : liste blanche actuelle de 27 fichiers, incluant .gitignore.
- `docs/05-rapport-final-production.md` : rapport, mesures et captures.

## Liens de référence
- Offre : https://elhisse-clprepas.github.io/offre-formation-ia/
- Portfolio : https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/
- Communauté : https://chat.whatsapp.com/L900Zbek15j3tBtkJnpKaI

Le lien WhatsApp ouvre une communauté, sans envoyer un projet ni inscrire une personne.
Ces URL sont centralisées dans le script de préparation archivé ; le HTML reste statique et les partages fonctionnent sans JavaScript.

## Contrôles et sauvegardes
Tests Edge Chromium à 360, 768, 1440 px : ressources, débordements, clavier, FAQ, agrandissement, copie, repli et mode sans JavaScript.
Images principales : 2,02 Mo, soit environ 84 % de réduction par rapport aux PNG.
Sauvegardes, scripts et captures : `../09-ARCHIVES/versions/offre-six-affiches-2026-09-24/`.
Les anciens documents décrivent leurs dates respectives ; rapport et checklist actuels font référence pour cette mission.

## Publication
Validation locale et autorisation d’indexation et de commit accordées par le pilote le 24 septembre 2026.
La décision de push et de publication reste distincte ; aucun déploiement effectué.
Suivre la checklist actuelle ; exclure PNG sources et documents de travail. Ne pas utiliser `git add .`.
Avant une publication après le 25 septembre, vérifier la formulation du démarrage.

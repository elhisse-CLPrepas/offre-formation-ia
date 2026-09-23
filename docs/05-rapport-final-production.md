# Rapport après action — Offre LN-IA, six affiches

**Statut : V2 — VALIDÉ par le pilote le 24 septembre 2026 : contrôle visuel et mise à jour locale. Non publiée.**
Date : 24 septembre 2026.
Mission : exécuter le prompt maître de mise à jour avec les six affiches fournies.

## Résultat
Page HTML/CSS existante actualisée, sans migration ni nouvelle dépendance. Six affiches associées aux textes HTML, chacune une fois, avec variantes et agrandissement. Contenu utilisable sans JavaScript.

## Sources et diagnostic
Consignes AGENTS.md, README, HTML, CSS, données portfolio, documents de contrôle, prompt maître local et document des cinq prompts examinés.
Six PNG fournis : tous 1024 × 1536 ; correspondance des thèmes, titres arabes, logos et signatures vérifiée visuellement.
La copie des cinq prompts dans le dépôt porte encore « V1 — À VALIDER ». Elle sert de cadrage et n’a pas été modifiée ; elle est distincte de la copie précédemment validée à la racine du projet.

Offre, portfolio et invitation WhatsApp : HTTP 200. Les cinq ancres utilisées par les six cartes existent ; lien retour portfolio → offre présent.
HTML public et local initial identiques après normalisation BOM/fins de lignes : **True**.
L’ancienne documentation indiquant encore une page publique de juin était périmée.

Dépôt statique sans compilation ni workflow .github suivi. Sous-chemin GitHub Pages contrôlé ; paramètres du service GitHub Pages dans GitHub non consultés.

## Git et sauvegardes
Branche initiale `main` ; fichiers suivis propres, PNG et documents sources non suivis.
Base locale et référence locale origin/main : `de750b694c290c2a1180965c8e9e59c5b8795548`. Aucun fetch effectué.
Branche créée : `refonte-offre-six-affiches-automne-2026`.
Lors de la préparation initiale, aucun git add, commit, push, merge ou déploiement n’avait été réalisé. Le pilote a ensuite autorisé l’indexation ciblée et le commit local le 24 septembre 2026. Aucune autorisation de push, fusion ou publication dans cette étape.

Sauvegardes avant modification : `09-ARCHIVES/versions/offre-six-affiches-2026-09-24/`, hors du dépôt.
Fichiers sauvegardés : index.html, assets/css/style.css, README.md et documents de contrôle 03, 04, 05.

## Fichiers modifiés et créés
Modifiés : `index.html`, `assets/css/style.css`, `README.md`, `docs/03-matrice-liens.md`, `docs/04-checklist-publication.md`, `docs/05-rapport-final-production.md`.
Créés pour la page : dix-huit WebP, `assets/images/partage-challenge-automne-2026.jpg` et `assets/js/site.js`.
Liste exacte des 27 fichiers, dont le .gitignore actualisé lors de la préparation du commit, dans la checklist.

Non touchés : six PNG sources (empreintes vérifiées), document des cinq prompts, prompt maître, logo existant, anciennes images, data/portfolio.json, dépôt portfolio et autres fichiers du projet.
Anciennes URL graphiques préservées ; visuels en doublon retirés uniquement de la composition active.

## Décisions éditoriales
- Accueil : projet concret, pratique, vérification et autonomie progressive.
- « Comprendre le lundi. Produire le vendredi. » devient « Deux séances par semaine ».
- « 20 participants max. » devient une invitation et des conditions neutres.
Ces anciennes mentions figurent dans les précédents HTML/README, mais aucune confirmation récente indépendante n’a été fournie. Le prompt maître prescrit leur neutralisation.
- Sept modules et soutenance conservés. Quatre étapes de méthode et trois fonctions logicielles clairement distinguées.
- Exemples pour enseignants, coachs, formateurs, managers, chefs de projets, entrepreneurs, administratifs, fiduciaires et comptables.
- WhatsApp présenté comme communauté publique, sans message prérempli ni faux formulaire.
- Six cartes libellées « Voir la section du portfolio » : destinations documentaires, pas six applications.
- Date du 25 septembre 2026 maintenue ; mise à jour réelle au 24 septembre.
- Animation FLASH retirée. Aucun compte à rebours, tarif, horaire, avis ou résultat garanti ajouté.
- Aucun texte légal existant supprimé : le pied de page initial n’en comportait pas.

## Images et performance
Conversion avec Pillow déjà installé : WebP qualité 91, méthode 6. Aucun original modifié.
Alpha 03 et 05 conservé et vérifié pixel par pixel à 1024 px ; affichage sur fond ivoire.
Variantes via srcset/sizes, affiche 01 prioritaire, suivantes et preuves chargées à la demande.

| Affiche / section | PNG (Ko) | WebP 480 (Ko) | WebP 768 (Ko) | WebP 1024 (Ko) |
|---|---:|---:|---:|---:|
| 00 / `candidature` | 2324.1 | 146.3 | 286.9 | 422.9 |
| 01 / `accueil` | 1992.1 | 94.6 | 177.5 | 254.6 |
| 02 / `methode` | 1892.9 | 87.6 | 161.9 | 235.7 |
| 03 / `accompagnement` | 2135.6 | 148.0 | 323.3 | 401.2 |
| 04 / `livrables` | 2045.6 | 108.8 | 204.1 | 289.4 |
| 05 / `productions` | 2225.3 | 145.0 | 308.9 | 416.2 |

Unités décimales : 1 Ko = 1000 octets.
Six PNG : **12.62 Mo**, et non les ~17 Mo estimés dans le prompt.
Six WebP principaux : **2.02 Mo**, réduction de **84.0 %**.
Six WebP 480 px : **0.73 Mo**.
Dix-huit variantes sur disque : **4.21 Mo** ; elles ne sont pas toutes chargées par un même écran.
Carte sociale dédiée 1200 × 630 : **121.5 Ko**, logo existant et typographie, sans recadrage d’affiche.

## Tests et contrôles
- Edge headless et Playwright déjà installés : PASS à 360, 768, 1440 px.
- Aucun débordement horizontal, image cassée, ancre manquante ou erreur JavaScript observé.
- Six affiches dans les bonnes sections, ratio 2:3, variantes et zoom accessibles.
- Un H1, sept modules, identifiants uniques et balises correctement imbriquées.
- 27 ressources + carte sociale : HTTP 200 sous /offre-formation-ia/.
- Clavier : lien d’évitement, focus visible, agrandissement et FAQ testés.
- Partages : URL canonique encodée vérifiée, aucune publication effectuée.
- Copie : texte du presse-papiers relu ; repli manuel et focus testés sans Clipboard API.
- Sans JavaScript : contenu, affiches, navigation et partages disponibles.
- Principales combinaisons texte/fond : contrastes supérieurs à 4,5:1, détails dans structure-results.json.
- Aucun chemin local ni marqueur temporaire dans le HTML.
- Originaux intacts et canaux alpha principaux conformes.
- Captures de l’accueil, de la méthode et carte sociale inspectées ; petites corrections de navigation mobile et d’affichage du lien d’évitement appliquées puis retestées.

## Aperçu et captures
Aperçu : http://127.0.0.1:8773/offre-formation-ia/
Si nécessaire, relancer depuis le dossier parent du dépôt :
```powershell
python -m http.server 8773 --bind 127.0.0.1 --directory C:\DEV\CHALLENGE-01-Juin-2026
```
Serveur lié à l’adresse locale 127.0.0.1. Aucune compilation.

Dossier des preuves : `09-ARCHIVES/versions/offre-six-affiches-2026-09-24/controle/`.
Captures : accueil-360.png, accueil-768.png, accueil-1440.png, methode-360.png, methode-768.png, methode-1440.png, page-complete-1440.png.
Résultats : ui-results.json, images.json, external-links.json et structure-results.json.

## Limites et points à confirmer
- Navigateur intégré et outil d’image bloqués par une erreur de l’environnement Windows ; contrôles réalisés avec le navigateur local et lecture des captures.
- Safari, Firefox, appareil physique, lecteur d’écran : non testés.
- Audit W3C/WCAG exhaustif : non effectué ; les contrôles ciblés ne le remplacent pas.
- Adhésion réelle au groupe WhatsApp : non testée ; HTTP 200 ne garantit pas l’entrée.
- Aperçus réels des réseaux sociaux et disponibilité publique de la nouvelle carte : non testés avant publication.
- Jours, horaires, places, tarifs et accès payants aux outils à confirmer par le pilote.
- Avant une publication après le 25 septembre : revoir la formulation de démarrage.
- Contrôle visuel et mise à jour locale validés explicitement par le pilote le 24 septembre 2026. Cette validation ne vaut pas autorisation de publication.

Prochaine action recommandée : après le commit local autorisé, décider séparément du push et de la publication.

## Préparation du commit local autorisé

Validation et autorisation : message explicite du pilote le 24 septembre 2026.
Sauvegardes complémentaires : 09-ARCHIVES/versions/offre-six-affiches-2026-09-24/avant-commit/.
.gitignore : exclusions précises des PNG non suivis et des deux documents sources, plus protections des données privées et secrets prescrites par AGENTS.md. Tous les originaux restent sur disque.
Périmètre : 26 fichiers de la mise à jour et .gitignore, soit 27 fichiers. Aucun autre fichier ajouté.
Contrôles de préparation : liste blanche, git diff --check, exclusion des originaux et scan ciblé des secrets dans les textes indexés. Les fichiers de la page testée restent inchangés à cette étape.
Le hash et l’état Git après commit sont fournis dans le rapport de fin d’action de la conversation.

# Diagnostic de l’offre et du portfolio — Relance Automne 2026

**Projet :** Challenge 100 Jours — Formation IA pratique  
**Cadre :** LAB-NUMÉRIQUE-IA  
**Pilotage humain :** Prof. Abderrahman El Hisse  
**Statut :** À VALIDER — diagnostic en lecture seule  
**Date :** 25 août 2026  
**Version :** V1

## 1. Résumé exécutif

Le dépôt local correct est identifié et son état Git initial est propre. La page publique actuelle peut conserver son adresse, mais son contenu reste associé au lancement de juin 2026 : ancienne date, ancien WhatsApp, replay, programme en cinq phases et offres tarifaires à ne pas reconduire automatiquement.

La stratégie recommandée consiste à préserver la version de juin dans Git, créer une branche locale dédiée, puis construire une page d’offre structurée pour le 25 septembre 2026. La page expliquera l’offre et orientera vers l’inscription ; le portfolio apportera les preuves.

Ce rapport ne modifie ni `index.html`, ni ses ressources, ni la branche Git. Aucun commit, push, merge ou déploiement n’a été exécuté.

## 2. Dossier de travail et périmètre

Dossier principal retenu :

```text
C:\DEV\CHALLENGE-01-Juin-2026\offre-formation-ia
```

Dépôt et page à conserver :

```text
https://github.com/elhisse-CLPrepas/offre-formation-ia.git
https://elhisse-clprepas.github.io/offre-formation-ia/
```

Dossiers à ne pas utiliser comme source de publication :

```text
C:\DEV\CHALLENGE-01-Juin-2026\ln-ia-challenge-100jours-page-offre
C:\DEV\CHALLENGE-01-Juin-2026\offre-formation-ia-Autonme-2026
```

Le premier est un ancien dépôt distinct. Le second est un dossier non versionné avec la graphie `Autonme`.

Sources de lecture :

```text
C:\DEV\CHALLENGE-01-Juin-2026\05-PROGRAMME-PEDAGOGIQUE
C:\DEV\CHALLENGE-01-Juin-2026\07-portfolio
C:\DEV\CHALLENGE-01-Juin-2026\portfolio-formation-ia-ln-ia-publication
```

Le dépôt du portfolio ne sera pas modifié pendant cette mission.

## 3. État Git initial

| Contrôle | Résultat |
|---|---|
| Dépôt Git | Présent |
| Origin | `elhisse-CLPrepas/offre-formation-ia` |
| Branche | `main` |
| État initial | Propre avant création du rapport |
| Commit relevé | `09271ae64e2bca05b468fb0e6709782e20b75854` |
| Point d’entrée Pages | `index.html` à la racine |
| Architecture | Même dépôt et même URL |

Après validation, l’étiquette locale `archive-offre-juin-2026` pourra repérer ce commit, puis la branche locale `refonte-automne-2026` pourra être créée. Rien ne sera poussé à cette étape.

## 4. Structure actuelle

La page est presque entièrement contenue dans `index.html` (environ 25 Ko), avec CSS intégré. Sections présentes : en-tête, hero de juin, offre, publics, livrables, programme en cinq phases, soutenance, offres et priorités, modalités, FAQ, CTA WhatsApp et pied de page.

| Ressource | Dimensions | Poids | Diagnostic |
|---|---:|---:|---|
| `assets/logo-LN-IA.png` | 1774 × 887 | 857 Ko | Réutilisable après contrôle |
| `assets/affiche-challenge-100jours-ln-ia.jpeg` | 1024 × 1536 | 477 Ko | Ancienne affiche à contrôler |
| `assets/affiche-challenge-100jours-ln-ia-completee.png` | 1024 × 1536 | 2,75 Mo | Trop lourde pour usage direct |
| `assets/affiche-challenge-100jours-ln-ia-qr.png` | 1024 × 1536 | 2,76 Mo | Ancienne session et poids élevé |

## 5. Contenus obsolètes ou à neutraliser

- date du 1er juin 2026 ;
- ancien groupe WhatsApp `LVnXAMyFOqt94f77e1VHjK` ;
- replay et support Drive de l’ancien lancement ;
- ancienne grille de priorités, tarifs et remises ;
- programme en cinq phases au lieu des sept modules de référence ;
- ancienne affiche avec QR code ;
- mention de « version initiale » ;
- SEO générique sans Automne 2026 ;
- absence constatée de `canonical` et de `og:url`.

Ces éléments ne seront pas supprimés sans décision humaine. L’historique Git les préservera ; une archive publique ne sera créée que sur demande.

## 6. Contenus réutilisables

- identité Challenge 100 Jours et LAB-NUMÉRIQUE-IA ;
- logo LN-IA ;
- apprentissage par la production ;
- capacité de 20 participants ;
- familles de publics ;
- livrables concrets ;
- accompagnement et contrôle humains ;
- soutenance, sous réserve des sources validées ;
- FAQ à actualiser ;
- tonalité sobre et professionnelle ;
- URL GitHub Pages actuelle.

## 7. Portfolio de preuves

```text
https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/
```

Le portfolio présente une identité bleu nuit, blanc, turquoise et doré discret, quatre ensembles de progression, dix preuves P01 à P10, la progression PWA V1 vers V2, une méthode humain–IA, les contrôles et la publication GitHub Pages. Son CTA final renvoie déjà vers l’offre.

Pour éviter une copie du portfolio, sélectionner six à huit visuels maximum : présentation du Module 07, sélection des preuves, matrice compétences–preuves, progression avant/après, synthèse professionnelle, index des preuves, checklist de contrôle et publication GitHub Pages.

Chaque carte associera une compétence, une phrase courte et un lien vers la preuve.

## 8. Différences à résoudre

| Dimension | Offre actuelle | Portfolio | Cible Automne 2026 |
|---|---|---|---|
| Fonction | Lancement de juin | Preuves | Expliquer et orienter |
| Date | 1er juin 2026 | 25 septembre 2026 | 25 septembre 2026 |
| Programme | 5 phases | Parcours de preuves | 7 modules validés |
| Communauté | Ancien WhatsApp | CTA vers l’offre | My-Community-IA |
| Preuves | Peu visibles | 10 preuves | 6 à 8 cartes |
| SEO | Générique | Cohérent | Automne 2026 |
| Tarifs | Anciennes offres | Sans objet | Sur demande si non validés |

## 9. Liens à créer ou corriger

| Source | Emplacement | Libellé | Destination | État |
|---|---|---|---|---|
| Offre | En-tête | Voir le portfolio | `https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/` | À créer |
| Offre | Hero | Voir les productions | même URL | À créer |
| Offre | Galerie | Voir le portfolio complet | même URL | À créer |
| Offre | En-tête et final | Rejoindre My-Community-IA | `https://chat.whatsapp.com/L900Zbek15j3tBtkJnpKaI` | À remplacer |
| Offre | Cartes | Voir la preuve | portfolio ou ancre publique | À définir |
| Portfolio | CTA final | Découvrir la page officielle | URL de l’offre | Déjà présent |

Les deux liens Drive actuels seront retirés de la page active ou conservés seulement si leur utilité pour l’Automne 2026 est confirmée.

## 10. Sources pédagogiques

```text
05-PROGRAMME-PEDAGOGIQUE/programme-100-jours.md
05-PROGRAMME-PEDAGOGIQUE/modules.md
05-PROGRAMME-PEDAGOGIQUE/seances.md
05-PROGRAMME-PEDAGOGIQUE/livrables-attendus.md
05-PROGRAMME-PEDAGOGIQUE/MODULE-07/programme-cadre-module-07-semaines-13-14-v2-valide.md
```

Le détail des sept modules sera extrait de ces sources, jamais déduit de l’ancien programme.

## 11. Informations manquantes

| Variable | Statut | Traitement provisoire |
|---|---|---|
| Heure de lancement | À valider | Afficher seulement la date |
| Heure du vendredi | À valider | Ne pas afficher d’heure |
| Lien entretien | À compléter | Masquer le CTA |
| Contact direct | À compléter | Utiliser My-Community-IA |
| Tarif plein | À valider | Conditions communiquées lors de l’échange |
| Remises | À valider | Ne publier aucune remise |
| Fin des inscriptions | À valider | Ne pas afficher de date limite |
| Affiche hero | À choisir | Emplacement conditionnel |
| Affiches portfolio | À choisir | Limiter à 6–8 |
| Archive publique de juin | Décision requise | Repère Git par défaut |

## 12. Risques et maîtrise

- **Éditorial :** mélange juin/septembre ou tarifs non validés. Utiliser uniquement les faits validés.
- **Technique :** mauvais dépôt, chemins cassés, images lourdes. Fixer le dossier, utiliser des chemins relatifs et contrôler les ressources.
- **Git :** modification directe de `main` ou publication prématurée. Employer une branche dédiée et des autorisations séparées.
- **Confidentialité :** données privées ou sauvegardes publiées. Contrôler les secrets et n’utiliser que des ressources publiques validées.

## 13. Stratégie par paliers

1. **Diagnostic :** valider ce rapport, le dossier et le périmètre ; laisser la page intacte.
2. **Préservation Git :** vérifier `main`, créer localement `archive-offre-juin-2026`, puis `refonte-automne-2026`, sans push.
3. **Architecture :** séparer HTML/CSS/JS, extraire le programme, établir les liens et sélectionner les affiches.
4. **Construction locale :** créer la page, optimiser les images, mettre à jour README et CHANGELOG.
5. **Contrôle :** HTML, CSS, JavaScript, liens, 360/768/1440 px, clavier, contraste, SEO et contrôle visuel humain.
6. **Publication séparée :** indexation, commit, push, fusion et Pages nécessiteront des autorisations explicites.

## 14. Architecture éditoriale proposée

Navigation :

```text
Le Challenge | Programme | Productions | Méthode | FAQ
```

Actions :

```text
Voir le portfolio | Rejoindre My-Community-IA
```

Ordre de page recommandé :

1. en-tête accessible ;
2. hero Automne 2026 ;
3. pourquoi 100 jours ;
4. publics et besoins ;
5. format de la session ;
6. programme en sept modules ;
7. méthode LN-IA ;
8. livrables concrets ;
9. galerie de six à huit preuves ;
10. capacités acquises ;
11. accompagnement et validation ;
12. conditions et candidature ;
13. FAQ ;
14. CTA final ;
15. pied de page.

Principes : un seul `h1`, sections courtes, hiérarchie régulière, contenu essentiel sans JavaScript, CTA constant, données validées seulement, priorité mobile et accessibilité.

## 15. Architecture technique cible

```text
offre-formation-ia/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/app.js
│   └── images/
│       ├── logo-ln-ia.png
│       ├── hero-automne-2026.webp
│       └── portfolio/
├── data/portfolio.json
├── docs/
│   ├── 01-diagnostic-offre-et-portfolio.md
│   ├── 02-architecture-contenu.md
│   ├── 03-matrice-liens.md
│   ├── 04-checklist-publication.md
│   └── 05-rapport-final-production.md
├── README.md
└── CHANGELOG.md
```

`app.js` ne sera utilisé que pour une fonction utile, comme le menu mobile ou le compteur après validation de l’heure. La page restera compréhensible sans JavaScript.

## 16. Recommandation

La refonte doit être réalisée sur une branche dédiée, en conservant le dépôt et l’URL. Il faut restructurer la page autour de l’Automne 2026 plutôt que superposer des corrections à la version de juin.

```text
Page d’offre → expliquer, convaincre, orienter
Portfolio → démontrer par les productions et les preuves
My-Community-IA → accueillir et engager
```

## 17. Décision humaine attendue

```text
[ ] Diagnostic validé
[ ] Dossier de travail validé
[ ] Stratégie validée
[ ] Repère Git local autorisé
[ ] Branche locale autorisée
[ ] Architecture éditoriale validée
[ ] Sélection d’affiches à préparer
[ ] Variables commerciales et horaires à compléter
```

**Statut :** `PRÊT À VALIDER — PHASE 1 TERMINÉE`

**Point d’arrêt :** aucune modification de la page active. Attendre la validation humaine avant la préservation Git et la création de la branche.

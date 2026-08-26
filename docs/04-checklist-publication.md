# Checklist de publication — Relance Automne 2026

**Projet :** Challenge 100 Jours — LAB-NUMÉRIQUE-IA  
**Dossier :** `C:\DEV\CHALLENGE-01-Juin-2026\offre-formation-ia`  
**Branche :** `refonte-automne-2026`  
**Version :** V1  
**Date :** 26 août 2026  
**Statut :** À COMPLÉTER — PUBLICATION NON AUTORISÉE

## 1. Règle de décision

Cette checklist distingue quatre états :

```text
préparé localement
contrôlé localement
commité et poussé
contrôlé publiquement
```

À ce stade, seuls les deux premiers états sont concernés. La page publique affiche encore la version de juin 2026.

## 2. Références Git

- [x] Bon dépôt : `elhisse-CLPrepas/offre-formation-ia`
- [x] Branche locale : `refonte-automne-2026`
- [x] Repère local de juin : `archive-offre-juin-2026`
- [x] Commit de base local : `09271ae64e2bca05b468fb0e6709782e20b75854`
- [x] Aucun fichier indexé au moment de cette checklist
- [x] Aucun commit de refonte exécuté
- [x] Aucun push de la refonte exécuté
- [ ] Écart local avec `origin/main` expliqué avant publication
- [ ] Branche distante actualisée seulement après autorisation

Note : `origin/main` est encore sur `625caae`; le commit local `09271ae` de nettoyage n’est pas distant.

## 3. Contrôles éditoriaux

- [x] Date active : vendredi 25 septembre 2026
- [x] 14 semaines, 28 séances, deux séances par semaine
- [x] Modalité 100 % en ligne
- [x] Capacité de 20 participants maximum
- [x] Programme en sept modules issu de la source pédagogique
- [x] Ancienne date du 1er juin absente de la nouvelle page
- [x] Ancien groupe WhatsApp absent
- [x] Anciens replays Drive absents
- [x] Aucun ancien tarif présenté comme actif
- [x] Aucun horaire inventé
- [x] Aucun lien d’entretien fictif
- [x] Conditions et tarifs formulés de manière neutre
- [ ] Validation finale des textes par le pilote

## 4. Navigation et liens

- [x] Offre → portfolio prévue dans l’en-tête, le hero, la galerie et le CTA final
- [x] Portfolio → offre déjà conforme
- [x] Offre → My-Community-IA prévue dans plusieurs CTA
- [x] Ancres portfolio `#selection`, `#progression`, `#productions`, `#controle`, `#publication` validées
- [x] Page `/preuves/` et ancres `#p01` à `#p10` signalées conformes
- [x] Règle retenue : grandes sections pour les six cartes de parcours
- [x] URL complète sur chaque ligne de la matrice
- [x] Liens entretien, paiement et contact direct volontairement absents
- [ ] Refaire le contrôle HTTP externe après publication

## 5. Contrôles techniques locaux

- [x] Page servie localement en HTTP 200
- [x] Un seul `h1`
- [x] Ressources locales cassées : 0
- [x] Ancres internes cassées : 0
- [x] Six preuves dans `data/portfolio.json`
- [x] Références PNG actives : 0
- [x] Navigation mobile non masquée
- [x] Lien d’évitement présent
- [x] Focus clavier visible
- [x] `prefers-reduced-motion` présent
- [x] Aucun chemin Windows, `file://` ou `localhost` dans le HTML
- [x] Canonical présent
- [x] `og:url` présent
- [x] `og:image` présente localement
- [x] `og:image` publique actuellement HTTP 404, résultat attendu avant publication
- [ ] Validation HTML formelle
- [ ] Contrôle sans JavaScript — la page est statique, à confirmer manuellement

## 6. Responsive et contrôle visuel

- [x] Validation visuelle humaine du Lot 2 accordée
- [x] Navigation mobile corrigée après le Lot 2
- [ ] Recontrôler à 360 px après correction du menu
- [ ] Recontrôler à 768 px après correction du menu
- [ ] Recontrôler à 1440 px après optimisation WebP
- [ ] Contrôler l’absence de défilement horizontal
- [ ] Contrôler le cadrage du hero
- [ ] Contrôler la lisibilité des affiches
- [ ] Contrôler le contraste final

## 7. Images

- [x] Neuf WebP actifs créés
- [x] Logo : 600 × 300
- [x] Deux affiches portrait : 900 × 1350
- [x] Six preuves : 1200 × 675
- [x] Poids actif total : 1 146 536 octets
- [x] Réduction par rapport aux PNG de travail : 93,1 %
- [x] `width` et `height` présents
- [x] `loading="lazy"` hors hero
- [x] Textes alternatifs présents
- [x] PNG originaux préservés
- [ ] Vérifier l’image Open Graph après publication

## 8. Confidentialité

- [x] Aucun token ou identifiant API
- [x] Aucun fichier `.env`
- [x] Aucun export candidat
- [x] Aucun téléphone ou email privé ajouté
- [x] Aucun fichier CSV, XLSX ou base privée
- [x] Lien WhatsApp utilisé : invitation communautaire publique validée
- [ ] Refaire le scan de secrets sur le périmètre indexé

## 9. Documentation

- [x] `docs/01-diagnostic-offre-et-portfolio.md`
- [x] `docs/02-architecture-contenu.md`
- [x] `docs/03-matrice-liens.md`
- [x] Rapport du Lot 2
- [x] Rapport d’optimisation
- [x] `docs/04-checklist-publication.md`
- [x] `README.md` mis à jour
- [x] `CHANGELOG.md` créé
- [x] `docs/05-rapport-final-production.md` produit

## 10. Liste blanche exacte du futur commit

### A. Fichiers actuellement prêts — 18 fichiers

```text
index.html
assets/css/style.css
assets/images/hero-automne-2026.webp
assets/images/logo-ln-ia.webp
assets/images/metiers-projets-portfolio-automne-2026.webp
assets/images/portfolio/phase-02-selection-preuves-portfolio-ln-ia.webp
assets/images/portfolio/phase-03-matrice-competences-preuves-paysage-ln-ia.webp
assets/images/portfolio/phase-04-progression-avant-apres-v2-ln-ia.webp
assets/images/portfolio/phase-05-portfolio-professionnel-ln-ia.webp
assets/images/portfolio/phase-07-checklist-controle-s25-s26-ln-ia.webp
assets/images/portfolio/phase-09c-publication-github-pages-ln-ia.webp
data/portfolio.json
docs/01-diagnostic-offre-et-portfolio.md
docs/02-architecture-contenu.md
docs/03-matrice-liens.md
docs/03-rapport-lot-02-structure-locale.md
docs/04-checklist-publication.md
docs/rapport-optimisation-images-et-matrice-liens-2026-08-26.md
```

### B. Fichiers obligatoires désormais préparés — 3 fichiers

```text
README.md
CHANGELOG.md
docs/05-rapport-final-production.md
```

Le futur commit complet contient désormais exactement 21 fichiers dans sa liste blanche.

## 11. Liste d’exclusion du futur commit

Ne pas indexer les fichiers suivants :

```text
assets/Affiche -invitation-challenge-100jours.png
assets/Affiche-metier-projet-porfolio.png
assets/images/affiche-invitation-challenge-100-jours-automne-2026.png
assets/images/affiche-metiers-projets-portfolio-ln-ia-automne-2026.png
assets/images/logo-ln-ia.png
assets/images/portfolio/phase-02-selection-preuves-portfolio-ln-ia.png
assets/images/portfolio/phase-03-matrice-competences-preuves-paysage-ln-ia.png
assets/images/portfolio/phase-04-progression-avant-apres-v2-ln-ia.png
assets/images/portfolio/phase-05-portfolio-professionnel-ln-ia.png
assets/images/portfolio/phase-07-checklist-controle-s25-s26-ln-ia.png
assets/images/portfolio/phase-09c-publication-github-pages-ln-ia.png
```

Ces onze PNG sont des sources ou copies intermédiaires. Ils restent conservés localement, mais les WebP suffisent à la page active.

Ne pas indexer non plus :

```text
C:\DEV\CHALLENGE-01-Juin-2026\tmp-affiche-automne-01.png
C:\DEV\CHALLENGE-01-Juin-2026\tmp-affiche-automne-02.png
C:\DEV\CHALLENGE-01-Juin-2026\09-ARCHIVES\versions\offre-formation-ia-avant-lot2-2026-08-26\
C:\DEV\CHALLENGE-01-Juin-2026\09-ARCHIVES\versions\offre-formation-ia-avant-correction-matrice-2026-08-26\
```

Ces éléments sont hors du dépôt `offre-formation-ia`.

## 12. Commande d’indexation future proposée — ne pas exécuter maintenant

L’indexation devra utiliser une liste explicite de fichiers et non `git add .`.

La commande définitive ne sera préparée qu’après la production des trois fichiers obligatoires restants et un nouveau contrôle Git.

## 13. Contrôles après commit futur

- [ ] Vérifier le hash et le message du commit
- [ ] Vérifier que les onze PNG exclus ne sont pas suivis
- [ ] Vérifier que le diff ne contient aucun secret
- [ ] Vérifier la taille du commit
- [ ] Vérifier que la branche `main` n’a pas été modifiée
- [ ] Attendre une autorisation distincte avant push

## 14. Contrôles après publication future

- [ ] Page d’offre Automne 2026 : HTTP 200
- [ ] CSS : HTTP 200
- [ ] Neuf WebP : HTTP 200
- [ ] Image Open Graph : HTTP 200
- [ ] Portfolio : HTTP 200
- [ ] My-Community-IA : HTTP 200
- [ ] Offre → portfolio conforme
- [ ] Portfolio → offre conforme
- [ ] Offre → My-Community-IA conforme
- [ ] Ancres du portfolio conformes
- [ ] Mobile public contrôlé
- [ ] HTTPS actif

## 15. Décision humaine requise

```text
[ ] Checklist locale validée
[ ] README autorisé
[ ] CHANGELOG autorisé
[ ] Rapport final autorisé
[ ] Liste blanche des 21 fichiers validée
[ ] Autorisation de git add
[ ] Autorisation de commit
[ ] Autorisation de push
[ ] Autorisation de publication
```

## Point d’arrêt

```text
CHECKLIST PRÉPARÉE
PÉRIMÈTRE DU FUTUR COMMIT DÉFINI
AUCUN GIT ADD
AUCUN COMMIT
AUCUN PUSH
PUBLICATION NON AUTORISÉE
```

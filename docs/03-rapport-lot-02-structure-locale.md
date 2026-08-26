# Rapport Lot 2 — Structure technique locale

**Projet :** Relance Automne 2026 du Challenge 100 Jours  
**Dossier :** `C:\DEV\CHALLENGE-01-Juin-2026\offre-formation-ia`  
**Branche :** `refonte-automne-2026`  
**Date :** 26 août 2026  
**Statut :** PRÊT À CONTRÔLER VISUELLEMENT

## Mission

Préparer les ressources normalisées, `data/portfolio.json` et un premier squelette HTML/CSS local, sans commit, push, fusion ou publication.

## Sauvegarde

La version précédente de `index.html` est conservée hors du dépôt :

```text
C:\DEV\CHALLENGE-01-Juin-2026\09-ARCHIVES\versions\offre-formation-ia-avant-lot2-2026-08-26\index.backup-2026-08-26.html
```

SHA-256 :

```text
39663E5A8CB4E876ACE0EC1D03CA290C48E7F7D4D5F052F70699672FDFFFDAA1
```

## Fichiers créés

- `assets/css/style.css` ;
- `assets/images/logo-ln-ia.png` ;
- `assets/images/affiche-invitation-challenge-100-jours-automne-2026.png` ;
- `assets/images/affiche-metiers-projets-portfolio-ln-ia-automne-2026.png` ;
- six images dans `assets/images/portfolio/` ;
- `data/portfolio.json` ;
- le présent rapport.

## Fichier modifié

- `index.html` : remplacement local contrôlé par le squelette Automne 2026.

Les deux affiches originales placées par le pilote restent intactes dans `assets/`.

## Contenu du squelette

- SEO et Open Graph Automne 2026 ;
- canonical vers la page publique existante ;
- lien d’évitement ;
- en-tête et navigation ;
- hero avec la nouvelle affiche ;
- date et données validées ;
- raison d’être des 100 jours ;
- publics regroupés ;
- format lundi/vendredi ;
- sept modules officiels ;
- méthode LN-IA ;
- livrables ;
- six preuves du portfolio ;
- capacités acquises ;
- accompagnement ;
- conditions neutres ;
- FAQ ;
- CTA final et pied de page.

## Contrôles réalisés

| Contrôle | Résultat |
|---|---|
| Serveur HTTP local | 200 |
| `h1` | 1 |
| `h2` | 12 |
| Sections HTML | 13, plus en-tête et pied de page |
| Preuves JSON | 6 |
| Références locales | 11 |
| Références locales cassées | 0 |
| Ancienne date du 1er juin | Absente |
| Ancien WhatsApp | Absent |
| Anciens liens Drive | Absents |
| Canonical | Présent |
| `og:url` | Présent |
| Lien d’évitement | Présent |
| `prefers-reduced-motion` | Présent |

## Données non validées

Aucune heure, remise, date limite ou URL d’entretien n’a été inventée. La page affiche :

```text
Les horaires précis, conditions et tarifs seront communiqués lors de l’échange préalable.
```

## Limites

- les PNG restent lourds et devront être optimisés dans un lot ultérieur ;
- `data/portfolio.json` est prêt mais le HTML reste statique et compréhensible sans JavaScript ;
- le navigateur intégré n’a pas pu démarrer à cause d’un défaut de l’environnement Windows ;
- le contrôle visuel à 360, 768 et 1440 px doit être réalisé par le pilote dans VS Code ;
- aucun validateur HTML externe n’a été appelé ;
- aucun fichier n’est indexé dans Git.

## Points à vérifier manuellement

- lisibilité exacte des textes présents dans les deux nouvelles affiches ;
- cadrage des affiches dans le hero et la section format ;
- ordre et densité des sections ;
- lisibilité du menu et des CTA ;
- affichage à 360, 768 et 1440 px ;
- cohérence finale des couleurs avec l’identité LN-IA.

## Prochaine action recommandée

Après validation visuelle du Lot 2 :

1. corriger les éventuels défauts observés ;
2. optimiser les images en conservant les originaux ;
3. produire `docs/03-matrice-liens.md` selon le prompt maître ;
4. préparer la checklist technique et éditoriale ;
5. attendre une autorisation séparée avant indexation ou commit.

## Point d’arrêt

```text
LOT 2 PRÉPARÉ LOCALEMENT — NON COMMITÉ — NON PUBLIÉ
```

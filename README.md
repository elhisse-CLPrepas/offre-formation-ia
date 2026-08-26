# Challenge 100 Jours — Offre Automne 2026

Page d’offre officielle du **Challenge 100 Jours — Formation IA pratique**, piloté par le Prof. Abderrahman El Hisse dans le cadre **LAB-NUMÉRIQUE-IA**.

> Apprendre en produisant. Produire avec méthode. Partager avec valeur. Avancer avec conscience.

## Statut

La refonte Automne 2026 est préparée localement sur la branche :

```text
refonte-automne-2026
```

La page publique affiche encore la version de juin 2026. La nouvelle version n’est ni commitée, ni poussée, ni publiée.

## Session Automne 2026

- démarrage : vendredi 25 septembre 2026 ;
- durée : environ 100 jours ;
- progression : environ 14 semaines ;
- volume : 28 séances ;
- rythme : deux séances par semaine ;
- lundi : comprendre et cadrer ;
- vendredi : pratiquer, produire et corriger ;
- modalité : 100 % en ligne ;
- capacité : 20 participants maximum ;
- validation : livrables, portfolio et soutenance.

## Liens

- Page d’offre : <https://elhisse-clprepas.github.io/offre-formation-ia/>
- Portfolio de preuves : <https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/>
- Preuves détaillées : <https://elhisse-clprepas.github.io/portfolio-formation-ia-ln-ia/preuves/>
- My-Community-IA : <https://chat.whatsapp.com/L900Zbek15j3tBtkJnpKaI>

## Architecture

```text
offre-formation-ia/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── images/
│       ├── hero-automne-2026.webp
│       ├── logo-ln-ia.webp
│       ├── metiers-projets-portfolio-automne-2026.webp
│       └── portfolio/
│           └── six preuves WebP
├── data/
│   └── portfolio.json
├── docs/
│   ├── 01-diagnostic-offre-et-portfolio.md
│   ├── 02-architecture-contenu.md
│   ├── 03-matrice-liens.md
│   ├── 04-checklist-publication.md
│   ├── 05-rapport-final-production.md
│   └── rapports des lots
├── CHANGELOG.md
└── README.md
```

## Page préparée

La page locale comprend :

1. un en-tête accessible ;
2. un hero Automne 2026 ;
3. l’explication des 100 jours ;
4. les publics et besoins ;
5. le format lundi/vendredi ;
6. le programme en sept modules ;
7. la méthode LN-IA ;
8. les livrables ;
9. six productions issues du portfolio ;
10. les capacités acquises ;
11. l’accompagnement et la validation ;
12. les conditions et la candidature ;
13. une FAQ ;
14. un CTA final ;
15. un pied de page.

## Programme en sept modules

1. Cadrage et prise de conscience ;
2. Prompts et dialogue avec l’IA ;
3. Documents professionnels ;
4. Communication et supports visuels ;
5. Pages web et présence numérique ;
6. Organisation, workflows, Git/GitHub et documentation ;
7. Portfolio final et validation.

## Test local

Depuis le dossier du dépôt :

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Puis ouvrir :

```text
http://127.0.0.1:8765/
```

Ce test local ne constitue pas une publication GitHub Pages.

Points à vérifier :

- largeur 360 px ;
- largeur 768 px ;
- largeur 1440 px ;
- navigation au clavier ;
- focus visible ;
- absence de défilement horizontal ;
- cadrage des affiches ;
- liens et ancres ;
- console sans erreur.

## Contrôles réalisés

- page locale HTTP 200 ;
- ressources locales cassées : 0 ;
- ancres internes cassées : 0 ;
- neuf WebP servis en HTTP 200 ;
- six preuves dans `data/portfolio.json` ;
- ancienne date, ancien WhatsApp et replays Drive absents ;
- aucun chemin Windows, `file://` ou `localhost` dans le HTML ;
- canonical et Open Graph présents ;
- navigation mobile maintenue visible ;
- réduction des images : 93,1 %.

## Variables à compléter

```text
HEURE_LANCEMENT = A_VALIDER
HEURE_SEANCE_VENDREDI = A_VALIDER
LIEN_ENTRETIEN_15_MINUTES = A_COMPLETER
CONTACT_WHATSAPP_DIRECT = A_COMPLETER
TARIF_PLEIN = A_VALIDER
REMISES_AUTOMNE_2026 = A_VALIDER
DATE_FIN_INSCRIPTIONS = A_VALIDER
```

Tant que ces valeurs ne sont pas confirmées :

- aucune heure précise n’est affichée ;
- aucun CTA entretien n’est présenté ;
- aucun ancien tarif ou remise n’est publié ;
- la page indique que les conditions et tarifs sont communiqués lors de l’échange préalable.

## Images

La page active utilise neuf fichiers WebP optimisés, pour un poids total d’environ 1,15 Mo. Les PNG sources sont conservés localement mais exclus du futur commit.

## Documentation

- `docs/01-diagnostic-offre-et-portfolio.md` : diagnostic initial ;
- `docs/02-architecture-contenu.md` : architecture éditoriale ;
- `docs/03-matrice-liens.md` : navigation et état des liens ;
- `docs/04-checklist-publication.md` : contrôles et liste blanche ;
- `docs/05-rapport-final-production.md` : synthèse de la production locale.

## Publication contrôlée

La publication doit rester progressive :

1. contrôler le diff local ;
2. indexer uniquement la liste blanche validée ;
3. contrôler l’index Git ;
4. créer un commit seulement après autorisation ;
5. pousser la branche seulement après autorisation ;
6. fusionner vers `main` seulement après validation ;
7. contrôler GitHub Pages et tous les liens publics.

Ne pas utiliser `git add .` : l’indexation future devra lister explicitement les fichiers autorisés.

## Gouvernance

```text
L’IA propose.
L’humain contrôle.
L’atelier organise.
Le livrable prouve.
```

Le pilote humain conserve la décision finale sur les textes, les tarifs, le commit, le push, la fusion et la publication.

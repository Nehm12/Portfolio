# Nehm Venture — Portfolio Personnel

Ce projet est le portfolio professionnel en ligne de **Nehm Hounga**, entrepreneur, consultant en stratégie d'entreprise, mentor pour les jeunes et conférencier.

Conçu comme une vitrine interactive, moderne et multilingue, ce site présente son parcours, ses entreprises (*ventures*), ses publications littéraires et ses programmes de formation.

---

## Caractéristiques principales

- **Architecture Statique Modulaire (DRY)** : Les composants répétés (en-tête, pied de page, métadonnées de la page) sont centralisés dans des fichiers de layout réutilisables.
- **Traduction Statique au Build (i18n & SEO)** : Les traductions sont externalisées dans des fichiers JSON et compilées statiquement dans des dossiers séparés `/fr/` et `/en/`. Cela élimine le scintillement de langue (FOUT) à l'affichage et permet une indexation optimale par les moteurs de recherche.
- **Redirection automatique** : Détection automatique de la langue préférée de l'utilisateur lors du chargement de la racine.
- **Mode Sombre / Clair** : Basculement fluide du thème visuel persistant grâce au `localStorage` (`theme.js`).
- **Design Responsive Premium** : Conçu sur mesure avec **Bootstrap 5** et **Vanilla CSS**, offrant une expérience utilisateur fluide et moderne sur mobile, tablette et desktop.
- **Animations Interactives** : Intégration de la bibliothèque **AOS (Animate On Scroll)** pour des transitions fluides à l'affichage et **Swiper** pour les composants interactifs (témoignages).

---

## Structure du projet

L'organisation des répertoires et fichiers clés du projet se présente désormais ainsi :

```text
├── assets/
│   ├── css/
│   │   └── main.css             # Styles CSS personnalisés et variables de thèmes
│   ├── img/                     # Images, logos, badges et certifications
│   ├── js/
│   │   ├── main.js              # Initialisation des composants (AOS, Swiper, Mobile Nav)
│   │   └── theme.js             # Logique de basculement du thème & redirection de langue
│   └── vendor/                  # Bibliothèques tierces (Bootstrap, Swiper, AOS)
├── locales/
│   ├── en.json                  # Traductions en anglais
│   └── fr.json                  # Traductions en français
├── src/
│   ├── layouts/                 # Fragments de code réutilisables (head, header, footer)
│   │   ├── head.html
│   │   ├── header.html
│   │   └── footer.html
│   └── pages/                   # Modèles de pages sources (HTML avec placeholders de traduction)
│       ├── books.html
│       ├── contact.html
│       ├── index.html
│       ├── portfolio.html
│       └── resume.html
├── en/                          # [Auto-généré] Site compilé en version anglaise
├── fr/                          # [Auto-généré] Site compilé en version française
├── index.html                   # Fichier de redirection de langue racine
├── build.js                     # Script Node.js de build pour compiler le site
└── package.json                 # Gestion des commandes de build
```

---

## Technologies utilisées

- **Langages** : HTML5, CSS3, JavaScript (ES6+).
- **Compilation** : Node.js (sans dépendance externe).
- **Framework CSS** : [Bootstrap v5.3](https://getbootstrap.com/).
- **Bibliothèques tierces** :
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - Animations au défilement.
  - [Swiper JS](https://swiperjs.com/) - Slider réactif pour les témoignages.
  - [Bootstrap Icons](https://icons.getbootstrap.com/) - Set d'icônes vectorielles.

---

## Commandes utiles pour le développement

Le projet utilise un outil de compilation statique interne très simple à exécuter localement.

1. **Installer les dépendances (facultatif)** :
   Le script de build utilise des bibliothèques standard Node.js et n'a pas besoin de `node_modules`.

2. **Lancer la compilation** :
   Chaque fois que vous modifiez un modèle dans `src/pages/` ou un texte de traduction dans `locales/`, compilez le projet :
   ```bash
   npm run build
   ```
   *(ou directement `node build.js`)*

3. **Exécuter localement** :
   Pour visualiser le rendu, lancez un serveur local léger (comme l'extension *Live Server* de VS Code ou `python -m http.server 8000` à la racine) et ouvrez l'adresse correspondante.

---

## Les Projets & Ventures présentés

### Entreprises co-fondées
- **Fluxy.** : Plateforme SaaS B2B de gestion financière et d'automatisation comptable pour les PME africaines.
- **Wa Xle Ahi** : Plateforme de mise en relation de services de proximité.
- **United Student Developers (USD)** : Communauté tech internationale gratuite pour former et connecter la jeunesse africaine.

### Publications & Livres
- *Le Scaling Playbook Africain* (Pré-commande 2025) : Guide de référence pour bâtir des entreprises résilientes sur les marchés complexes d'Afrique.
- *Leadership Digital 2.0* (2024) : Guide pratique pour maîtriser le télétravail, l'IA et le management d'équipes en Afrique.

---

## Licence

Ce projet est la propriété exclusive de **Nehm Venture**. Tous droits réservés.

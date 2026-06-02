# Nehm Venture — Portfolio Personnel

Ce projet est le portfolio professionnel en ligne de **Nehm Hounga**, entrepreneur, consultant en stratégie d'entreprise, mentor pour les jeunes et conférencier. 

Conçu comme une vitrine interactive, moderne et multilingue, ce site présente son parcours, ses entreprises (*ventures*), ses publications littéraires et ses programmes de formation.

---

## Caractéristiques principales

- **Système Multilingue (i18n)** : Traduction complète du site à la volée en **Français** et **Anglais** sans rechargement de page, gérée dynamiquement par JavaScript (`i18n.js`).
- **Mode Sombre / Clair** : Basculement fluide du thème visuel persistant grâce au `localStorage` (`theme.js`).
- **Design Responsive Premium** : Conçu sur mesure avec **Bootstrap 5** et **Vanilla CSS**, offrant une expérience utilisateur fluide et moderne sur mobile, tablette et desktop.
- **Animations Interactives** : Intégration de la bibliothèque **AOS (Animate On Scroll)** pour des transitions fluides à l'affichage et **Swiper** pour les composants interactifs (témoignages).

---

## Structure du projet

Voici l'organisation des répertoires et fichiers clés du projet :

```text
├── assets/
│   ├── css/
│   │   └── main.css             # Styles CSS personnalisés et variables de thèmes
│   ├── img/                     # Images, logos, badges et certifications
│   ├── js/
│   │   ├── i18n.js              # Gestionnaire de traduction client-side (FR/EN)
│   │   ├── main.js              # Initialisation des composants (AOS, Swiper, Mobile Nav)
│   │   └── theme.js             # Logique de basculement mode sombre / clair
│   └── vendor/                  # Bibliothèques tierces (Bootstrap, Swiper, AOS)
├── books.html                   # Page des publications (livres) et des formations
├── contact.html                 # Formulaire et informations de contact
├── index.html                   # Page d'accueil (Profil, Services, Impact, Témoignages)
├── portfolio.html               # Page détaillant les entreprises co-fondées et lancées
└── resume.html                  # Parcours professionnel, académique, projets et certifications
```

---

## Technologies utilisées

- **Langages** : HTML5, CSS3, JavaScript (ES6+).
- **Framework CSS** : [Bootstrap v5.3](https://getbootstrap.com/).
- **Bibliothèques tierces** :
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - Animations au défilement.
  - [Swiper JS](https://swiperjs.com/) - Slider réactif pour les témoignages.
  - [Bootstrap Icons](https://icons.getbootstrap.com/) - Set d'icônes vectorielles.

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

## Lancement en local

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/Nehm12/Portfolio.git
   cd Portfolio
   ```

2. **Exécuter localement** :
   Comme le projet est purement statique (HTML/CSS/JS), vous pouvez l'ouvrir directement dans votre navigateur ou utiliser un serveur local léger (comme *Live Server* sur VS Code ou `python -m http.server 8000`).

---

## Licence

Ce projet est la propriété exclusive de **Nehm Venture**. Tous droits réservés.

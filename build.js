const fs = require('fs');
const path = require('path');

const workspaceDir = __dirname;
const srcDir = path.join(workspaceDir, 'src');
const pagesDir = path.join(srcDir, 'pages');
const layoutsDir = path.join(srcDir, 'layouts');
const localesDir = path.join(workspaceDir, 'locales');

// Page-specific titles and descriptions configuration
const pagesConfig = {
  'index.html': {
    titleKey: 'page_title_home',
    descFr: "Portfolio de Nehm Hounga - Entrepreneur, Fondateur, Auteur et Coach Business. Bâtir le futur et propulser l'excellence.",
    descEn: "Portfolio of Nehm Hounga - Entrepreneur, Founder, Author, and Business Coach. Building the future and driving excellence."
  },
  'portfolio.html': {
    titleKey: 'page_title_portfolio',
    descFr: "Nos entreprises - Startups et ventures co-fondées et lancées par Nehm Venture à travers l'Afrique.",
    descEn: "Our ventures - Startups and strategic ventures co-founded and scaled by Nehm Venture across Africa."
  },
  'books.html': {
    titleKey: 'page_title_books',
    descFr: "Livres, publications et programmes de formation de Nehm Hounga - Leadership, productivité, finances.",
    descEn: "Books, publications and training programs by Nehm Hounga - Leadership, productivity, personal finance."
  },
  'resume.html': {
    titleKey: 'page_title_resume',
    descFr: "Parcours et certifications de Nehm Hounga - Harvard Innovation Labs, Google, Amazon AWS, JCI.",
    descEn: "Track record and certifications of Nehm Hounga - Harvard Innovation Labs, Google, Amazon AWS, JCI."
  },
  'contact.html': {
    titleKey: 'page_title_contact',
    descFr: "Contactez Nehm Hounga - Discutons de votre vision, de coaching, conférence ou partenariat.",
    descEn: "Connect with Nehm Hounga - Let's talk about coaching, training, speaking, or partnerships."
  }
};

// Main build execution
function build() {
  console.log('Starting static build process...');

  // 1. Read layouts
  const headTemplate = fs.readFileSync(path.join(layoutsDir, 'head.html'), 'utf8');
  const headerTemplate = fs.readFileSync(path.join(layoutsDir, 'header.html'), 'utf8');
  const footerTemplate = fs.readFileSync(path.join(layoutsDir, 'footer.html'), 'utf8');

  // 2. Read translation files
  const locales = {
    fr: JSON.parse(fs.readFileSync(path.join(localesDir, 'fr.json'), 'utf8')),
    en: JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8'))
  };

  const languages = ['fr', 'en'];
  const pages = fs.readdirSync(pagesDir).filter(file => file.endsWith('.html'));

  languages.forEach(lang => {
    const langDir = path.join(workspaceDir, lang);
    if (!fs.existsSync(langDir)) {
      fs.mkdirSync(langDir, { recursive: true });
    }

    const dict = locales[lang];

    pages.forEach(page => {
      const pageTemplatePath = path.join(pagesDir, page);
      let content = fs.readFileSync(pageTemplatePath, 'utf8');

      // Setup page configuration
      const config = pagesConfig[page] || { titleKey: 'page_title_home', descFr: '', descEn: '' };
      const title = dict[config.titleKey] || 'Nehm Venture';
      const description = lang === 'fr' ? config.descFr : config.descEn;

      // Compile Head layout
      let headContent = headTemplate
        .replace(/\{\{page_title\}\}/g, title)
        .replace(/\{\{page_description\}\}/g, description)
        .replace(/\{\{extra_head\}\}/g, '');

      // Compile Header layout with active navigation state
      let headerContent = headerTemplate
        .replace(/\{\{nav_active_about\}\}/g, page === 'index.html' ? 'active' : '')
        .replace(/\{\{nav_active_portfolio\}\}/g, page === 'portfolio.html' ? 'active' : '')
        .replace(/\{\{nav_active_books\}\}/g, page === 'books.html' ? 'active' : '')
        .replace(/\{\{nav_active_resume\}\}/g, page === 'resume.html' ? 'active' : '')
        .replace(/\{\{nav_active_contact\}\}/g, page === 'contact.html' ? 'active' : '');

      // Compile Footer layout
      let footerContent = footerTemplate;

      // Inject Layouts
      content = content
        .replace('<!-- include head -->', headContent)
        .replace('<!-- include header -->', headerContent)
        .replace('<!-- include footer -->', footerContent);

      // Interpolate general translations
      content = content.replace(/\{\{(\w+)\}\}/g, (match, key) => {
        if (key === 'lang') return lang;
        if (dict[key] !== undefined) return dict[key];
        return match; // return original tag if not found
      });

      // Write compiled page to its language directory
      fs.writeFileSync(path.join(langDir, page), content, 'utf8');
      console.log(`Compiled: ${lang}/${page}`);
    });
  });

  // 3. Generate root redirect page
  const rootRedirect = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Nehm Venture</title>
  <script>
    (function() {
      var lang = localStorage.getItem('site_lang');
      if (!lang) {
        var userLang = navigator.language || navigator.userLanguage;
        lang = userLang && userLang.toLowerCase().startsWith('fr') ? 'fr' : 'en';
      }
      window.location.href = './' + lang + '/index.html';
    })();
  </script>
</head>
<body>
  <p style="font-family: system-ui, sans-serif; text-align: center; margin-top: 100px; color: #4a4a4a;">
    Redirecting to / Redirection vers 
    <a href="./fr/index.html" style="color: #0077b6; font-weight: bold;">Français</a> / 
    <a href="./en/index.html" style="color: #0077b6; font-weight: bold;">English</a>...
  </p>
</body>
</html>`;

  fs.writeFileSync(path.join(workspaceDir, 'index.html'), rootRedirect, 'utf8');
  console.log('Root index.html redirect generated.');
  console.log('Static build completed successfully!');
}

build();

#!/bin/bash

echo "Mise à jour des dépendances et correction des problèmes de mise en page..."

# Installation des dépendances mises à jour pour Tailwind v4
npm install tailwindcss@latest postcss@latest autoprefixer@latest

# Vérification du fichier postcss.config.js
if [ ! -f "postcss.config.js" ]; then
    echo "Création du fichier postcss.config.js..."
    cat > postcss.config.js << EOF
module.exports = {
  plugins: {
    'tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
EOF
fi

# Redémarrage du serveur de développement
echo "Redémarrage du serveur de développement..."
npm run dev

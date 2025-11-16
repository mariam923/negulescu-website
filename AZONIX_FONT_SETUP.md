# 🔤 Installation de la Police Azonix

Votre site est maintenant configuré pour utiliser **Azonix** comme police principale pour les titres !

## 📥 Télécharger Azonix

### **Option 1 : Téléchargement Direct (Recommandé)**

1. **Allez sur** : https://www.dafont.com/azonix.font
2. Cliquez sur **"Download"** (bouton bleu)
3. Extrayez le fichier ZIP téléchargé
4. Vous obtiendrez un fichier `Azonix.otf` ou `Azonix.ttf`

### **Option 2 : Autres Sources**

- https://www.fontsquirrel.com/fonts/azonix
- https://fonts.google.com (cherchez "Azonix" - alternative: Orbitron)

---

## 📂 Installation des Fichiers de Police

### **Étape 1 : Placer les Fichiers**

Copiez les fichiers de police dans le dossier :
```
negulescu-website/public/fonts/
```

Vous aurez besoin de ces formats (au moins un) :
- ✅ `Azonix.woff2` (meilleure performance - recommandé)
- ✅ `Azonix.woff` (bonne compatibilité)
- ✅ `Azonix.ttf` (format de base)

### **Étape 2 : Convertir la Police (Si nécessaire)**

Si vous n'avez que `.otf` ou `.ttf`, convertissez-le :

1. Allez sur : https://transfonter.org/
2. Uploadez votre fichier `Azonix.otf` ou `Azonix.ttf`
3. Cochez les formats : **WOFF2** et **WOFF**
4. Cliquez sur **"Convert"**
5. Téléchargez et extrayez
6. Copiez `Azonix.woff2`, `Azonix.woff`, et `Azonix.ttf` dans `/public/fonts/`

---

## ✅ Structure Finale

Votre dossier devrait ressembler à ceci :

```
negulescu-website/
├── public/
│   └── fonts/
│       ├── Azonix.woff2  ← Format optimal
│       ├── Azonix.woff   ← Compatibilité
│       └── Azonix.ttf    ← Fallback
└── ...
```

---

## 🎨 Utilisation de Azonix

### **Automatique (Déjà configuré !)**

Tous les **titres** (h1, h2, h3, h4, h5, h6) utilisent maintenant **Azonix** :

```tsx
<h1>Negulescu</h1>  // ← Utilise Azonix automatiquement
<h2>Services</h2>   // ← Utilise Azonix automatiquement
```

### **Utilisation Manuelle**

Si vous voulez appliquer Azonix à d'autres éléments :

```tsx
<p className="font-heading">Texte avec Azonix</p>
<span className="font-azonix">Texte avec Azonix</span>
```

### **Corps du Texte**

Le texte normal continue d'utiliser **Inter** pour une meilleure lisibilité :

```tsx
<p>Ce texte utilise Inter</p>  // ← Police par défaut
```

---

## 🚀 Déployer les Changements

Une fois les fichiers de police ajoutés :

```bash
# Ajouter les fichiers
git add public/fonts/

# Committer
git commit -m "Add Azonix font files"

# Pousser sur GitHub
git push origin main
```

Netlify mettra à jour automatiquement le site avec la nouvelle police ! 🎉

---

## 🎯 Configuration Actuelle

### **✅ Déjà Configuré**

- ✅ `@font-face` dans `app/globals.css`
- ✅ Police Azonix pour les titres dans `tailwind.config.ts`
- ✅ Classe utility `font-azonix` disponible
- ✅ Dossier `/public/fonts/` créé

### **⏳ À Faire**

- ☐ Télécharger les fichiers de police Azonix
- ☐ Convertir au format WOFF2/WOFF si nécessaire
- ☐ Placer dans `/public/fonts/`
- ☐ Committer et pousser sur GitHub

---

## 🔍 Vérification

Pour tester que la police fonctionne :

1. Ouvrez le site dans votre navigateur
2. Faites **F12** → **Console**
3. Tapez :
```javascript
getComputedStyle(document.querySelector('h1')).fontFamily
```
4. Vous devriez voir : `"Azonix", ...`

---

## ⚠️ Note Importante

Sans les fichiers de police dans `/public/fonts/`, le site utilisera les polices de secours (system-ui, sans-serif). Une fois que vous ajoutez les fichiers, Azonix s'affichera automatiquement ! 

---

## 🆘 Problèmes Courants

**Q : La police ne s'affiche pas**
- Vérifiez que les fichiers sont dans `/public/fonts/`
- Vérifiez l'orthographe exacte des noms de fichiers
- Videz le cache du navigateur (Ctrl+Shift+R)

**Q : Où trouver Azonix gratuitement ?**
- DaFont.com a une version gratuite
- Ou utilisez une alternative similaire : Orbitron, Exo 2

**Q : La police est trop "agressive" ?**
- C'est normal pour Azonix - c'est une police moderne/futuriste
- Elle est appliquée uniquement aux titres
- Le texte normal garde Inter pour la lisibilité

---

## 📞 Support

Si vous avez besoin d'aide pour installer les fichiers de police, faites-moi savoir !

# 🔍 Configuration Google pour Negulescu

## ✅ Fichiers SEO Configurés

Votre site est déjà optimisé pour Google avec :

1. **✅ Vérification Google** : Fichier `google8c3ee44c402fa7b9.html` dans `/public`
2. **✅ Sitemap** : `/app/sitemap.ts` → génère automatiquement `/sitemap.xml`
3. **✅ Robots.txt** : `/app/robots.ts` → génère automatiquement `/robots.txt`
4. **✅ Meta balise** : Vérification Google ajoutée dans `<head>`
5. **✅ Meta descriptions** : SEO optimisé sur toutes les pages
6. **✅ Open Graph** : Images et métadonnées pour réseaux sociaux

---

## 📋 Étapes pour Mettre votre Site sur Google

### **1. Déployer le Site**

Avant tout, déployez votre site sur Netlify (voir instructions précédentes).

Votre site sera accessible à une URL comme :
- `https://negulescu.netlify.app` (temporaire)
- `https://negulescu.ro` (domaine personnalisé)

---

### **2. Google Search Console**

#### **Étape A : Créer un Compte**
1. Allez sur : https://search.google.com/search-console
2. Connectez-vous avec votre compte Google
3. Cliquez sur **"Ajouter une propriété"**

#### **Étape B : Vérifier votre Site**
1. Choisissez **"Préfixe d'URL"**
2. Entrez votre URL : `https://negulescu.ro`
3. Méthode de vérification : **2 options**

**Option 1 : Fichier HTML** (Recommandé)
- ✅ Fichier déjà dans `/public/google8c3ee44c402fa7b9.html`
- Après déploiement, accessible à : `https://negulescu.ro/google8c3ee44c402fa7b9.html`
- Cliquez sur "Vérifier"

**Option 2 : Balise Meta**
- ✅ Déjà ajoutée dans le code
- Code : `8c3ee44c402fa7b9`
- Cliquez sur "Vérifier"

#### **Étape C : Soumettre le Sitemap**
1. Dans Search Console → **Sitemaps** (menu gauche)
2. Entrez : `sitemap.xml`
3. Cliquez sur **"Envoyer"**

Votre sitemap sera : `https://negulescu.ro/sitemap.xml`

---

### **3. Google Business Profile** (Recommandé)

Pour apparaître dans Google Maps et recherches locales :

1. Allez sur : https://business.google.com
2. Créez un profil pour "Negulescu"
3. Ajoutez :
   - 📍 Adresse
   - 📞 Téléphone : +40 763 564 072
   - 🌐 Site web : https://negulescu.ro
   - 📸 Photos de vos travaux
   - ⏰ Heures d'ouverture
4. Vérifiez votre entreprise (code par courrier ou téléphone)

---

### **4. Indexation Rapide**

#### **Option A : Inspection d'URL**
Dans Google Search Console :
1. Utilisez l'outil **"Inspection d'URL"** en haut
2. Entrez votre URL : `https://negulescu.ro`
3. Cliquez sur **"Demander une indexation"**
4. Répétez pour chaque page importante :
   - `https://negulescu.ro/services`
   - `https://negulescu.ro/portfolio`
   - `https://negulescu.ro/about`
   - `https://negulescu.ro/contact`

#### **Option B : Soumettre à Google**
1. Allez sur : https://www.google.com/ping?sitemap=https://negulescu.ro/sitemap.xml
2. Cela notifie Google de votre nouveau sitemap

---

### **5. Optimisation Continue**

#### **Mots-clés Importants**
Votre site est optimisé pour :
- "instalare uși sticlă România"
- "ferestre sticlă premium"
- "vitraj profesional"
- "instalare sticlă București"

#### **Surveiller les Performances**
Dans Google Search Console :
- **Performances** : Voir vos clics et impressions
- **Couverture** : Vérifier l'indexation des pages
- **Améliorations** : Optimisations suggérées

---

## ⏱️ Délais d'Indexation

- **Vérification** : Immédiate
- **Première indexation** : 2-7 jours
- **Indexation complète** : 1-4 semaines
- **Apparition dans recherches** : 2-8 semaines

---

## 📊 Checklist Post-Déploiement

```
☐ Site déployé sur Netlify
☐ Domaine configuré (negulescu.ro)
☐ Google Search Console vérifié
☐ Sitemap soumis
☐ Pages principales indexées
☐ Google Business Profile créé
☐ Analytics installé (optionnel)
```

---

## 🆘 En Cas de Problème

Si la vérification échoue :
1. Vérifiez que le site est en ligne
2. Vérifiez que `/google8c3ee44c402fa7b9.html` est accessible
3. Attendez 24h après le déploiement
4. Réessayez la vérification

---

## 📞 Support

Pour toute question technique :
- Documentation Next.js SEO : https://nextjs.org/learn/seo
- Google Search Console Help : https://support.google.com/webmasters

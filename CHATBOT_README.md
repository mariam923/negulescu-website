# 🤖 Chatbot Negulescu - Documentation

## Vue d'ensemble

Le chatbot intelligent Negulescu est un assistant virtuel professionnel qui peut répondre aux questions des visiteurs concernant votre entreprise de vitrage.

## Fonctionnalités

### ✨ Intelligence Conversationnelle
- **Base de connaissances complète** couvrant tous les aspects du site
- **Reconnaissance de mots-clés** en roumain
- **Réponses contextuelles** adaptées aux questions
- **Salutations naturelles** et réponses amicales

### 💬 Interface Moderne
- **Design professionnel** avec gradient bleu
- **Animations fluides** avec Framer Motion
- **Widget flottant** en bas à droite
- **Indicateur en ligne** (point vert animé)
- **Boutons de réponse rapide** pour démarrer la conversation

### 📱 Responsive
- **Optimisé mobile** avec largeur adaptative
- **Scroll automatique** vers le dernier message
- **Support tactile** complet

## Base de Connaissances

Le chatbot peut répondre aux questions sur :

### 🛠️ Services
- Types de services offerts
- Installations de portes et fenêtres
- Design personnalisé
- Maintenance et réparations

### 💰 Prix et Devis
- Informations sur les tarifs
- Facteurs affectant les coûts
- Demande de devis gratuit

### 📞 Contact
- Numéro de téléphone : +40 763 564 072
- Email : contact@negulescu.ro
- Informations sur Gheorghe Negulescu

### 🏢 À Propos
- Expérience : 10+ ans
- Projets complétés : 31+
- Taux de satisfaction : 100%
- Clients satisfaits : 25+

### 🏆 Portfolio
- Projets résidentiels et commerciaux
- Exemples de travaux réalisés
- Galerie de projets

### 📋 Processus
- Étapes du projet
- Consultation gratuite
- Installation professionnelle
- Support post-installation

### ⭐ Qualité
- Matériaux premium
- Garantie complète
- Standards de qualité
- Principes : Precizie, Calitate, Fiabilitate, Inovație

## Personnalisation

### Ajouter de nouvelles questions/réponses

Modifiez le fichier `components/chatbot.tsx`, section `knowledgeBase` :

```typescript
const knowledgeBase = {
  nouveauSujet: {
    keywords: ['mot-clé1', 'mot-clé2', 'mot-clé3'],
    response: `Votre réponse ici avec formatage Markdown`
  }
}
```

### Modifier les réponses rapides

Changez le tableau `quickReplies` :

```typescript
const quickReplies = [
  'Nouvelle question 1?',
  'Nouvelle question 2?',
  'Nouvelle question 3?',
  'Nouvelle question 4?'
]
```

### Changer les couleurs

Le chatbot utilise le gradient bleu du site :
- Primaire : `#3B82F6`
- Secondaire : `#1D4ED8`

Modifiez les classes Tailwind dans le composant pour personnaliser.

## Améliorations Futures Possibles

1. **Intégration API** : Connecter à un service de chat en direct
2. **Analytics** : Suivre les questions les plus fréquentes
3. **Multi-langue** : Support anglais/français en plus du roumain
4. **Email auto** : Envoyer les conversations par email
5. **Feedback** : Permettre aux utilisateurs de noter les réponses
6. **Historique** : Sauvegarder les conversations localement

## Support

Pour toute question technique concernant le chatbot, contactez votre développeur.

---

**Développé avec ❤️ pour Negulescu**

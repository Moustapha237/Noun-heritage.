# Noun Héritage — Boutique d'art bamoun

Site e-commerce pour la vente de statuettes, masques, trônes, bijoux et vêtements
traditionnels bamoun (Foumban, Cameroun).

## Installation

Il faut Node.js 18+ installé sur ta machine.

```bash
npm install
npm run dev
```

Le site s'ouvre sur `http://localhost:5173`.

## Déploiement en ligne (rapide)

Le plus simple : **Vercel** ou **Netlify**, gratuits pour ce type de site.

### Avec Vercel
1. Crée un compte sur vercel.com
2. Installe l'outil : `npm install -g vercel`
3. Dans le dossier du projet : `vercel`
4. Suis les instructions à l'écran — ton site est en ligne en 2 minutes.

### Avec Netlify
1. Crée un compte sur netlify.com
2. Construis le site : `npm run build`
3. Glisse-dépose le dossier `dist/` généré sur l'interface Netlify (drag & drop).

Tu peux aussi connecter le projet à un dépôt GitHub pour que chaque mise à jour
se déploie automatiquement.

## Mettre à jour le catalogue (au quotidien)

Va sur `/admin` (ex: `https://tonsite.com/admin`).

- Mot de passe par défaut : `foumban2026` — **à changer** avant la mise en ligne
  (fichier `src/context/AdminAuthContext.jsx`, constante `ADMIN_PASSWORD`).
- Depuis ce panneau tu peux ajouter, modifier ou supprimer un produit
  (nom, catégorie, prix, description, matière, dimensions, photo).
- Les modifications sont enregistrées dans le navigateur (localStorage).
  ⚠️ Pour que tous les visiteurs voient le même catalogue, il faudra à terme
  brancher une vraie base de données (voir section suivante).

## Étapes suivantes recommandées (pas encore branchées)

Ce site est livré comme une base complète et fonctionnelle, mais certains points
sont volontairement laissés en attente le temps que tu aies les comptes nécessaires :

1. **Paiement carte bancaire** : brancher Stripe (ou équivalent) à la place du
   formulaire de démonstration dans `src/pages/Checkout.jsx`.
2. **Paiement Bitcoin** : brancher Coinbase Commerce ou BTCPay Server.
3. **Base de données produits partagée** : actuellement chaque visiteur a son
   propre catalogue stocké localement. Pour un vrai site multi-utilisateurs,
   il faut une base de données (Supabase, Firebase, ou une API dédiée) reliée
   au panneau admin.
4. **Contact de l'intermédiaire** : à modifier dans `src/data/intermediary.js`.
5. **Photos réelles des produits** : à ajouter via le champ "URL de la photo"
   dans le panneau admin, une fois tes photos hébergées (ex: sur un service
   d'hébergement d'images ou ton propre serveur).

## Structure du projet

```
src/
  admin/       → panneau d'administration (ajout/édition produits)
  components/  → éléments réutilisables (navbar, panier, cartes produit…)
  context/      → état global (panier, devise, catalogue, connexion admin)
  data/        → catalogue de produits et contact de l'intermédiaire
  pages/       → les pages du site (accueil, boutique, fiche produit…)
```

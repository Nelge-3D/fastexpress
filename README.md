# Fast Express — Site vitrine

Site web officiel de **Fast Express**, entreprise de livraison et déménagement à Libreville, Gabon.

## Aperçu

Fast Express est un service logistique proposant la livraison de colis, le déménagement et des solutions aux entreprises dans toute la zone urbaine de Libreville. Ce dépôt contient le code source du site vitrine.

## Stack technique

- **Framework** — [Next.js 15](https://nextjs.org/) (App Router)
- **React** — 19.1
- **Styles** — [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Animations** — [Motion](https://motion.dev/) (Framer Motion v12)
- **Icônes** — [Lucide React](https://lucide.dev/)
- **Analytics** — [Vercel Analytics](https://vercel.com/analytics)
- **Langage** — TypeScript (strict)
- **Package manager** — pnpm

## Pages

| Route | Description |
|---|---|
| `/` | Landing page (Hero, Services, Témoignages, Contact) |
| `/about` | Présentation de l'équipe et de l'entreprise |
| `/business` | Solutions logistiques pour les entreprises |

## Lancer le projet en local

**Prérequis** : Node.js 18+ et pnpm installés.

```bash
# Cloner le dépôt
git clone https://github.com/<ton-username>/fastexpress.git
cd fastexpress

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Scripts disponibles

```bash
pnpm dev      # Serveur de développement
pnpm build    # Build de production
pnpm start    # Démarrer le build de production
pnpm lint     # Linter ESLint
```

## Structure du projet

```
src/
├── app/
│   ├── page.tsx          # Page d'accueil
│   ├── layout.tsx        # Layout global (Navbar, Footer, Analytics)
│   ├── about/            # Page À propos
│   └── business/         # Page Solutions entreprises
├── components/
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Parteners.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Whatsappbutton.tsx
│   └── ui/               # Composants shadcn/ui
└── lib/
    └── utils.ts
```

## Déploiement

Le site est déployé sur [Vercel](https://vercel.com). Chaque push sur la branche `main` déclenche un déploiement automatique.

---

*Fast Express — Libreville, Gabon*

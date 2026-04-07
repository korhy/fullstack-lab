# fullstack-lab

> Une plateforme pédagogique construite en public avec **Symfony + React**.
> Chaque fonctionnalité est documentée, chaque décision est expliquée.

![CI](https://github.com/korhy/fullstack-lab/actions/workflows/ci.yml/badge.svg)

---

## À propos

**fullstack-lab** est un projet construit en public pour des développeurs confirmés souhaitant comprendre comment articuler Symfony (API Platform) et React dans un projet réel.

Le site est lui-même son propre démonstrateur : il est construit avec la stack qu'il enseigne.

## Stack

| Côté | Technologies |
|------|-------------|
| Backend | PHP 8.4, Symfony 8, API Platform 4, PostgreSQL 16 |
| Frontend | React 19, TypeScript, Vite, TanStack Query, Tailwind CSS v4 |
| Infra | Docker, Traefik, GitHub Actions |

## Prérequis

- [Docker](https://www.docker.com/) + Docker Compose
- [Node.js](https://nodejs.org/) 20+
- [Composer](https://getcomposer.org/) 2

## Lancer le projet en local

```bash
git clone https://github.com/korhy/fullstack-lab.git
cd fullstack-lab
cp .env.example .env
docker compose up -d
```

```bash
cd frontend
npm install
npm run dev
```

| Service | URL |
|---------|-----|
| Frontend | http://localhost:5173 |
| API | http://localhost:8000/api |

## Commandes utiles

```bash
# Backend
cd backend
composer lint        # PHP-CS-Fixer + PHPStan
composer fix:cs      # Corriger le style automatiquement

# Frontend
cd frontend
npm run lint         # ESLint + Prettier
npm run format       # Corriger le formatage automatiquement
```

## Documentation

- [Roadmap](docs/project/ROADMAP.md)
- [Décisions d'architecture](docs/architecture/DECISIONS.md)
- [Journal de bord](docs/journal/)

---

*Construit par Clément.*

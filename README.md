# fullstack-lab

> Une plateforme pédagogique construite en public avec **Symfony + React**.
> Chaque fonctionnalité est documentée, chaque décision est expliquée.

---

## 🎯 À propos

**fullstack-lab** est un projet construit en public pour des développeurs confirmés souhaitant comprendre comment articuler Symfony (API Platform) et React dans un projet réel.

Le site est lui-même son propre démonstrateur : il est construit avec la stack qu'il enseigne.

## 📚 Contenu

- **Journal de bord** : récits de construction au quotidien
- **Tutoriels** : guides structurés par fonctionnalité

## 🏗️ Stack

| Côté | Technologies |
|------|-------------|
| Backend | PHP 8.3, Symfony 7, API Platform 3, PostgreSQL |
| Frontend | React 19, TypeScript, Vite, TanStack Query, Tailwind CSS v4 |
| Infra | Docker, Traefik, GitHub Actions |

## 🚀 Lancer le projet en local

```bash
git clone https://github.com/<user>/fullstack-lab.git
cd fullstack-lab
cp .env.example .env
docker compose up -d
```

Frontend : http://localhost:5173
API : http://localhost:8000/api

## 📖 Documentation

- [Roadmap](docs/project/ROADMAP.md)
- [Décisions d'architecture](docs/architecture/DECISIONS.md)
- [Journal de bord](docs/journal/)

## 🤝 Contribution

Ce projet est en cours de construction. Les issues sont ouvertes pour suivre l'avancement.

---

*Construit par Clément.*

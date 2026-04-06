# Journal des décisions d'architecture (ADR)

> Chaque décision technique structurante est consignée ici avec son contexte et ses alternatives rejetées.
> Format inspiré de [Architecture Decision Records](https://adr.github.io/).

---

## ADR-001 — Stack : Symfony + API Platform + React

**Date** : 2026-04-06
**Statut** : Accepté

### Contexte
Le projet a pour vocation d'enseigner une stack full-stack moderne à des développeurs confirmés. La stack choisie doit être représentative du marché professionnel français.

### Décision
- **Backend** : Symfony 7 + API Platform 3 (REST + JSON-LD)
- **Frontend** : React 19 + TypeScript + Vite

### Alternatives considérées
| Alternative | Raison du rejet |
|-------------|----------------|
| Laravel + Inertia | Moins représentatif du marché PHP enterprise |
| Next.js full-stack | Éloigne de l'objectif d'apprendre la séparation API/Frontend |
| NestJS + React | Sortirait du scope PHP/Symfony |

### Conséquences
- Deux applications distinctes (monorepo)
- Authentification par JWT (pas de session)
- CORS à gérer explicitement

---

## ADR-002 — Monorepo vs multi-repos

**Date** : 2026-04-06
**Statut** : Accepté

### Contexte
Faut-il un repo par application (backend, frontend) ou un monorepo ?

### Décision
**Monorepo** avec la structure suivante :
```
fullstack-lab/
├── backend/    # Symfony
├── frontend/   # React
├── docker/     # Configuration Docker
└── docs/       # Documentation
```

### Raison
- Cohérence des issues GitHub (une seule source de vérité)
- Facilite la CI/CD croisée
- Plus simple pour un projet pédagogique (un seul `git clone`)

---

## ADR-003 — Base de données : PostgreSQL

**Date** : 2026-04-06
**Statut** : Accepté

### Décision
PostgreSQL comme base de données principale.

### Raison
- Standard professionnel
- Meilleur support des types avancés (JSON, UUID, full-text)
- Intégration native avec Doctrine

---

## ADR-004 — Déploiement : Docker + Traefik sur VPS

**Date** : 2026-04-06
**Statut** : Accepté

### Décision
- Docker Compose en prod
- Traefik comme reverse proxy (HTTPS automatique via Let's Encrypt)
- Déploiement déclenché par push sur `main` via GitHub Actions

### Alternatives considérées
| Alternative | Raison du rejet |
|-------------|----------------|
| Coolify | Ajoute une couche d'abstraction qui masque les concepts |
| Railway / Render | Coût et perte de contrôle |
| K8s | Overkill pour ce projet |

---

## ADR-005 — Version PHP : 8.4

**Date** : 2026-04-06
**Statut** : Accepté

### Contexte
Symfony 7.x < 7.4 sont affectés par une advisory de sécurité (`PKSA-365x-2zjk-pt47`) sur `symfony/http-foundation` bloquant l'installation via Composer. Symfony 8.0 requiert PHP 8.4.

### Décision
Passer à **PHP 8.4** + **Symfony 8.0** plutôt que de contourner la politique de sécurité de Composer.

### Alternatives considérées
| Alternative | Raison du rejet |
|-------------|----------------|
| Symfony 7.1 / 7.2 + ignore advisory | Mauvaise pratique — contourner une alerte sécurité dans un projet pédagogique |
| Symfony 6.4 LTS | Moins représentatif des versions actuelles |

---

*Ajouter les nouvelles décisions au fil du projet.*

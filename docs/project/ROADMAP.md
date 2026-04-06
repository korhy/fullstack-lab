# Roadmap — fullstack-lab

> Document vivant. Mis à jour à chaque fin de phase.

---

## Vision

Construire en public une plateforme pédagogique full-stack (Symfony + React) qui démontre par l'exemple les bonnes pratiques d'un projet professionnel réel : architecture, tests, CI/CD, documentation, gestion de projet.

---

## Phase 0 — Fondations (Semaine 1)
**Objectif** : Le projet existe, tourne en local, est versionné et documenté.

- [ ] Initialisation du repo GitHub (`fullstack-lab`)
- [ ] Structure Docker Compose (PHP, PostgreSQL, Redis, Nginx)
- [ ] Squelette Symfony 7 + API Platform
- [ ] Squelette React + Vite + TypeScript
- [ ] Configuration ESLint / PHP-CS-Fixer / PHPStan
- [ ] Pipeline CI GitHub Actions (lint + tests)
- [ ] Premier article de journal de bord : "Pourquoi cette stack ?"
- [ ] README.md complet

**Livrable** : `http://localhost` affiche la page d'accueil React avec ping vers l'API Symfony.

---

## Phase 1 — Authentification (Semaine 2)
**Objectif** : Un utilisateur peut s'inscrire, se connecter, accéder à son profil.

- [ ] Entité `User` + migrations Doctrine
- [ ] Endpoint d'inscription (`POST /api/users`)
- [ ] Authentification JWT (LexikJWT)
- [ ] Refresh token
- [ ] Formulaire de login React
- [ ] Store auth (Zustand ou Context)
- [ ] Route protégée côté React
- [ ] Tests PHPUnit (UserController, AuthService)
- [ ] Tutoriel : "Authentification JWT avec Symfony + React"

---

## Phase 2 — Journal de bord public (Semaine 3)
**Objectif** : Les visiteurs peuvent lire le journal de bord du projet.

- [ ] Entité `JournalEntry` (titre, contenu Markdown, date, auteur)
- [ ] Endpoint REST (`GET /api/journal-entries`)
- [ ] Page liste + page détail en React
- [ ] Rendu Markdown côté React (react-markdown)
- [ ] Pagination API Platform
- [ ] Tutoriel : "Créer une API REST avec API Platform"

---

## Phase 3 — Tutoriels structurés (Semaine 4)
**Objectif** : Les visiteurs peuvent accéder à des tutoriels organisés par chapitres.

- [ ] Entités `Tutorial`, `Chapter`, `Step`
- [ ] Relations Doctrine (OneToMany)
- [ ] Navigation par chapitres en React
- [ ] Système de progression (localStorage d'abord)
- [ ] Tutoriel : "Relations Doctrine et API Platform"

---

## Phase 4 — Dashboard admin (Semaine 5)
**Objectif** : L'auteur peut gérer le contenu depuis une interface admin.

- [ ] Rôles Symfony (`ROLE_ADMIN`)
- [ ] Interface CRUD React pour les articles et tutoriels
- [ ] Upload d'images (Vich Uploader)
- [ ] Tutoriel : "Gestion des rôles et sécurité Symfony"

---

## Phase 5 — Déploiement prod (Semaine 6)
**Objectif** : Le site est en ligne sur VPS, avec HTTPS et CI/CD complet.

- [ ] Configuration Docker prod (multi-stage builds)
- [ ] Traefik + Let's Encrypt
- [ ] Secrets GitHub Actions
- [ ] Pipeline de déploiement automatique sur `main`
- [ ] Monitoring basique (Healthcheck)
- [ ] Tutoriel : "Déployer Symfony + React sur VPS avec Docker"

---

## Backlog (futures phases)

- Système de commentaires
- Recherche full-text (Meilisearch)
- Notifications en temps réel (Mercure)
- Mode sombre / clair
- Internationalisation (FR/EN)
- API publique documentée (OpenAPI / Swagger)

---

*Dernière mise à jour : 2026-04-06*

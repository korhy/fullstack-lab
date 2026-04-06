# Journal de bord — 2026-04-06 : Lancement de fullstack-lab

> *Tags : setup, architecture, décisions*

---

## Contexte

Aujourd'hui marque le début officiel de **fullstack-lab**, un projet dont l'ambition est double : construire une plateforme pédagogique réelle, et la construire *en public* — c'est-à-dire documenter chaque décision, chaque galère, chaque choix technique au fil de l'eau.

Ce journal de bord n'est pas un tutoriel poli et linéaire. C'est le récit brut d'un projet en construction, avec ses hésitations et ses révisions.

---

## Pourquoi Symfony + React ?

La question méritait une vraie réflexion avant de se lancer. La réponse courte : cette stack est très représentative des projets PHP enterprise en France, tout en couplant un frontend moderne décomplexé du backend.

**Ce qu'on gagne avec cette séparation :**
- Une API réutilisable (mobile, third-party, etc.)
- Un frontend qui peut évoluer indépendamment
- Une vision claire de la frontière de responsabilité

**Ce qu'on accepte comme complexité :**
- L'authentification par JWT (pas de session côté serveur)
- La gestion du CORS
- Deux environnements de dev à orchestrer

La décision complète est documentée dans [`docs/architecture/DECISIONS.md`](../architecture/DECISIONS.md) (ADR-001).

---

## La structure choisie

Après réflexion entre multi-repos et monorepo, le choix s'est porté sur le **monorepo** (voir ADR-002). Pour un projet pédagogique, la simplicité d'un seul `git clone` l'emporte.

```
fullstack-lab/
├── backend/     # Symfony 7 + API Platform
├── frontend/    # React 19 + TypeScript
├── docker/      # Orchestration locale et prod
└── docs/        # Toute la documentation
```

---

## Le mode de travail

Ce projet est construit avec un assistant IA (Claude) dans un rôle de **superviseur** : il valide chaque feature avant merge, ouvre les issues, documente au fil du code. Ce choix est intentionnel et fait lui-même partie de la dimension pédagogique — montrer comment intégrer l'IA dans un workflow de développement professionnel sans en perdre le contrôle.

---

## Prochaines étapes

La **Phase 0** démarre maintenant : mettre en place les fondations techniques sans écrire une ligne de fonctionnel.

→ [Voir la Roadmap](../project/ROADMAP.md)

---

*Temps passé aujourd'hui : ~2h (planification et setup)*

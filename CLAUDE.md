# CLAUDE.md — fullstack-lab

> Ce fichier est la source de vérité pour tout assistant IA travaillant sur ce projet.
> Il doit être lu en intégralité avant toute action.

---

## 🎯 Vision du projet

**fullstack-lab** est une plateforme pédagogique construite *en public*, avec la stack **Symfony (API Platform) + React**.
Le site est lui-même le produit démontré : chaque fonctionnalité implémentée fait l'objet d'un article de journal de bord et/ou d'un tutoriel structuré visible sur le site.

**Public cible** : développeurs confirmés curieux d'adopter ou de comparer cette stack.
**Hébergement** : VPS auto-hébergé (Docker + Traefik).

---

## 🧑‍💻 Mode de travail : Clément code, Claude supervise

Ce projet fonctionne selon un mode collaboratif asymétrique :

| Rôle | Responsabilité |
|------|---------------|
| **Clément** | Écrit le code, prend les décisions finales |
| **Claude** | Supervise, documente, valide, ouvre les issues |

### Règles de supervision strictes

1. **Validation avant merge** — Claude doit explicitement valider chaque feature avant qu'elle soit mergée sur `main`. Le message de validation suit ce format :
   ```
   ✅ FEATURE VALIDÉE : [nom]
   - Code review : OK / points d'attention : ...
   - Tests : présents / manquants : ...
   - Documentation : complète / à compléter : ...
   - Prêt pour merge sur main.
   ```

2. **Blocage si non-respect des conventions** — Si une PR ne respecte pas les standards définis dans ce fichier, Claude doit le signaler clairement avant toute validation.

3. **Documentation systématique** — Chaque feature implémentée génère automatiquement :
   - Une entrée dans `docs/journal/` (journal de bord)
   - Une mise à jour de `docs/architecture/` si nécessaire
   - La fermeture de l'issue GitHub correspondante avec un commentaire de synthèse

---

## 🏗️ Stack technique

### Backend
- **PHP 8.3** + **Symfony 7.x**
- **API Platform 3.x** — exposition REST + JSON-LD
- **Doctrine ORM** + PostgreSQL
- **JWT Authentication** (LexikJWTAuthenticationBundle)

### Frontend
- **React 19** + **TypeScript**
- **Vite** comme bundler
- **TanStack Query** pour le data fetching
- **React Router v7**
- **Tailwind CSS v4**

### Infrastructure
- **Docker** + **Docker Compose** (dev et prod)
- **Traefik** comme reverse proxy (prod)
- **GitHub Actions** pour CI/CD
- **PostgreSQL** + **Redis** (cache)

---

## 📐 Conventions de code

### PHP / Symfony
- PSR-12 strict
- Types déclarés partout (pas de `mixed` sans justification)
- Services injectés par constructeur uniquement
- Pas de logique métier dans les Controllers (→ Services/Handlers)
- Tests PHPUnit obligatoires pour chaque Service

### React / TypeScript
- Composants fonctionnels uniquement
- `strict: true` dans tsconfig
- Props typées avec interfaces nommées (pas de types inline pour les props)
- Un composant = un fichier
- Pas de `any` sans commentaire explicatif

### Git
- **Conventional Commits** obligatoires :
  ```
  feat(auth): add JWT refresh token endpoint
  fix(api): correct pagination headers
  docs(journal): add entry for user authentication feature
  chore(docker): update PHP image to 8.3.8
  ```
- Branches : `feature/`, `fix/`, `docs/`, `chore/`
- Merge uniquement après validation Claude (voir ci-dessus)

---

## 📋 Gestion des issues GitHub

### Workflow des issues

```
Backlog → Todo → In Progress → Review (Claude) → Done
```

Claude est responsable de :
- Créer les issues de découpage quand une fonctionnalité est planifiée
- Commenter les issues avec le résultat de la validation
- Fermer les issues une fois la feature mergée

### Labels utilisés
| Label | Usage |
|-------|-------|
| `feature` | Nouvelle fonctionnalité |
| `bug` | Correction |
| `docs` | Documentation / journal |
| `architecture` | Décision d'architecture |
| `educational` | Contenu pédagogique à produire |
| `blocked` | Issue bloquée (dépendance) |

---

## 📚 Structure de documentation

```
docs/
├── project/
│   └── ROADMAP.md          # Vision long terme et phases
├── architecture/
│   ├── DECISIONS.md        # Journal des décisions (ADR)
│   ├── overview.md         # Vue d'ensemble de l'architecture
│   ├── api.md              # Conventions API Platform
│   └── frontend.md         # Conventions React
├── journal/
│   └── YYYY-MM-DD-titre.md # Entrées de journal de bord
└── tutorials/
    └── [slug]/
        └── README.md       # Tutoriels structurés
```

---

## 🔌 MCP Servers configurés

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<à_configurer>"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."]
    }
  }
}
```

> ⚠️ Configurer le token GitHub dans `.env.local` (ne jamais committer le token).

---

## 🗓️ Rythme de travail

- **Planification** : chaque lundi, révision du backlog et planification de la semaine
- **Journal de bord** : une entrée par session de travail significative
- **Démo / retrospective** : chaque vendredi, bilan de la semaine (visible sur le site)

---

## ❓ Questions à se poser avant toute implémentation

Avant de coder une feature, Claude et Clément doivent répondre ensemble à :

1. Est-ce que cette feature a une issue GitHub ouverte ?
2. Est-ce qu'elle a été découpée en tâches actionnables ?
3. Est-ce que l'impact architectural est documenté dans `DECISIONS.md` ?
4. Est-ce que le contenu pédagogique associé est planifié ?
5. Est-ce que les tests sont prévus dès le début ?

---

*Dernière mise à jour : 2026-04-06*

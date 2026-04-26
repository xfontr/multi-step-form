# 🚀 Multi Step Form

> 📌 This README was personally written by me. AI was only used for styling improvements and minor corrections.

**Index**

- [1] Summary
- [2] Set up instructions
- [3] Verify analytics functionality
- [4] Extra
- [5] Design considerations

---

## 🧭 [1] Summary

A quick guide to understand the structure of this project and how everything is organized.

---

### 📂 App Layer — `app/` (🏁 Highest Level)

> 🎯 The entry point of the application

This layer **consumes the domains** and is responsible for rendering the actual app UI.

---

### 📂 Domains — `layers/` (🧩 Business Logic Split)

Each domain is isolated and may contain:

- 🎨 Domain-specific UI components
- ⚙️ Stores, composables, and utilities
- 🌐 Own repository layer + endpoint definitions (for API calls)
- 🧠 Domain-specific types and configs

#### ❓ Why this structure?

This follows Nuxt’s intended architecture for separating concerns across different domains.

**Is it perfect DDD? No.**

Some global concerns still leak in (like i18n or Nuxt auto-imports), so it’s not 100% strictly isolated.

But the trade-off is worth it:

> 👍 Slight imperfections
> 🚀 Better scalability & maintainability than a potentially over-engineered strict DDD

---

### 📦 Core Packages — `packages/` (🧱 Foundation)

Framework-agnostic building blocks used across the app:

- 🧪 E2E testing utilities
- 🎨 Design system (UI components like buttons, cards, etc.)
- 📚 Storybook for isolated UI development

#### ❓ Why externalize this?

Originally, UI lived inside `layers/`, but:

> ⚠️ Problem: Domains would horizontally depend on shared UI
> ➜ This broke clean separation principles

So it was extracted into a standalone core package.

#### 🧠 Was it worth it?

Not strictly necessary unless shared externally, but:

> 💡 It brings the project closer to real-world scalable architecture patterns

---

### 🔗 Shared — `shared/` (🌍 Cross-layer utilities)

Nuxt-approved shared space for:

- 🧩 Shared types
- ⚙️ Utility classes
- 🔄 Logic used by both client & server

#### 💭 Design decision

Could’ve been moved to a `packages/` module, but:

> 🧭 Chosen approach: follow Nuxt’s preferred conventions instead of over-customizing

---

### 🐳 Docker — `docker/` (📦 Containerization)

> 🧾 Self-explanatory

Check `docker/README.md` for full setup instructions.

---

### 🖥️ Server — `server/` (🧪 Mock API layer)

Not a core business piece.

> 🧪 Used only to simulate API responses for development/testing purposes

---

### 🌐 i18n — `i18n/` (🌍 Localization)

> 🧾 Self-explanatory

---

### 🧑‍💻 VS Code Config — `.vscode/` (🧹 Dev Experience)

These settings are intentional and not accidental.

#### 🎯 Purpose:

- Prevent cluttered folder structures
- Avoid creating extra directories just for:
    - `*.test.ts`
    - `*.stories.ts`

---

## Set up instructions

### Local development set up

**Requirements**

- Recommended node version: v23.10.0
- Recommended pnpm version: 10.6.5

**Instructions**

```bash
# Install pnpm

$ npm install -g pnpm@latest-10
$ brew install pnpm # Alternative

# Run dev server

$ pnpm dev

# Run local build

$ pnpm build
$ pnpm preview

# Run tests, lint and storybook

$ pnpm test && pnpm lint
$ pnpm test:e2e
$ pnpm storybook
```

### Containerization

**Requirements**

- Install docker

**Instructions**

```bash
$ cd docker
$ make init
```

---

## [3] Verify analytics functionality

**Options**:

- **LOGS -** Run the project in local dev or in a container. The analytics (usage, assigned group, etc.) are logged in the server terminal.
- **TESTS -** Run `$ pnpm test:e2e` - The analytics.test.ts suite creates 10 fake sessions and ensures that some have 5 steps, and others 6.
- **MANUAL -** Run a session and complete the first step. You can see the available steps at the bottom. To run another session, open a new private window, or finish the flow and press "Restart".

---

## [4] Extra

Additionally:

- Production deployment 🇪🇸 [Multi Step Form - ES](https://cool-multi-step-form.netlify.app/).
- Production deployment 🇬🇧 [Multi Step Form - EN](https://cool-multi-step-form.netlify.app/en).
- Storybook ✅ - Covers UI package
- Docker ✅
- e2e tests with Playwright ✅ Covers: landing initial flow, most of the register flow, and iterate 10 different sessions to check if the group assignation works as expected
- Data posting ✅ Usage and Diet data are actually sent to a fake API. The data is logged in the Server terminal ‼️
- Flow navigation ✅ The user can move backwards with a UI button + can use the query params to reload at a previous step.
- Abstract multi-step form ✅ It's strictly decoupled from external logic.
- Abstract group assignment ✅ The consumer can update the nuxt.config.ts file or the env variables and automatically create or delete groups,and change the skipped steps
- Pipelines & Husky hooks ✅ Github actions to ensure that the code that reaches origin is good. Hooks to prevent pushing mistakes.
- Git: Trunk based development, semantic commit messages.

---

## [5] Design considerations

Please refer to [1] Summary for the most relevant architectural choices. Below are more specific considerations:

- **a11y -** I'm not satisfied with the outcome, Primevue does not ensure proper HTML semantics and some of their nodes could improve in terms of a11y.
- **Why Primevue? -** No particular reason. Easy to set up. First time using it.
- **Why a UI package if we already have Primevue? -** From a real world project perspective, this makes migrating from UI provider easily, and allows to limit the level of customization that the internal UI consumers can apply.
- **UI package false modularity -** The UI package depends on dependencies provided by the root app: it's not a fully independent package. That is not necessarily bad in this project, but might be troublesome in a real world project.

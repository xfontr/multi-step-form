# Multi Step Form

This readme file has been personally written by me. AI was solely used to improve styling and small corrections.

## Summary

This should help to navigate this project :)

### 📂 app/ - Highest layer

Consumes the domains and renders the actual app.

### 📂 layers/ - Domains

Each of them may or may not contain:

- Domain specific UI components
- Domain specific stores, utils, composables
- When performing network requests, its own repository and endpoint dictionary.
- Own types and configs

**Why?** This is Nuxt's intended way to handle diferent domains of logic.

Is it perfect? No, for example, i18n library permeates into each domain, as well as every other nuxt autoimport: in other words, they are not 100% strictly decoupled. However, the final balance is positive: the drawbacks from using the layers are lower than having a perfect/very-strict DDD decoupling.

### 📂 packages/ - Core

Completely agnostic packages that are consumed by the layers and even the main app:

- e2e testing
- Design system and basic UI components (buttons, cards, etc.) with **Storybook**

**Why?** Originally, I had the UI placed in the layers/ folder. Problem: The domains would consume it horizontally (example: steps would consume UI, which would be at the same level). This would break the DDD, so I opted to externalise it.

Did this come with any extra benefits? Not really, as long as we don't intend to serve this UI package to other teams. But it makes the app closer to a real-world DDD case.

### 📂 shared/

As per Nuxt's docs: this folder is to serve both UI and server. Contains a few types and classes.

**Why?** IMHO I could have created an extra packages/domain with the same content, but I opted for leveraging Nuxt's prefered architecture.

### 📂 docker/

Self-explanatory :) Check docker/README.md for instructions.

### 📂 server/

Not very relevant. Used simply to fake API calls.

### 📂 i18n/

Self-explanatory :)

### 📂 .vscode/

These settings were **not** pushed accidentally. The purpose is to avoid creating many folders only for _test.ts_ and _stories.ts_ files. VS code settings allow to nest them without the extra folders.

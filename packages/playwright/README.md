# Playwright Tests

## Requirements

- Node.js (recommended: >= 18)
- pnpm (or yarn/npm)

⸻

## Setup

Install dependencies:

```zsh
$ pnpm install
```

Install Playwright browsers:

```zsh
$ pnpm run install:browsers
```

## Runnin Tests

Run all tests:

```zsh
$ pnpm test
```

## Test Overview

### Register Flow

- Completes almost the full user registration flow

### Landing Flow

- Ensures the first step of the landing page works correctly

### Analytics Flow

- Runs the landing flow 10 times, just enough to see the step count
- Validates that different groups receive different step assignments

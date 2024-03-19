# Digitus Case

Welcome to the Digitus Case project! This project is dedicated to implementing a design use case for Digitus, showcasing modern web development practices.

![Node Version](https://img.shields.io/badge/node-v20-green)
[![Coverage](https://codecov.io/github/abdullahkabakk/digitus-case/graph/badge.svg?token=43E2JP0SON)](https://codecov.io/github/abdullahkabakk/digitus-case)
[![DeepScan Grade](https://deepscan.io/api/teams/23481/projects/26769/branches/853377/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=23481&pid=26769&bid=853377)
[![Build Status](https://github.com/abdullahkabakk/digitus-case/actions/workflows/deploy.yml/badge.svg)](https://github.com/abdullahkabakk/digitus-case/actions/workflows/deploy.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/c5383699-df08-424e-bd8f-24719714edbf/deploy-status)](https://app.netlify.com/sites/digitus/deploys)
![Known Vulnerabilities](https://snyk.io/test/github/abdullahkabakk/digitus-case/badge.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/abdullahkabakk/url-shortener/blob/main/LICENSE)

## Table of Contents

- [Technologies](#technologies)
- [Project Setup](#project-setup)
    - [Compile and Hot-Reload for Development](#compile-and-hot-reload-for-development)
    - [Type-Check, Compile and Minify for Production](#type-check-compile-and-minify-for-production)
    - [Run Unit Tests with Vitest](#run-unit-tests-with-vitest)
    - [Run End-to-End Tests with Cypress](#run-end-to-end-tests-with-cypress)
    - [Lint with ESLint](#lint-with-eslint)
- [Commit Tag Meanings](#commit-tag-meanings)
- [Change Log](#change-log)
- [License](#license)

## Technologies

- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Cypress
- Vitest

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Commit Tag Meanings

Commit tags convey the nature of changes made in the codebase. Below are common commit tags and their meanings:

| Tag        | Description                                          | Example Commit Message                         |
|------------|------------------------------------------------------|------------------------------------------------|
| [feat]     | New feature or significant enhancement               | `[feat] Implement user authentication`         |
| [fix]      | Bug fix or correction to existing functionality      | `[fix] Resolve issue with user registration`   |
| [chore]    | Routine tasks, maintenance, or tooling changes       | `[chore] Update dependencies`                  |
| [docs]     | Changes or additions to documentation                | `[docs] Update installation guide`             |
| [style]    | Code style changes                                   | `[style] Format code according to style guide` |
| [refactor] | Code restructuring or optimization                   | `[refactor] Simplify user profile rendering`   |
| [test]     | Adding or modifying tests                            | `[test] Add unit tests for authentication`     |
| [ci]       | Changes to continuous integration (CI) configuration | `[ci] Update Travis CI configuration`          |
| [build]    | Changes affecting build system or dependencies       | `[build] Upgrade webpack to version 5`         |
| [perf]     | Performance improvements or optimizations            | `[perf] Optimize database queries`             |


## Change Log

All significant updates to this project will be meticulously documented in this [log](CHANGELOG.md).

## License

This project is open-source and is available under the [MIT License](LICENSE).
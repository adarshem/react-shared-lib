# React Shared Library

A collection of reusable React components and assets designed to be shared across multiple applications.

This project is configured with automated versioning and publishing to NPM using [semantic-release](https://github.com/semantic-release/semantic-release) and GitHub Actions.

## How to Use This Library

### Installation

Install the package from NPM into your project:

```bash
pnpm add @adarshem/react-shared-lib
```

### Importing Components

You can import components directly from the library's main entry point.

```jsx
import { Widget } from '@adarshem/react-shared-lib';

function MyApp() {
  return <Widget />;
}
```

### Using Locales

Locale files (like `en-US.json`) are included in the package but are not bundled with the main components to keep your application's bundle size small. You can import them directly from the `src/locales` path.

```jsx
import enUS from '@adarshem/react-shared-lib/src/locales/en-US.json';

// Your i18n setup logic here
console.log(enUS.greeting); // "Hello"
```

---

## How to Contribute

We welcome contributions! Please follow this process for development and pull requests.

### Development Workflow

1.  **Create a Branch:** Start your work on a new feature or bugfix branch.
    ```bash
    git checkout -b feat/add-new-cool-component
    ```
2.  **Make Changes:** Write your code and tests.
3.  **Commit Your Work:** Commit your changes using the Conventional Commits format (see below).
4.  **Open a Pull Request:** Push your branch to GitHub and open a pull request against the `main` branch.
5.  **Merge:** Once your PR is reviewed and approved, it will be merged into `main`, which will automatically trigger a new release.

### Commit Message Guidelines

This repository uses **Conventional Commits** to automate versioning and changelog generation. It is essential that your commit messages follow this standard.

A commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Commit Types

The `<type>` prefix is mandatory. Here are the most common types and how they affect the package version:

| Type       | Description                                        | Version Bump |
| :--------- | :------------------------------------------------- | :----------- |
| **`feat`** | A new feature for the user.                        | **Minor**    |
| **`fix`**  | A bug fix for the user.                            | **Patch**    |
| `docs`     | Documentation changes only.                        | None         |
| `style`    | Code style changes (formatting, etc).              | None         |
| `refactor` | A code change that neither fixes a bug nor adds a feature. | None         |
| `test`     | Adding missing tests or correcting existing tests. | None         |
| `chore`    | Changes to the build process or auxiliary tools.   | None         |

#### Breaking Changes

To indicate a breaking change (which will create a **Major** version bump), add `BREAKING CHANGE:` in the footer of your commit message.

```
feat: remove support for old browsers

BREAKING CHANGE: This change removes support for IE11.
```

By following this process, your contributions will be automatically included in the next release and changelog.

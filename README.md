# React Shared Library

This is a shared library for React components and other assets.

## Installation

\`\`\`bash
npm install react-shared-lib
\`\`\`

## Usage

\`\`\`jsx
import { Widget } from 'react-shared-lib';

function App() {
  return <Widget />;
}
\`\`\`

### Using Locales

The locale files are not bundled with the main library to keep the bundle size small. You can import them directly.

\`\`\`jsx
import enUS from 'react-shared-lib/src/locales/en-US.json';

// Your i18n setup logic here
console.log(enUS.greeting); // "Hello"
\`\`\` # react-shared-lib

# Vite, Webpack, and Related Concepts

## 🔹 What is Vite?
Vite is a **fast build tool** and **development server** for modern frontend development. It is designed to improve performance compared to traditional bundlers like Webpack.

### ✅ Why Use Vite?
- **Faster Development** – Uses native **ES modules** and **Hot Module Replacement (HMR)**.
- **Faster Builds** – Uses **esbuild** (written in Go) for fast code transformation.
- **Better DX (Developer Experience)** – Instant updates without full reloads.
- **Optimized for Production** – Uses **Rollup** internally to generate optimized output.

### 📂 Vite Folder Structure
When you create a Vite project, it sets up the following structure:


```
my-app/
├── 📂 public/         # Static assets (images, icons, etc.)
├── 📂 src/            # Main source code (React/Vue components)
│   ├── App.jsx        # Main component (for React)
│   ├── main.jsx       # Entry point (for React)
├── 📜 index.html      # Entry HTML file (linked to Vite)
├── 📜 package.json    # Project dependencies and scripts
├── 📜 vite.config.js  # Vite configuration file
├── 📜 eslint.config.js# ESLint rules (if enabled)
├── 📜 README.md       # Project documentation

```

---

## 🔹 What is Webpack?
Webpack is an older, widely used **JavaScript module bundler**. It processes and bundles assets like JS, CSS, and images into optimized output files. However, Webpack can be slow, which is why Vite is now preferred for modern projects.

### ✅ Webpack vs. Vite
| Feature  | Webpack | Vite |
|----------|--------|------|
| **Dev Server** | Requires configuration | Built-in, faster |
| **Bundling** | Uses multiple steps | Uses **esbuild** for faster performance |
| **HMR (Hot Module Replacement)** | Slower | Near-instant updates |

---

## 🔹 What is Hot Module Replacement (HMR)?
HMR is a feature in Vite that **updates only the changed modules** in the browser **without a full page reload**. This makes development much faster because you don’t lose application state when updating components.

---

## 🔹 What is Bundling?
Bundling is the process of **combining multiple files** (JS, CSS, etc.) into a **single file** or smaller chunks for faster loading.  
- **Vite (Development Mode)** – Doesn't bundle files, serves them via ES Modules.  
- **Vite (Production Mode)** – Uses **Rollup** to bundle and optimize files.  

### ✅ Key Terms
- **Rollup** – The bundler Vite uses for production builds.
- **esbuild** – The super-fast compiler used by Vite for JavaScript/TypeScript transformations.

---

## 🔹 `vite.config.js` – Vite Configuration
Vite's config file (`vite.config.js`) allows customization of the build process.

### 📌 Example:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],  // Enables React fast refresh
  server: {
    port: 3000,  // Dev server runs on port 3000
  },
  build: {
    outDir: "dist",  // Output directory for production build
  }
})

```

- plugins: [react()] – Enables React support.
- server.port: 3000 – Changes the dev server port.
- build.outDir: "dist" – Sets the output folder for production.

🔹 eslint.config.js – ESLint Configuration

ESLint helps catch errors and enforce coding styles. Vite projects may include eslint.config.js for custom ESLint rules.

📌 Example:

```js

export default [
  {
    ignores: ["node_modules/", "dist/"], // Ignore unnecessary folders
  },
  {
    rules: {
      "no-unused-vars": "warn", // Warn on unused variables
      "react/react-in-jsx-scope": "off", // Disable React in JSX scope rule
      "indent": ["error", 2], // Enforce 2-space indentation
    },
  },
];

```

### 🔹 prefers-color-scheme for Dark/Light Mode
Vite-generated projects use CSS media queries to automatically switch themes based on system preferences.

📌 Example:

```css
@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  }
}
```

How It Works:
- If the system is in light mode, it applies the light theme.
- If the system is in dark mode, it applies the dark theme.

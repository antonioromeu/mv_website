# 🚀 Mário Veloso Portfolio Website

---

## 📋 Prerequisites & Tools

Before running or building the project, ensure you have Node.js installed via **nvm** (Node Version Manager).

### System Setup (macOS / zsh)

1. **Install NVM** (if not already installed via Homebrew):
    ```
    brew install nvm
    ```

2. **Configure NVM in your shell** (add to ~/.zshrc if needed):
   ```
   export NVM_DIR="$HOME/.nvm"
   [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"
   ```

3. **Reload shell configuration:**
   ```
   source ~/.zshrc
   ```

4. **Install & use Node LTS:**
   ```
   nvm install --lts
   nvm use --lts
   ```

---

## 🛠️ Project Installation

Clone the repository and install all required dependencies:

### Clone the repository
```
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```

### Install project dependencies
```
npm install
```

---

## 💻 Development Setup

To start the local development server with hot-reloading:

```
npm run dev
```

The application will be running locally at:
👉 http://localhost:4321

---

## 📦 Build & Local Preview

### 1. Production Build
Compile and bundle your site into the output directory (./dist/):
```
npm run build
```

### 2. Preview Production Build
Spin up a local server to preview the static production files before deploying:
```
npm run preview
```

---

## 🚀 Pushing Changes & Git Workflow

Follow standard Git workflow to stage, commit, and push your code to remote:

### Check updated files
```
git status
```

### Stage changes
```
git add .
```

### Commit changes with a message
```
git commit -m "feat: updated components and content"
```

### Push to default branch (main or master)
```
git push origin main
```

---

## ⚡ Available Commands Summary

All commands are executed from the root directory of the project:
- ```npm install```             : Installs project dependencies
- ```npm run dev```             : Starts local development server at localhost:4321
- ```npm run build```           : Builds the production site to ./dist/
- ```npm run preview```         : Previews the production build locally
- ```npm run astro ...```       : Executes Astro CLI commands (e.g., astro check)
- ```npm run astro -- --help``` : Displays help for Astro CLI

---

## ⚙️ Initial Setup Reference

(For historical reference: packages and commands used during initial setup)

```
nvm install --lts
npm create astro@latest
npx astro add tailwind
npm install @fontsource-variable/source-code-pro
```
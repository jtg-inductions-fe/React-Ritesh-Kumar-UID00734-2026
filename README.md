# GitHub User App (Sora)

## Overview

A React-based GitHub user discovery application that uses the GitHub API to search and explore users, view user profiles, follow users, and provide follow suggestions.

The application includes both public and authenticated functionality, with protected routes for features that require authentication.

## Tech Stack

- **React 19** — UI development
- **TypeScript** — Type-safe development
- **Vite** — Development server and build tooling
- **Redux Toolkit** — Global state management
- **Redux Thunk** — Asynchronous Redux actions
- **React Router** — Client-side routing and protected routes
- **Material UI** — UI components and styling

## Setup

### Prerequisites

- **Node.js:** 20+
- **Yarn:** 4.x

The project contains an `.nvmrc` file with the recommended Node.js version.

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Setup Node.js

If you are using NVM and the required Node.js version is already installed:

```bash
nvm use
```

If the required version is not installed:

```bash
nvm install
```

If NVM is not installed, install it from the official repository:

https://github.com/nvm-sh/nvm

Alternatively, Node.js can be installed directly from:

https://nodejs.org/

### 3. Install dependencies

The project uses Yarn 4 (Berry).

```bash
yarn install
```

The repository already contains the Yarn configuration, so there is no need to run `yarn set version berry` after cloning.

### 4. Configure environment variables

Create a `.env` file in the project root.

Example:

```env
PORT=3000
```

Refer to `.env.template` for the available environment variables.

### 5. Start the development server

```bash
yarn dev
```

The application will be available at the URL displayed in the terminal.

### 6. Build the application

For a production build:

```bash
yarn build
```

For a development build:

```bash
yarn build:dev
```

### 7. Preview the production build

```bash
yarn preview
```

# BitRocket Software Resources

This repository contains all software applications, libraries, and development tools for BitRocket's platform.

## Overview

BitRocket develops comprehensive software solutions for EV charging management, including:

- Web applications for users and operators
- Mobile applications for iOS and Android
- Desktop applications for fleet management
- Software libraries and SDKs
- Development tools and automation scripts

## Directory Structure

```
software/
├── web-app/                  # Next.js web application
│   ├── app/                 # Next.js app directory
│   ├── components/          # UI components
│   ├── contexts/            # React contexts
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utilities
│   ├── utils/               # Helper functions
│   ├── public/              # Static assets (logos, images)
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.mjs
│   ├── postcss.config.mjs
│   ├── tailwind.config.ts
│   └── .gitignore
├── mobile-app/              # React Native mobile app
│   ├── ios/
│   ├── android/
│   ├── src/
│   ├── package.json
│   └── README.md
├── desktop-app/             # Electron desktop app
│   ├── src/
│   ├── package.json
│   └── README.md
└── libraries/               # Shared libraries
    ├── bitrocket-sdk/       # JavaScript/TypeScript SDK
    ├── charging-api-client/ # API client library
    └── ui-components/       # Reusable UI components library
```

## Getting Started

### Web Application (Next.js)

```bash
cd software/web-app
npm install
npm run dev
```

The application will be available at `http://localhost:3000`

### Technologies

- **Frontend:** Next.js 14, React 18, TypeScript
- **UI Framework:** Tailwind CSS, Radix UI
- **State Management:** React Context API
- **Data Fetching:** Next.js Server Actions, fetch API

## Team Structure

- Frontend Engineering: React/Next.js development
- Mobile Engineering: React Native development
- Backend Engineering: API and service development
- DevOps: CI/CD and deployment
- Quality Assurance: Testing and automation

## Workflow

1. Feature development: Create feature branches
2. Code review: Pull request process
3. Testing: Unit, integration, and E2E testing
4. Deployment: Vercel for web, App Store/Play Store for mobile

## Communication

- Daily standups: 15 minutes
- Sprint planning: Weekly
- Code reviews: GitHub Pull Requests
- Issue tracking: GitHub Issues

## Important Links

- [API Documentation](https://api.bitrocket.com/docs)
- [Design System](https://design.bitrocket.com)
- [Development Wiki](https://wiki.bitrocket.com/software)

cat > README.md << 'EOF'
# Branko Portfolio

Personal developer portfolio built with **React (Vite + TypeScript)**.  
Deployed to **Azure Static Web Apps** via **GitHub Actions**.

## Live
- URL: _add after first deploy_

## Features
- About, Projects with GitHub links, Tech stack, Contact
- Responsive layout, SPA routing

## Tech
- React + Vite + TypeScript
- Azure Static Web Apps (Free tier)
- CI/CD with GitHub Actions

## Deploy (TL;DR)
1. Push to `main`
2. Create Azure Static Web App (preset: React, output: `dist`)
3. Auto-deploy runs on each push

## SPA Fallback
Create `staticwebapp.config.json`:
```json
{
  "routes": [{ "route": "/*", "serve": "/index.html", "statusCode": 200 }]
}

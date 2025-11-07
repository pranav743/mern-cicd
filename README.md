# MERN Backend CI/CD Example

A minimal Node.js + Express backend with CI/CD pipeline using GitHub Actions and Docker Hub.

## Features
- Express backend with `/api/health` and `/api/items` endpoints
- Basic Jest test suite
- Dockerfile for containerization
- GitHub Actions workflow for CI/CD

## Setup & Usage

### 1. Install dependencies
```bash
yarn install
```

### 2. Run locally
```bash
yarn start
# Visit http://localhost:5000/api/health
```

### 3. Run tests
```bash
yarn test
```

### 4. Build & run Docker image locally
```bash
docker build -t masterpranav07/mern-backend .
docker run -p 5000:5000 masterpranav07/mern-backend
```

### 5. CI/CD Pipeline
- On push to `main`, GitHub Actions will:
  - Install dependencies
  - Run tests
  - Build Docker image
  - Push image to Docker Hub (`masterpranav07/mern-backend:latest`)

#### GitHub Secrets Required
- `DOCKERHUB_USERNAME`: masterpranav07
- `DOCKERHUB_TOKEN`: Docker Hub access token

### 6. Verify Deployment
- Check GitHub Actions tab for workflow status
- Check Docker Hub for `mern-backend:latest` image
- Pull and run image:
```bash
docker pull masterpranav07/mern-backend:latest
docker run -p 5000:5000 masterpranav07/mern-backend:latest
```

## Endpoints
- `GET /api/health` → `{ message: "Server is running" }`
- `GET /api/items` → `{ items: ["item1", "item2", "item3"] }`

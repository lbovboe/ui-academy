# Docker Setup for UI Academy

This document explains how to use Docker with this Next.js application.

## 🐳 What is Docker?

Docker is a containerization platform that packages your application and its dependencies into lightweight, portable containers. This ensures your application runs consistently across different environments.

## 📁 Docker Files Overview

### `Dockerfile`

Multi-stage build configuration:

- **Stage 1 (deps)**: Installs production dependencies
- **Stage 2 (builder)**: Builds the Next.js application
- **Stage 3 (runner)**: Creates minimal production image

### `docker-compose.yml`

Defines two services:

- **web-dev**: Development environment with hot reloading
- **web-prod**: Production environment with optimized build

### `.dockerignore`

Excludes unnecessary files from Docker build context to improve build speed and reduce image size.

## 🚀 Quick Start

### Development Mode

```bash
# Start development environment with hot reloading
docker compose up web-dev

# Or use Docker Compose Watch for automatic rebuilds
docker compose watch web-dev
```

### Production Mode

```bash
# Build and start production environment
docker compose up web-prod --build

# Run in background
docker compose up web-prod -d --build
```

## 🛠 Available Commands

### Basic Operations

```bash
# Build images
docker compose build

# Start services
docker compose up

# Start in background
docker compose up -d

# Stop services
docker compose down

# View logs
docker compose logs

# View running containers
docker compose ps
```

### Development Commands

```bash
# Start development with file watching
docker compose watch web-dev

# Execute commands in running container
docker compose exec web-dev npm run lint
docker compose exec web-dev npm test

# Access container shell
docker compose exec web-dev sh
```

### Production Commands

```bash
# Build production image
docker compose build web-prod

# Start production service
docker compose up web-prod

# Scale production service
docker compose up web-prod --scale web-prod=3
```

## 🧪 Testing Your Docker Setup

### 1. Health Check

Visit `http://localhost:3000/api/health` to verify the application is running correctly.

### 2. Development Testing

```bash
# Start development environment
docker compose up web-dev

# In another terminal, test hot reloading
# Edit any file in your project and see changes reflected immediately
```

### 3. Production Testing

```bash
# Build and test production image
docker compose up web-prod --build

# Test performance and functionality
curl http://localhost:3000/api/health
```

### 4. Container Health

```bash
# Check container health status
docker compose ps

# View health check logs
docker compose logs web-prod | grep health
```

## 📦 Sharing Your Docker Container

### 1. Build and Tag Image

```bash
# Build production image with tag
docker build -t your-username/ui-academy:latest .

# Or build specific stage
docker build --target runner -t your-username/ui-academy:production .
```

### 2. Push to Docker Hub

```bash
# Login to Docker Hub
docker login

# Push image
docker push your-username/ui-academy:latest
```

### 3. Share via Docker Compose

Share your `docker-compose.yml` file. Others can run:

```bash
# Clone your repository
git clone your-repo-url
cd your-repo

# Start the application
docker compose up --build
```

### 4. Create Docker Image Archive

```bash
# Save image to tar file
docker save your-username/ui-academy:latest > ui-academy.tar

# Load image from tar file (on another machine)
docker load < ui-academy.tar
```

## 🌐 For Other Users

### Prerequisites

- Docker Desktop installed
- Docker Compose (included with Docker Desktop)

### Running the Application

```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Development mode
docker compose up web-dev

# Production mode
docker compose up web-prod --build
```

### Environment Variables

Create a `.env.local` file for custom environment variables:

```env
# Example environment variables
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your-database-url
```

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   # Change port in docker-compose.yml
   ports:
     - "3001:3000"  # Use port 3001 instead
   ```

2. **Permission issues on Linux**

   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER .
   ```

3. **Build cache issues**

   ```bash
   # Clear build cache
   docker compose build --no-cache

   # Remove all containers and rebuild
   docker compose down
   docker system prune -f
   docker compose up --build
   ```

4. **Node modules issues**
   ```bash
   # Remove node_modules and rebuild
   rm -rf node_modules
   docker compose build --no-cache web-dev
   ```

## 📊 Benefits of Using Docker

### 1. **Consistency**

- Same environment across development, testing, and production
- Eliminates "works on my machine" problems

### 2. **Isolation**

- Application dependencies are contained
- No conflicts with system packages

### 3. **Portability**

- Runs on any system with Docker
- Easy deployment to cloud platforms

### 4. **Scalability**

- Easy horizontal scaling with Docker Compose
- Container orchestration with Kubernetes

### 5. **Development Efficiency**

- Quick setup for new team members
- Consistent development environment
- Easy switching between project versions

## 🏗 Architecture Benefits

### Multi-Stage Build Advantages:

- **Smaller Images**: Production image only contains runtime dependencies
- **Security**: Reduced attack surface by excluding build tools
- **Performance**: Faster deployment and startup times
- **Caching**: Efficient layer caching for faster rebuilds

### Docker Compose Benefits:

- **Service Orchestration**: Manage multiple services (app, database, cache)
- **Environment Management**: Separate dev/prod configurations
- **Networking**: Automatic service discovery and communication
- **Volume Management**: Persistent data and development file mounting

## 📈 Performance Optimizations

The Docker setup includes several optimizations:

1. **Alpine Linux**: Minimal base image (~5MB vs ~100MB+)
2. **Multi-stage builds**: Separate build and runtime environments
3. **Layer caching**: Optimized Dockerfile instruction order
4. **Non-root user**: Enhanced security
5. **Health checks**: Automatic service monitoring
6. **Signal handling**: Proper process management with dumb-init

## 🔒 Security Features

- Non-root user execution
- Minimal attack surface with Alpine Linux
- Proper file permissions and ownership
- Environment variable management
- Health check endpoints
- Signal handling for graceful shutdowns

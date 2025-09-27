# Holz

Growing the world tree - comprehensive guides for Yggdrasil mesh networking and Alfis naming system.

## Overview

Holz is a static website that provides setup and configuration guides for:

- **Yggdrasil** - End-to-end encrypted IPv6 mesh network
- **Alfis** - Blockchain-based alternative DNS

## Platform Support

### Desktop
- Linux (Arch, Debian, Red Hat)
- macOS
- Windows (x64, x86, ARM64, ARM)

### Mobile
- Android
- iOS

### Embedded
- OpenWRT

## Development

### Prerequisites
- Node.js 20+
- Docker/Podman

### Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Or using Docker Compose
docker-compose up
```

The application will be available at http://localhost:8080

### Production

The project automatically builds and publishes Docker images to GitHub Container Registry (GHCR) on push to main branch.

## License

AGPL-3.0
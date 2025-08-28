### Prereqs

- Docker + Docker Compose

### Quickstart

```bash
docker compose up --build
```

- Gateway: http://localhost:3000
- Health: http://localhost:3000/healthz
- Metrics: http://localhost:3000/metrics
- Routes:
- GET /api/a/data?q=hello
- POST /api/b/compute {"x":1,"y":2}
- GET /api/c/slow
- GET /api/d/health-proxy
- GET /api/e/random
- Prometheus: http://localhost:9090
- NGINX edge proxy (port 80) forwards to gateway

### Notes

- Rate limiting: 100 req/min/ip via Redis store
- Circuit breaking: opossum around axios calls
- Caching: Redis response cache in gateway (20s TTL on example route)
- Security: Helmet + disabled x-powered-by
- Logging: Winston JSON logs, request ID in gateway
- Metrics: prom-client default metrics + request histograms
- Graceful shutdown: SIGINT/SIGTERM handlers

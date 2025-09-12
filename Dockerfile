# 1) Install all deps (including devDeps)
FROM node:20-slim AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# 2) Build (standalone)
FROM node:20-slim AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3) Prune deps for production
FROM node:20-slim AS prod-deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# 4) Run the standalone server
FROM node:20-slim AS runner
WORKDIR /app

# Use the built-in non-root 'node' user (simpler than creating a new one)
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Copy runtime deps and app output with correct ownership
COPY --chown=node:node --from=prod-deps /app/node_modules ./node_modules
COPY --chown=node:node --from=builder  /app/public            ./public
COPY --chown=node:node --from=builder  /app/.next/standalone  ./
COPY --chown=node:node --from=builder  /app/.next/static      ./.next/static

USER node

EXPOSE 3000
CMD ["node", "server.js"]

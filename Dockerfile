FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production && npm cache clean --force

FROM node:20-alpine AS production

WORKDIR /app

RUN addgroup -g 1001 -S nodejs && \
    adduser -S holz -u 1001

COPY --from=builder /app/node_modules ./node_modules
COPY --chown=holz:nodejs . .

EXPOSE 8080

USER holz

CMD ["npm", "start"]
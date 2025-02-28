FROM oven/bun:latest AS builder

WORKDIR /app
COPY . ./front
COPY ../ ./portfolio-icons-lib

RUN bun install --frozen-lockfile
RUN bun run build

FROM oven/bun:latest AS runner

WORKDIR /app/front
COPY --from=builder /app/front /app/front

ENV NODE_ENV=production
EXPOSE 3000

CMD ["bun", "run", "start"]

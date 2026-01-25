FROM node:20-alpine AS base

WORKDIR /app

# Enable pnpm via Corepack
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM base AS runner
ENV NODE_ENV=production
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile
COPY ./astro.config.mjs ./astro.config.mjs
COPY --from=build /app/dist ./dist
EXPOSE 4321
CMD ["pnpm", "run", "preview"]

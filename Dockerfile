# Build estático de Astro y servido con nginx sin privilegios.
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# nginx-unprivileged escucha en 8080 y corre como uid 101 (usuario nginx).
FROM nginxinc/nginx-unprivileged:1.30.6-alpine
COPY --from=build /app/dist /usr/share/nginx/html

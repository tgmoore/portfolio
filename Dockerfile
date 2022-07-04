# syntax=docker/dockerfile:1

# Stage 1: build
FROM node:alpine3.14 as builder

# declare pwd
WORKDIR /app

COPY package*.json /app

RUN npm ci --prefer-offline --no-audit

COPY src /app/src

COPY tsconfig*.json angular.json /app/

RUN npm run build --prod

RUN npm prune --production

# Stage 2: run
FROM nginx:1.21-alpine as runner

COPY --from=builder /app/dist/portfolio /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
COPY security-headers.conf  /etc/nginx/

EXPOSE 80

CMD ["/usr/sbin/nginx"]
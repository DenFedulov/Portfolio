FROM node:22-slim AS base
WORKDIR /app
COPY ./app/package*.json ./
RUN npm install 
COPY ./app ./

FROM base AS builder
RUN npm run build

FROM nginx:stable-alpine AS prod
RUN rm -rf /usr/share/nginx/html/*
WORKDIR /app
COPY --from=builder /app/dist /usr/share/nginx/html
RUN chmod 644 /usr/share/nginx/html/*.*
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM base AS dev
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

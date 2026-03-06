# Сборка
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Раздача статики через Nginx
FROM nginx:stable-alpine
COPY --from:build /app/dist /usr/share/nginx/html
# ^ Проверь: если после сборки папка называется 'build' или '.next', замени 'dist' на неё.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

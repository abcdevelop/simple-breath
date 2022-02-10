# develop stage
FROM node:11.10.1-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm install

# build stage
FROM develop-stage as build-stage
COPY . .
RUN npm run build

# production stage
FROM nginx:1.15.7-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


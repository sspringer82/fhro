# stage 1 - build
FROM node:18.2 as build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.21
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build-stage /usr/src/app/build .
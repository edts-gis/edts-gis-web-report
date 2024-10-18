# Builder
FROM node:20 as builder

ARG VITE_CORE_HOSTNAME
ENV VITE_CORE_HOSTNAME=$VITE_CORE_HOSTNAME

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build


# Artifact
FROM nginx:alpine as artifact

COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /dist /usr/share/nginx/html/
ENTRYPOINT ["nginx", "-g", "daemon off;"]
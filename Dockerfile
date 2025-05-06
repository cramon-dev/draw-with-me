# Build the Angular app
FROM node:22-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
# TODO - could I try to get pnpm running here instead of npm?
RUN npm install

# Copy all source files
COPY . .

# Build the Angular app for production
RUN npm run build:prod

# Serve the app using Nginx
FROM nginx:1.28-alpine

# nginx unit could be an alternative
# FROM unit:1.34.2-node22 as unit

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy build files
COPY --from=build /app/dist/ /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
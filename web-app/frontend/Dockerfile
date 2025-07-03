# Use the official Node.js image as the base image (LTS version)
FROM node:18-alpine as build

# Install necessary dependencies
RUN apk add --no-cache openssl3  # Using openssl3 instead of openssl1.1

# Set the working directory in the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install crypto-browserify if needed
RUN npm install crypto-browserify

# Copy the rest of the application code
COPY . .

# Build the React application for production
RUN npm run build

# Use a lightweight web server to serve the build files (e.g., nginx)
FROM nginx:alpine

# Copy the build files from the previous stage to the nginx server's root directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that nginx will use
EXPOSE 80

# Start nginx to serve the files
CMD ["nginx", "-g", "daemon off;"]
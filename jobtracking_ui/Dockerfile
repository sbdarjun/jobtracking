# Use the official Node.js image to build the app
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install specific version of Angular CLI globally
RUN npm install -g @angular/cli@17.3.8

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the Angular development server port
EXPOSE 4200

# Start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]

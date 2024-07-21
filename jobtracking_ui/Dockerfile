# Use the official Node.js image to build the app
FROM node:14 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
# Modify to run the development server on port 4200
CMD ["npm", "start"]

# Expose the Angular development server port
EXPOSE 4200
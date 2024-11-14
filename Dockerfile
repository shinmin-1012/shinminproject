# Use Node.js as the base image for a NestJS app
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the source code
COPY . .

# Build the project (if needed)
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to start the app
CMD ["npm", "run", "start:prod"]

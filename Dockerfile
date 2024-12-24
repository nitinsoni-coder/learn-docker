# Base image
FROM node:latest

# Set Working directory
WORKDIR /app

# copy packages files and install dependencies
COPY package*json ./
RUN npm install

# copy source code
COPY ./src ./src

# Expose the application port
EXPOSE 3000

# start the application
CMD ["node", "src/app.js"]
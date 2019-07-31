# Pull base image
FROM node:10

# Create work directory inside container
WORKDIR /app

# Copy package.json file to work directory
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy all files to work directory
COPY . .

# Run command to start node app
CMD [ "npm", "start" ]
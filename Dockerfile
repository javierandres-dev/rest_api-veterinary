FROM node:12-alpine
WORKDIR /workdir
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "npm run start"]

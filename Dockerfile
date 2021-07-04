FROM node:12-alpine
WORKDIR /workdir
COPY . .
RUN npm install
CMD ["npm", "npm run dev"]

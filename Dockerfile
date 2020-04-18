FROM node:8-alpine

COPY package*.json ./

RUN npm install

COPY . .

ENTRYPOINT [ "node", "order.js" ]

EXPOSE 3001
CMD [ "npm", "start" ]
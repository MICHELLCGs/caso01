FROM node:20

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 9000

CMD ["npm", "start"]
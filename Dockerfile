FROM node:16.16.0

WORKDIR /app

COPY package.json .

RUN npm install --ignore-scripts

COPY . .

EXPOSE 3000

CMD ["npm", "start"]


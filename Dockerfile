FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY . /app

RUN npm install

RUN npm i -g sequelize-cli

RUN npm run build

CMD ["sequelize-cli" "db:create"]
CMD ["sequelize-cli" "db:migrate"]

EXPOSE 3000

CMD ["npm", "run", "dev"]
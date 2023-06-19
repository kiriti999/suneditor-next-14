FROM node:alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY . /app

RUN npm install

RUN npm run build

RUN chmod +x entrypoint.sh

RUN npm i -g sequelize-cli

EXPOSE 3000

ENTRYPOINT [ "./entrypoint.sh" ]

CMD ["npm", "run", "dev"]
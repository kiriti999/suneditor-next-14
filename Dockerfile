FROM node:alpine

RUN apk add curl

WORKDIR /app

COPY package.json package-lock.json ./

COPY . /app

RUN npm install -g @aws-amplify/datastore

RUN npm install --legacy-peer-deps --omit=dev

RUN npm i -g sequelize-cli

RUN npm run build

CMD ["sequelize-cli" "db:create"]
CMD ["sequelize-cli" "db:migrate"]

RUN chown -R node:node /app
USER node

EXPOSE 3000

CMD ["npm", "start"]
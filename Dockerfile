FROM node:alpine
WORKDIR /app

RUN chmod 755 /app

COPY --chown=node:node . .

COPY package.json yarn.lock ./
RUN yarn install

COPY . /app
RUN yarn build

EXPOSE 3000

CMD ["yarn", "dev"]
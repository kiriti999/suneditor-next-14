FROM node:alpine
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . /app
RUN yarn build

EXPOSE 3000

CMD ["yarn", "dev"]
FROM node:alpine


COPY yarn.lock /app
RUN yarn install --production

WORKDIR /app
COPY . /app

CMD ["yarn", "start"]

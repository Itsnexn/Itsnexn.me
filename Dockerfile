FROM node:alpine


COPY yarn.lock /app
RUN yarn install --production

WORKDIR /app
COPY . /app

EXPOSE 3000
CMD ["yarn", "start"]

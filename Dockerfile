FROM node:17.0.0
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "yarn", "start" ]
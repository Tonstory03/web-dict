FROM node:12-alpine
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN yarn
COPY . .
RUN yarn build
EXPOSE 8080
#CMD npm start
CMD yarn start
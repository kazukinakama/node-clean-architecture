FROM node:18.15.0-alpine

USER node
WORKDIR /var/www/app

COPY --chown=node:node . .

RUN npm install

CMD [ "npm", "run", "start:local" ]

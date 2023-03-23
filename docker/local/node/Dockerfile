FROM node:18.15.0-alpine

USER node
WORKDIR /var/www/app

COPY --chown=node:node package.json package-lock.json tsconfig.json ./

RUN npm ci

COPY --chown=node:node src ./src

CMD [ "npm", "run", "watch" ]

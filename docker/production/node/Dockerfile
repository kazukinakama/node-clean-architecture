FROM node:18.15.0-alpine AS build
USER node
WORKDIR /var/www/app
COPY --chown=node:node package.json package-lock.json tsconfig.json ./
RUN npm ci
COPY --chown=node:node src ./src
RUN npm run build

FROM node:18.15.0-alpine
USER node
EXPOSE 3000
WORKDIR /var/www/app
COPY --chown=node:node package.json package-lock.json ./
RUN npm ci --production
COPY --chown=node:node --from=build /var/www/app/dist ./dist
CMD [ "node", "dist/server.js" ]

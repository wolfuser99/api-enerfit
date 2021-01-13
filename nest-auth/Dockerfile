# FROM node:14-alpine As development

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN yarn --prod=false --silent --non-interactive

# COPY . .

# RUN yarn build

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn --silent --non-interactive

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
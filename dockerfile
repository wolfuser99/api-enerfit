FROM node:lts-alpine As development

ADD package.json yarn.lock /app/
WORKDIR /app
RUN yarn --non-interactive

ADD . /app
RUN yarn build

# RUN apk add --no-cache tzdata && mkdir /app 

CMD ["node", "dist/main"]
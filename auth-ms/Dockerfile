FROM node:14.21-alpine3.16

RUN mkdir /app

WORKDIR /auth-ms

COPY package*.json /auth-ms/

RUN npm install

COPY . /auth-ms

ENV NODE_ENV QA
ENV PORT 5000

CMD ["npm", "start"]
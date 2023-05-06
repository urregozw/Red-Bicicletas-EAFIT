FROM node:14.21-alpine3.16

RUN mkdir /map-ms

WORKDIR /map-ms

COPY package*.json /map-ms/

RUN npm install

COPY . /map-ms

ENV NODE_ENV QA
ENV PORT 5001

CMD ["npm", "start"]
FROM node:10-alpine

WORKDIR /app

COPY . .

RUN npm clean-install

ENTRYPOINT ["node"]
CMD ["app.js"]


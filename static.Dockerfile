FROM node:lts-alpine3.10
WORKDIR /usr/src/app
COPY ["./build/", "./"]
RUN npm install -g http-server
COPY . .
EXPOSE 8080
RUN chown -R node /usr/src/app
USER node
ENTRYPOINT http-server build

FROM node:lts

COPY . /app
WORKDIR /app
RUN yarn
EXPOSE 8080
CMD [ "yarn", "serve" ]
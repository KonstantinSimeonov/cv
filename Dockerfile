FROM sbtscala/scala-sbt:eclipse-temurin-jammy-8u352-b08_1.8.2_2.13.10

RUN apt-get update
RUN apt-get install -y imagemagick nodejs npm curl golang-go
RUN npm i -g n

COPY . /cv

WORKDIR /cv
RUN n 16.17.0 && ./build.sh
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]

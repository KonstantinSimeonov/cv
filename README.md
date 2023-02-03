# Resume app

Built with scala/sbt/react/stylus. It's deployed [here](https://simeonov-resume.herokuapp.com/).

## Run with docker
```bash
docker build --tag kscv .
docker run --publish 3000:3000 kscv
```

## How to run without docker
```
sbt 'assets; webPipeline; fastOptJS::webpack'

# serve or open index.html in the current directory
live-server .
```

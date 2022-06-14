# Handle Error Centrally

Error should be handled centrally in Node.js. This is a simple implementation of one of the best practices from [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/errorhandling/centralizedhandling.md)

## Installation
```bash
# install packages
npm i

# start the server
npm start
```
This should run the app on port 3001

* `npm shrinkwrap` is used to stabilized packages versions.

## Run with docker
```bash
# spin up docker container
docker-compose up --build
```
Or

```bash
# build docker image
docker build . -t "demo-app"

# run a container from the image
docker run -p 3001:3001 demo-app
```


### Author
Sadiqur Rahman

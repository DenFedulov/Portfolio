# Project Setup

Docker in required for this project.

## Running a dev server

```
docker compose up -d --build dev
```
or
```
docker-compose up -d --build dev
```
App will be avalable at localhost:5137

## Running a production server

```
docker compose up -d --build prod
```
or
```
docker-compose up -d --build prod
```
App will be avalable at localhost (port 80, and 443 if non local confing is used)

probation-api
=============

Api on top of the reviews table

System Requirements
-------------------
* Docker
* python3
* make

Getting started
---------------

First install the requirements the project needs:
```
make requirements
```

For local development we're using a postgres docker container. To spin the postgres the following command:
```
make run-db
```

For creating the tables and some dummy data run:
```
make migrate
make add-data
```

To run the api we'll need to first install the depdendencies then run it via uvicorn:
```
make run
```

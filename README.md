# EFDW2022 - Backend

#### How can u try this API in your local host?

###### `-` Step One. Create the `docker container` (it will create both db and tables):
```
docker-compose up
```

###### `-` Step Two. Start the service:
```
npm start
```

###### If u wanna check the data directly in the PostgreSQL DB you can open a terminal on `docker desktop` and enter with the following credentials
```
psql -U root -d efdw2022_backend -h localhost
```




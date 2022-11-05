# Backend  > [Ver el backend funcionando en Heroku](https://efdw2022-backend.herokuapp.com/)

# Backend  > [Ver el funcionamiento del backend](https://drive.google.com/file/d/1Nu-fxEKffnzMMo-HehGBYV4TpVFB4iHk/view?usp=sharing) 

```
Nota: Ing. Si ve esto, la API sí la terminé completa durante las horas del exámen, lo único que hice fuera de ese tiempo fue lo de `Oracle Apex` porque no me dió tiempo u.u
```

# Frontend > [Ver el Prototipo hecho en Oracle Apex](https://drive.google.com/file/d/1Xbog4ad6gTFK0Lg8Z4xEXOg880P_bpzk/view?usp=sharing)

#### How can u try this API in your local host?

###### `-` Step One. Create the `docker container` (it will create both db and tables):
```
docker-compose up
```

###### `-` Step Two. Start the service:
```
npm start
```

###### `-` If u wanna check the data directly in the PostgreSQL DB you can open a terminal on `docker desktop` and enter with the following credentials
```
psql -U root -d efdw2022_backend -h localhost
```

###### `-` You can also use the endpoint deployed project on Heroku by using this [URL](https://efdw2022-backend.herokuapp.com/usuarios), the credentials if u wanna be into a terminal, are:
```
psql -U cqqvfxwlckurku -d d4v06dr02eqtda -h ec2-35-170-21-76.compute-1.amazonaws.com

password > 3f77cda980d775a154f76b10cefa19de2a430ac3c313a6a30f418549b23d4d4d
```




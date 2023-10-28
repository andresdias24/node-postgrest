1 levantamos la base de datos con docker-compose up -d postgres
2 instalamos las dependencias con npm install
3 creamos la base de datos con npm run migrate
4 levantamos el servidor con npm run dev
5 probamos la api con postman
```
para el contenedor de postgres es 
docker-compose exec postgres bash
 psql -h localhost -d my_store -U harold

 \d+
# node-postgrest

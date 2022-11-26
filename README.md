## Run
``docker-compose up``

## Usage
Go to localhost:8000 to see total number of requests.  
Go to localhost:8000/stat to also add a new request.  
To view all requests in the database connect to mongodb://localhost:27017  
You can then use commands like
```
show dbs
use mydb
show collections
db.counters.find()
```


# Swarm version
## Run
```
docker swarm init
docker service create --name registry --publish published=5000,target=5000 registry:2
docker-compose -f docker-cluster-compose.yaml build
docker-compose -f docker-cluster-compose.yaml push
docker stack deploy --compose-file docker-cluster-compose.yaml mystack
```

You can then view the status of the deployed stack like this:  
``docker stack services mystack``  


## Stop swarm container
```
docker stack rm mystack
docker service rm registry
docker swarm leave --force
```
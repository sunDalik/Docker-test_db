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
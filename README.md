# GQL Sample 

This repo is for a session on GQL

## Setup
Run 
```
docker compose up -d
```
This will run a postgres container and hasura container. Once all containers are up, You should be able to access hasura at `localhost:8085`.    

> [!NOTE]  
> Hasura admin secret is set as `admin123`

In the console run the `northwind_data.sql` in the sql tab to add all sample data.   
  
Then set suggested relations in the Hasura console(for each table)
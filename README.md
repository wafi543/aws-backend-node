# aws-backend-node
A backend project using NodeJS Express to serve the frontend part of our project (Twuaiq Academy Random Selector)

## Guidline to run this project

To install dependencies, you must have node and npm installed before.

### `npm install`

You should configure a running SQL database (AWS RDS) in .env:
`DB_HOST`
`DB_USER`
`DB_PASSWORD`
`DB_PORT`
 
 Then run the backend
### `node -r dotenv/config index.js`

if you face an issue with running and you have already running on 3001, you might kill the process:
### `sudo fuser -k 3001/tcp`

then run the backend again

## For the database use the correct sql ddl to create the tables (programs, groups, students),
## then manually add your students, and their groups.
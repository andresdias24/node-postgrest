const { Client } = require('pg');
async function GetConecction(){

const ClientPostgres = new Client({
  host: 'localhost',
  port: 5432,
  user: 'harold',
  password: '1234',
  database: 'my_store',
});
await ClientPostgres.connect();
return ClientPostgres;

}
module.exports = GetConecction;

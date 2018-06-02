/**
 * Created by Manjesh on 14-05-2016.
 */

module.exports = {
  database: 'oauth_demo',
  sql: {
    host: 'localhost',
    database: 'oauth_demo', 
    username: 'postgres',  // postgres
    password: 'postgres', // postgres
    dialect: 'postgres', // mysql'|'sqlite'|'postgres'|'mssql' PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
    logging: false, // pgsql : false | mysql: true
  },
  mongo: {
    uri: 'mongodb://admin:admin@192.168.0.200:27017/oauth_demo'
  },
  seedDB:false,
  seedMongoDB:false,
  seedDBForce:true,
  db:'sql' // mongo,sql if you want to use any SQL change dialect above in sql config
}

import Knex from 'knex';
import path from 'path' // uni caminhos de acordo com o sistema operacional

const connection = Knex({
  client:'sqlite3',
  connection:{
    filename:path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault:true,
});

export default connection;
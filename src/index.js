const express = require('express')
const app = express()

const dotenv = require('dotenv');

// Configuracion archivo - variables de entorno
const envFile = "./src/config/.env";
dotenv.config({ path: envFile });

dotenv.config();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send(`Variable de entorno ${process.env.DB_HOST}`);
})

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}`)
})
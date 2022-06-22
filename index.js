const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const routerClientes=require('./routes/clientes.router');

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.use('/clientes',routerClientes);
app.listen(port, () => {
  console.log('Mi port:' +  port);
});
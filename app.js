const express = require('express');
const app = express();
const port = 8091;
const routes = require('./roots/routes')

app.use(routes);

app.listen(port,()=> {
    console.log(`Servidor rodando na porta : http://localhost:${port}`);
});

module.exports = app;
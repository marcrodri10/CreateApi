const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
const materialsRouter = require('./routes/materialsApi');
const processesRouter = require('./routes/processesApi');

app.use('/api/materials', materialsRouter);
app.use('/api/processes', processesRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
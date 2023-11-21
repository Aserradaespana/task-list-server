const express = require('express');
const app = express();
const port = 3000;

const tareas = [
    { id: 1, nombre: 'Tarea 1', 
    completado: false },
    { id: 2, nombre: 'Tarea 2', 
    completado: true },
    { id: 3, nombre: 'Tarea 3', 
    completado: false },
];

app.get('/tareas', (req, res) => {
    res.json(tareas);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
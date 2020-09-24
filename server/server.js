require('./config/config');
const express = require('express');
const app = express();


const bodyParse = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParse.urlencoded({ extended: false }));

// parse aplication/json
app.use(bodyParse.json());

// const port = process.env.PORT || 8989;

app.get('/', (req, res) => {
    res.json('HOLI!!!');
});

app.get('/usuario', (req, res) => {
    res.json('get Usuario');
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'Debe incluir un nombre'
        });
    } else {
        res.json({
            body
        });
    }
});


app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;
    res.json({
        id
    });
});


app.delete('/usuario', (req, res) => {
    res.json('delete Usuario');
});



app.listen(process.env.PORT, () => {
    console.log(`Listen in ${process.env.PORT}`);
});
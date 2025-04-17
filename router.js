const express = require('express');
const router = express.Router();    

//index
router.get('/', function(req, res) {
    res.send('lista del menu!');
});

//show
router.get('/:id', function(req, res) {
    res.send('dettagli del menu!');
});

//store
router.post('/', function(req, res) {
    res.send('creazione del menu!');
});

module.exports = router;
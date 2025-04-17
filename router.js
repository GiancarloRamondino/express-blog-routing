const express = require('express');
const router = express.Router();    

//index
router.get('/', function(req, res) {
    res.send('lista del menu!');
});

//show
router.get('/:id', function(req, res) {
    res.send('dettagli del menu!'+req.params.id);
});

//store
router.post('/', function(req, res) {
    res.send('creazione del menu!');
});

//update
router.put('/', function(req, res) {
    res.send('modifica del menu!');
});

//modifica
router.patch('/', function(req, res) {
    res.send('modifica parziale del menu!');
});

//delete
router.delete('/', function(req, res) {
    res.send('cancellazione del menu!');
});

module.exports = router;
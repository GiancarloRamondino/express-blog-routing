//importo expreess
const express = require('express');
//inizializzo express nella variabile  app
const app = express();
//deefinisco il numero di porta
const port = 3000;

//imposto asset statici
app.use(express.static('public'));

//definisco la rotta principale
app.get('/', (req, res) => {
  res.send('Server del mio blog!');
});

//definisco la rotta per il blog
app.get('/bacheca', (req, res) => {
    const menu = [{
        title: "ciambellone",
        contenuto: "Ecco la ricetta del ciambellone",
        images: 'ciambellone.jpeg',
        tag: ['home', 'blog', 'contatti']
    },
    {
        title: "cracker",
        contenuto: "Ecco la ricetta dei cracker",
        images: 'cracker_barbabietola.jpeg',
        tag: ['home', 'blog', 'contatti']
    },
    {
        title: "pane fritto",
        contenuto: "Ecco la ricetta del pane fritto",
        images: 'pane_fritto_dolce.jpeg',
        tag: ['home', 'blog', 'contatti']
    },
    {
        title: "pasta  alla barbabietola",
        contenuto: "Ecco la ricetta della pasta alla barbabietola",
        images: 'pasta_barbabietola.jpeg',
        tag: ['home', 'blog', 'contatti']
    }, 
    {
        title: "torta paesana",
        contenuto: "Ecco la ricetta della torta paesana",
        images: 'torta_paesana.jpeg',
        tag: ['blog', 'contatti']
    }];

    // Applico un filtro per il titolo
    const title = req.query.title;
    // Dichiarazione della variabile per il menu filtrato
    let filteredMenu;
    // Verifico se la variabile title contiene un valore e non è indefinita
    if (title) {
        filteredMenu = menu.filter((item) => {
            return item.title.includes(title);
        });
    } else {
        filteredMenu = menu;
    }
    
    res.json(filteredMenu);
});

//server che ascolta sulla porta 3000
app.listen(port, () => {
  console.log(`Server in ascolto su ${port}`);
   
});

console.log('Server in ascolto su 3000');
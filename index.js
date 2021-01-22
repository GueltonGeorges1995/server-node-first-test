const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Home Page Route'));
app.get('/blogs', (req, res) => res.send({
    "blogs":[
        {
            "title": "My first blog",
            "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in aperiam sint dolores doloribus? Consequuntur ullam reiciendis maiores ratione natus aliquid rerum molestiae. Inventore magni velit ipsam aut, voluptas asperiores?",
            "author": "mario",
            "id": 1
        },
        {
            "title": "testing party",
            "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in aperiam sint dolores doloribus? Consequuntur ullam reiciendis maiores ratione natus aliquid rerum molestiae. Inventore magni velit ipsam aut, voluptas asperiores?",
            "author": "Pierro",
            "id": 2
        }
    ]
    
    
}
));

// app.get('/about', (req, res) => res.send('About Page Route'));

// app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

// app.get('/contact', (req, res) => res.send('Contact Page Route'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
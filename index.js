const express = require('express');
let cors = require('cors')
const app = express();
app.use(cors());


var corsOptions = {
    origin: 'https://server-node-first-test.vercel.app/blogs',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}



app.get('/', (req, res) => res.send('Home Page Route'));


// app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for only example.com.'})
//   })
  


app.get('/blogs', cors(corsOptions), (req, res) => res.send({
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

const port = process.env.PORT || 80;


// app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})
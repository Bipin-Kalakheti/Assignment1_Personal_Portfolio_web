const express = require('express');
const app = express();
const port = 3000; //setting port number

app.use(express.static('public')); 
app.set('view engine', 'ejs'); 

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        welcomeMessage: 'Welcome to My Personal Portfolio!',
        missionStatement: 'Driven by passion, dedicated to excellence.'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact-submit', (req, res) => {
    
    console.log(req.body); 
    res.redirect('/'); 
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

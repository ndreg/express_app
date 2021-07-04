const express = require('express');
const path = require('path');
const users = require('./routes/userRoutes');
const login = require('./middleware/midLogin');
const app = express();

// Settings
app.set('port', 5000);
app.set('message', 'App was connected succesfully. port '+app.get('port'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

// Middleware
app.use(login);

// Routes and controllers
app.get('/', (req, res) => {
  res.render('index', {});
})

app.use('/users',users);

// Listener
app.listen(app.get('port'), () => console.log(app.get('message')));
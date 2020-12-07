require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('./config/ppConfig');
const flash = require('connect-flash');
const SECRET_SESSION = process.env.SECRET_SESSION;
const app = express();
const axios = require('axios')
const API_KEY = process.env.API_KEY;
const db = require('./models');

// isLoggedIn middleware
const isLoggedIn = require('./middleware/isLoggedIn');

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

// secret: What we actually will be giving the user on our site as a session cookie
// resave: Save the session even if it's modified, make this false
// saveUninitialized: If we have a new session, we save it, therefore making that true

const sessionObject = {
  secret: SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}

app.use(session(sessionObject));

// Initialize passport and run through middleware
app.use(passport.initialize());
app.use(passport.session());

// Flash
// Using flash throughout app to send temp messages to user
app.use(flash());

// Messages that will be accessible to every view
app.use((req, res, next) => {
  // Before every route, we will attach a user to res.local
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

app.get('/driverSearch', (req, res) => {
  var options = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/drivers',
    params: {search: req.query.q},
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'api-formula-1.p.rapidapi.com'
    }
  };
  axios.request(options).then(function ({data}) {
    const {response} = data;
    console.log(response)
    res.render('driverSearch', {data: response});
  }).catch(function (error) {
    console.error(error);
  });
})
app.get('/teamSearch', (req, res) => {
  var options = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/teams',
    params: {search: req.query.q},
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'api-formula-1.p.rapidapi.com'
    }
  };
  axios.request(options).then(function ({data}) {
    const {response} = data;
    console.log(response)
    res.render('teamSearch', {data: response});
  }).catch(function (error) {
    console.error(error);
  });
})
app.get('/circuitSearch', (req, res) => {
  var options = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/circuits',
    params: {search: req.query.q},
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'api-formula-1.p.rapidapi.com'
    }
  };
  axios.request(options).then(function ({data}) {
    const {response} = data;
    console.log(response)
    res.render('circuitSearch', {data: response});
  }).catch(function (error) {
    console.error(error);
  });
})

app.post('/faveTeams', (req, res) => {
  db.team.create(req.body).then((createdteam) => {
    res.redirect('/faveTeams')
  })
})
app.get('/faveTeams', (req, res) => {
  db.team.findAll().then((foundteams) => {
    res.render('faveTeams', { faveTeams : foundteams })
  })
})


app.post('/faveCircuits', (req, res) => {
  db.circuit.create(req.body).then((createdcircuit) => {
    res.redirect('/faveCircuits')
  })
})
app.get('/faveCircuits', (req, res) => {
  db.circuit.findAll().then((foundcircuits) => {
    res.render('faveCircuits', { faveCircuits : foundcircuits })
  })
})


app.post('/faveDrivers', (req, res) => {
  db.driver.create(req.body).then((createddriver) => {
    res.redirect('/faveDrivers')
  })
})
app.get('/faveDrivers', (req, res) => {
  db.driver.findAll().then((founddrivers) => {
    res.render('faveDrivers', { faveDrivers : founddrivers })
  })
})









































app.get('/', (req, res) => {
  console.log(res.locals.alerts);
  res.render('index', { alerts: res.locals.alerts });
});

app.get('/profile', isLoggedIn, (req, res) => {
  res.render('profile');
});



app.use('/auth', require('./routes/auth'));

// Route to handle bad links/URLs
app.use(function (req, res) {
  res.status(404).render('error');
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;
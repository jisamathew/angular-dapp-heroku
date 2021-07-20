// function requireHTTPS(req, res, next) {
//     // The 'x-forwarded-proto' check is for Heroku
//     if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
//         return res.redirect('https://' + req.get('host') + req.url);
//     }
//     next();
// }
const PORT = process.env.PORT || 8080
const express = require('express');
const path = require('path');

const app = express();

// app.use(requireHTTPS);
app.use(express.static('./dist'));
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: 'dist/'}
  );
  });
  app.listen(PORT, () => {
    console.log(`AngularEthereum HelloWorld App running on port ${PORT}...`);
  });

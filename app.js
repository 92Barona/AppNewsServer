const express    = require('express');
const expressCfg = require('./app/config/config.express'); 
const router     = require('./app/router'); 
const app        = express();
const config     = require('./app/config/config.json');

expressCfg.build(app, express);
router.redirect(app);

app.listen(config.port);
console.log('Listening on 3000');
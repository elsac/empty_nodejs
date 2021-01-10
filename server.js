//all requires
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
const locations = require('./routes/locations.route');
//const mongoose = require('mongoose');

//connection to mongoose atlast
/*let dev_db_url = 'mongodb://elsa:root@cluster0-shard-00-00-ihqll.mongodb.net:27017,cluster0-shard-00-01-ihqll.mongodb.net:27017,cluster0-shard-00-02-ihqll.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));*/


//configurations
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);
app.use('/locations', locations);

//routes
app.get('/', function (req, res) {
  res.render('index');
})

app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})

//create server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

let express  = require('express');
let bodyParser = require('body-parser');
let config = require('config');
let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req,res) {
    res.status(200).send('Hello, world!');
});

let todos = require('./Routes/todos');
app.use('/todos',todos);

let port = process.env.PORT || config.get("PORT") ;
let host = process.env.HOST || config.get("HOST");

app.listen(port,host,function () {
    console.log(`listen on ${host}:${port}`)
});

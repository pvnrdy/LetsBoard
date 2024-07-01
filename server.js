const bodyParser = require('body-parser');
var express = require('express');
var app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


app.post('/signup', (req, res) => {
  const signUpUserName = req.body.username;
  const signUpPassword = req.body.password;
  console.log(`Signup successful for username: ${signUpUserName}`);
  res.send('Login successful' );
});

// Handle login request
app.post('/login', (req, res) => {
  const loginUserName = req.body.username;
  const loginPassword = req.body.password;
  
  // Verify username and password from database
  console.log(`Login attempt for username: ${loginUserName}`);
  res.send('Login successful' );
});

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });



app.get('/', function(req, res){
  res.sendFile(__dirname + '/login.html');
});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
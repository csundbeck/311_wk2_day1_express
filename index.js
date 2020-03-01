
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state');

/* BEGIN - create routes here */

//GET /users
app.get('/users', function (req, res) {
  res.json(users)
});

//GET /users/1
app.get('/users/1', function (req, res){
  res.json(users[0])
});

//POST /users
app.post('/users', function (req, res) {
  users.push({
    '_id': users.length+1,
    'name': 'Rocky Balboa',
    'occupation': 'Boxer',
    'avatar': "https://upload.wikimedia.org/wikipedia/en/5/53/Rocky_balboa.jpeg"
  })  
  res.json(users[users.length-1])
})

//PUT /users/1
app.put('/users/1', function (req, res) {
  res.json(users[0].occupation = 'Firefighter');
})

//DELETE /users/1
app.delete('/users/1', function (req, res) {
  res.send('user 1 has been deleted')
})


// ## Part 2. Body-parser module
app.use(bodyParser.json());

app.post('users/:userId', function(req, res) {
  const id = req.params.id;

  let newUser = {
    '_id': id,
    'name': req.body,
    'occupation': req.body,
    'avatar': req.body
  }
  users.push(newUser);
  res.send(newUser);
})

app.put('users/:userId', function(req, res) {
  const id = req.params.id;
  res.json(users[id].occupation = 'Software Developer');
})

app.get('users/:userId', function(req, res) {
  const id = req.params.id;
  res.send(user[id]);
});

//## Part 3. Use path variables
app.get('/users/:userId', function (req, res) {
  res.send(req.headers);
})

app.put('/users/:userId', function(req, res) {
  res.json('Unemployed');
})

app.delete('/users/:userId', function(req, res) {
  res.send(`user has been deleted`);
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))
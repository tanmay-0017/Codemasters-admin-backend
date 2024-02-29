const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3003;
const dbConnect = require("./dbConnect.js");
const cors = require('cors');
app.use(cors());
const User = require("./User.js");
// Store answers in an object
const answers = {};
let answerA = "";
let answerB = "";
let answerC = "";
let answerD = "";
let answerE = "";
let answerF = "";
let answerG = "";
// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Route to handle form submissions
app.post('/submit', (req, res) => {
  const problemName = req.body.problemName;
  const answer = req.body.answer;

  // Store the answer in the answers object
  answers[problemName] = answer;

  console.log(`Received answer for problem "${problemName}": ${answer}`);

  res.status(200).send('Form submitted successfully');
});


app.post('/solution/A', (req, res) => {
    answerA = req.body.data;
  res.status(200).send("Done");
});


app.post('/add/user' , (req , res) => {
    const newUser = new User({
        name: req.body.name,
        verified: false
    });
    
    newUser.save()
            .then(savedUser => {
                console.log("User saved:", savedUser);
            })
            .catch(error => {
                console.error("Error saving user:", error);
            });
        
    res.status(200).send("Added");
})

app.post('/verifyPayment' , async (req , res) => {
    try{
        const name = req.body.name;
        const user = await User.findOne({name});
        if(!user){
            res.status(200).send(false);
        }
        else{
            res.status(200).send(user.verified);
        }
    }
    catch(e){
        res.status(401).send("Error Occurred");
    }
})


app.get('/solution/A', (req, res) => {
    res.status(200).send(answerA);
});

app.post('/solution/B', (req, res) => {
    answerB = req.body.data;
    res.status(200).send("Done");
});

app.get('/solution/B', (req, res) => {
    res.status(200).send(answerB);
});

app.post('/solution/C', (req, res) => {
    answerC = req.body.data;
  res.status(200).send("Done");
});

app.get('/solution/C', (req, res) => {
    res.status(200).send(answerC);
});

app.post('/solution/D', (req, res) => {
    answerD = req.body.data;
  res.status(200).send("Done");
});

app.get('/solution/D', (req, res) => {
    res.status(200).send(answerD);
});

app.post('/solution/E', (req, res) => {
    answerE = req.body.data;
  res.status(200).send("Done");
});

app.get('/solution/E', (req, res) => {
    res.status(200).send(answerE);
});

app.post('/solution/F', (req, res) => {
    answerF = req.body.data;
  res.status(200).send("Done");
});

app.get('/solution/F', (req, res) => {
    res.status(200).send(answerF);
});

app.post('/solution/G', (req, res) => {
    answerG = req.body.data;
  res.status(200).send("Done");
});

app.get('/solution/G', (req, res) => {
    res.status(200).send(answerG);
});

dbConnect();
// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

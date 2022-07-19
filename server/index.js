const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.
const goals = []
let id = 1;
const compliments = ["You are smart",
"Nice shoes",
"You are great ",
];

const fortune = [
   `A hunch is creativity trying to tell you something.`,
				`A lifetime friend shall soon be made.`,
        `A lifetime of happiness lies ahead of you.`,
        `A light heart carries you through all the hard times.`,
        `A fresh start will put you on your way.`
]
app.get("/api/compliment", (req, res) => {
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];
  res.status(200).send(randomFortune);
  
});

app.post("/api/goals", (req, res) => {
  const { goal } = req.body
  let newGoal = {
    id, 
    item
  };
  goals.push(newGoal)
  id++

  res.status(200).send(goals)
  console.log(goals)
});

app.delete('/api/goals/:goalId', (req, res) => {
  const itemId = +req.params.goalId;
  console.log(itemId)
  const tgtInd = goals.findIndex(itemObj => {
    return itemObj.id === goalId;
  })
  const removed = goals.splice(tgtInd, 1)

  res.status(200).send([removed[0], goals ])

})
app.listen(4000, () => console.log("Server running on 4000"));

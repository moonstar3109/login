const express = require('express')
const app = express();
const port = 5000;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://moonstar:dlwnsgus12@learnnode.x4vmhxs.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MonogoDB Connect'))
  .catch(err => console.log('Connect error : '+ err))

app.get('/', (req,res) => {
    res.send('Hell')
})

app.listen(port, () => console.log(`start port ${port}`))
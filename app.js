const express = require('express');
const path = require('path');
const app = express(); 
const PORT = 3000;
//const mongoose = require('mongoose');
//const bcrypt = require("bcryptjs");
//const bodyParser = require("body-parser");
//const cors = require("cors");

//app.use(bodyParser.json());
//app.use(cors());

app.use(express.static(path.join(".", "final")));

//router.get('/:username', async(req, res) =>
//    try {
//      const user = await User.findByUsername(req.params.username);
//      if (!user) return res.status(404).json({ error: no account });
//      res.json(user);
//  } catch (err) {
//      res.status(500),json({ error: err.message });
//  }
//})

//router.post('/', async (req, res) => {
//  try {
//      const { username, password } = req.body;
//      const newUser = new User({ username, password });
//      await.newUser.save();
//      res.status(201).json(newUser);
//  } catch (err) {
//      res.status(400).json({ error: err.message });
//  };
//});

app.listen(PORT, () => {
console.log(`server running on port ${PORT}`);
})
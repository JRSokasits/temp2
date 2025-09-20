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

app.use(express.static(path.join(".", "testpublic")));

app.listen(PORT, () => {
console.log(`server running on port ${PORT}`);
})

//app.use(morgan('tiny'));
//app.use(express.json());
//app.use(express.urlencoded());
//const createAccount = require("./genericfoldername/createAccount");
//const PORT = process.env.PORT || 3000;

//MongoDB Atlas connection string
//const MONGO_URI = "mongodb+srv://jrsokasits:aCTrXMkfT37RRgdv@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority";

// Middleware
//app.use(bodyParser.json());

// Connect to MongoDB
//mongoose.connect(MONGO_URI, {
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
//})
//.then(() => console.log("Connected to MongoDB Atlas"))
//.catch((err) => console.error("MongoDB connection error:", err));

//register block (create credentials, hash and salt credentials, upload to database)
//app.put ?
//app.post("/api/register", async (req, res) => {
//const { username, password } = req.body;
//const hashedPassword = await bcrypt.hash(password, 10);

//const newUser = new User({ username, password: hashedPassword });
//await newUser.save();

//res.json({ success: true, message: "User registered" });
//});

//app.listen(5000, () => console.log("Server running on http://localhost:5000"));  change port?

//login block (verify credentials against database, return no or open data edit page)
//use req res next, request verification, positive response opens editing page
//app.get username, password
//request data block (reading database, return user profile, get middleware)
//exports = function() {
//const mongodb = context.services.get("mongodb-atlas");
//const itemsCollection = mongodb.db("cluster0name").collection("name");
//const purchasesCollection = mongodb.db("cluster0name").collection("anothername");
//}

//edit and save data block (upload to database user profile)
//use 

//delete block (remove credentials from database)
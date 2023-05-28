// To connect with your mongoDB database
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:2qilMZkDxHMaMSGH@ippopay.qyg3e8r.mongodb.net/Ippopay?retryWrites=true&w=majority', {
 dbName: 'Ippopay',
 useNewUrlParser: true,
 useUnifiedTopology: true
}, err => err ? console.log(err) :
 console.log('Connected to database...'));

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000...");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 resp.send("App is Working...");
});

const Ippopay =  require('./models/Ippopay');

app.post("/save", async (req, resp) => {
	try {
		const response = await Ippopay.create({
			...req.body
		})
		resp.send(response);
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.get("/get", async (req, resp) => {
	try {
		const response = await Ippopay.find({})
		resp.send(response);
	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

app.listen(5000);


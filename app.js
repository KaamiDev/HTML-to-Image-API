// require modules
require('dotenv').config();
const express = require('express');

// initialize app
const app = express();

// setup boilerplate
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/render', (req, res) => {
	if (req.headers.authorization === process.env.AUTH_KEY) {
		if (req.body.html && req.body.css) {
		} else {
			res.status(400).send('Some fields are missing with request.');
		}
	} else {
		res.status(403).send('Auth key missing with request.');
	}
});

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started and running on port' + PORT));

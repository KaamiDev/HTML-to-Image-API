// require modules
const express = require('express');

// initialize app
const app = express();

// setup boilerplate
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/render', (req, res) => {
	res.send('test');
});

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started and running on port' + PORT));

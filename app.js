// require modules
require('dotenv').config();
const express = require('express');
const puppeteer = require('puppeteer');

// initialize app
const app = express();

// setup boilerplate
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
(async () => {
	const browser = await puppeteer.launch();
	app.post('/render', (req, res) => {
		if (req.headers.authorization === process.env.AUTH_KEY) {
			if (req.body.html && req.body.css) {
				(async () => {
					const page = await browser.newPage();
					await page.setContent(`<style>${req.body.css}</style><div>${req.body.html}</div>`);
					const content = await page.$('div');
					const buffer = await content.screenshot({ type: 'png' });
					await page.close();
					res.send('data:image/png;base64,' + buffer.toString('base64'));
				})();
			} else {
				res.status(400).send('Some fields are missing with request.');
			}
		} else {
			res.status(403).send('Auth key missing with request.');
		}
	});
})();

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started and running on port ' + PORT));

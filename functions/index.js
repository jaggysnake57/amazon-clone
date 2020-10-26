const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_hcdJs4JTsRRNuteYwoZu4drW');

//app config
const app = express();
//middleware
app.use(cors({ origin: true }));
app.use(express.json());
//api routes
app.get('/', (req, res, next) => res.status(200).send('hello world'));

app.post('/payments/create', async (req, res, next) => {
	const total = req.query.total;
	console.log('payment request recivied', total);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd',
	});
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

//listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-cc3ef/us-central1/api

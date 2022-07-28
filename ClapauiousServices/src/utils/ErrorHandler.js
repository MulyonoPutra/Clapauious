const express = require('express');

const app = express();

const errorHandler = () => {
	app.use((error, req, res) => {
		const status = error.statusCode || 500;
		const { message } = error;
		const { data } = error;
		res.status(status).json({ message, data });
	});
};

module.exports = { errorHandler };

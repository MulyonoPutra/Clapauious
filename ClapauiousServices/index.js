/* eslint-disable no-console */
/* eslint-disable no-shadow */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const error = require('./src/utils/ErrorHandler');
const fileConfig = require('./src/config/FileConfig');

require('dotenv').config();

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

const authRoutes = require('./src/routers/AuthRoute');
const movieRoutes = require('./src/routers/MovieRoute');

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(
	multer({
		storage: fileConfig.fileStorage,
		fileFilter: fileConfig.fileFilter,
	}).single('images'),
);

app.use('/v1/auth', authRoutes);
app.use('/v1/movies', movieRoutes);

app.use((error, request, response) => {
	response?.status(500).send({ message: error?.message });
});

error.errorHandler();

app.use(cors());

mongoose
	.connect(process.env.ENVIRONMENT)
	.then(() => {
		app.listen(5000, () => console.log('Connected to the MongoDB'));
	})
	.catch((err) => console.log(err));

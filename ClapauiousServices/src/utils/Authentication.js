/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const jwt = require('jsonwebtoken');

generateToken = (user) => jwt.sign(
	{
		_id: user._id,
		name: user.name,
		email: user.email,
		isAdmin: user.isAdmin,
	},
	process.env.JWT_SECRET || 'somethingsecret',
	{ expiresIn: '30d' },
);

isAuth = (req, res, next) => {
	const { authorization } = req.headers;
	if (authorization) {
		const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
		jwt.verify(
			token,
			process.env.JWT_SECRET || 'somethingsecret',
			(err, decode) => {
				if (err) {
					res.status(401).send({ message: 'Invalid Token' });
				} else {
					req.user = decode;
					next();
				}
			},
		);
	} else {
		res.status(401).send({ message: 'No Token' });
	}
};

module.exports = { generateToken, isAuth };

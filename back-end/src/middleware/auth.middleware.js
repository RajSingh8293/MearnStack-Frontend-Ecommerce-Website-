// import Jwt from 'jsonwebtoken'
// const jwtKey = 'e-com'

// export const verifyToken = (req, res, next) => {
// 	const token = req.headers['authorization']
// 	if (token) {
// 		// let getToken = token.split(' ');
// 		// console.log("Hello middleware", getToken[1]);
// 		let getToken = token.split(' ')[1]
// 		console.log('Hello middleware', getToken)
// 		Jwt.verify(getToken, jwtKey, (err, success) => {
// 			if (err) {
// 				res.status(401).send({ result: 'Please provide valid token' })
// 			} else {
// 				next()
// 			}
// 		})
// 	} else {
// 		res.send({ result: 'Please add token with header' })
// 	}
// 	console.log('Hello middleware', token)

// }
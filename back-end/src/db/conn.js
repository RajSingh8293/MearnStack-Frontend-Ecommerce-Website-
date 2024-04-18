import mongoose from 'mongoose'

const connetDb = async () => {
	try {
		await mongoose.connect(`mongodb://127.0.0.1/mearn-stack-ecommerce-website`)
		console.log("Connected");
	} catch (error) {
		console.log("Error : ", error.message);
	}
}
export default connetDb;




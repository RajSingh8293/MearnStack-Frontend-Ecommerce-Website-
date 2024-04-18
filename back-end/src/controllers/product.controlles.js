import Product from "../model/product.model.js"

export const getProducts = async (req, res) => {

	try {
		let products = await Product.find()
		res.status(201).json({
			success: true,
			products
		})

	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Something wrong with getting data",
			error
		})
	}


}

export const addProduct = async (req, res) => {

	try {
		let product = await Product(req.body)
		let data = await product.save()
		res.status(201).json({
			success: true,
			product: data
		})

	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Something wrong with getting data",
			error
		})
	}


}

export const getProductById = async (req, res) => {
	const product = await Product.findById(req.params.id)

	try {
		if (!product) {
			res.status(201).json({
				success: false,
				message: "Product not found",
				product
			})

		}

		res.status(201).json({
			success: true,
			product
		})

	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Something wrong with getting data",
			error
		})
	}


}


export const searchProduct = async (req, res) => {
	try {
		const data = await Product.find({
			$or: [
				{ name: { $regex: req.params.key } },
				{ description: { $regex: req.params.key } },
			],
		})
		res.status(201).json({
			success: true,
			product: data
		})
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Something wrong with searching data",
			error
		})

	}
}
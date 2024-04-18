import mongoose from 'mongoose'
// import ObjectID from mongoose.Schema.Types.ObjectId

const ProductSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},

		name: {
			type: String,
			required: true,
			trim: true,
		},
		title: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		featured: {
			type: Boolean,
			// default: false
		},
		reviews: [{
			name: {
				type: String,
				required: true,
			},
			rating: {
				type: Number,
				required: true,
			},
			comment: {
				type: String,
				required: true,
			},
			userId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
				required: true,
			},
		}],
		price: {
			type: Number,
			required: true,
		},
		oldPrice: {
			type: Number,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		stock: {
			type: Number,
			required: true,
		},
		ratings: {
			type: Number,
			required: true,
		},
		numReviews: {
			type: Number,
			required: true,
		},

	},
	{
		timestamps: true,
	},
)

const Product = mongoose.model('Product', ProductSchema)
export default Product

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	product_name: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true
	},
	created_at: {
		type: Date,
		required: true
	}
});

module.exports = mongoose.model('Products', productSchema);
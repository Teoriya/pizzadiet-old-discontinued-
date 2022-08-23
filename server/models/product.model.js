const { model, Schema } = require("mongoose");

const product = new Schema({
  img: { type: String, required: true },
  name: { type: String, required: true, unique:true },
  desc: { type: String, required: true },
  type: { type: String, enum: ["Pizza", "Dessert"], required: true },
  options: {
    type: [
      {
        size: { type: String, required: true,enum: ["Small", "Medium" ,"Large" , "none"] },
        price: { type: Number, required: true },
        toppingOptions:[{ type: String,enum:['Veg Toppings','Extra Cheese topping','Cheese Burst','Double Burst'] ,required: true }]
      },
    ],
  },
});

model("products", product);

module.exports = {
  model: model("products"),
  schema: product,
};

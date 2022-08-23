// Importing File Dependencies
const product = require("../models/product.model.js").model;
const commonUtils = require("../utils/common.utils");

module.exports = {
  // Creating a user in database
  create: async (data) => {
    try {
      const response = await product.create(data);
      return response;
    } catch (error) {
      if (error.name === "CastError") {
        throw commonUtils.customError(403, "Invalid Product Creation");
      } else if (error.code === 11000) {
        throw commonUtils.customError(409, `Following fields need to be unique : ${JSON.stringify(error.keyValue)}`);
      } else throw error;
    }
  },
  fetchAll: async () => {
    try {
      const response = await product.find();
      return response;
    } catch (error) {
      if (error.name === "CastError") {
        throw commonUtils.customError(403, "Invalid Product Querry");
      } else throw error;
    }
  },
  fetchByType: async (type) => {
    try {
      const response = await product.find({type});
      return response;
    } catch (error) {
      if (error.name === "CastError") {
        throw commonUtils.customError(403, "Invalid Product Querry");
      } else throw error;
    }
  }
};

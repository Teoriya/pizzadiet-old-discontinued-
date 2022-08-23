const productService = require("../services/product.service.js");
const commonUtils = require("../utils/common.utils.js");

module.exports = {
  create:
    ("/new",
    async (req, res) => {
      let response;
      try {
        const data = await productService.create(req.body);
        response = commonUtils.generateResponse(201, "Successful", data);
      } catch (err) {
        if (err["isCustom"] === true) {
          response = commonUtils.generateResponse(err.status, err.msg);
        } else {
          response = commonUtils.generateResponse(500, err);
        }
      }
      return res.status(response.statusCode).send(response);
    }),
  // Creating User
  fetchAll:
    ("/all",
    async (req, res) => {
      let response;
      try {
        const data = await productService.fetchAll();
        response = commonUtils.generateResponse(200, "Successful", data);
      } catch (err) {
        if (err["isCustom"] === true) {
          response = commonUtils.generateResponse(err.status, err.msg);
        } else {
          response = commonUtils.generateResponse(500, err);
        }
      }
      return res.status(response.statusCode).send(response);
    }),
    fetchByType:
    ("/type/:type",
    async (req, res) => {
      let response;
      try {
        const data = await productService.fetchByType(req.params.type);
        response = commonUtils.generateResponse(200, "Successful", data);
      } catch (err) {
        if (err["isCustom"] === true) {
          response = commonUtils.generateResponse(err.status, err.msg);
        } else {
          response = commonUtils.generateResponse(500, err);
        }
      }
      return res.status(response.statusCode).send(response);
    }),
};

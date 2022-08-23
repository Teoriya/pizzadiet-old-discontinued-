const router = require('express').Router();
// const { validate, ValidationError } = require('express-validation');
const product = require('../controllers/product.controller');
// const authMiddleware = require('../middlewares/auth.middleware');
// const { signUpSchema, loginSchema, checkSchema, editSchema, changePasswordSchema } = require('../models/user.validators.js');

// User Routes
router.get('/all',product.fetchAll);
router.get('/type/:type',product.fetchByType);
router.post('/new',product.create);


// Validation Error Handling
// router.use((err, req, res, next) => {
//   if (err) {
//     const { name, details, statusCode } = err;
//     if (err instanceof ValidationError) {
//       return res.status(err.statusCode).json({ statusCode, name, message: details.body[0].message });
//     }
//     return res.status(500).json(err);
//   }
//   next();
// });

module.exports = router;
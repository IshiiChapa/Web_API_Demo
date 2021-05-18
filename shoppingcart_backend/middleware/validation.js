
const { register } = require('./registerschema');
 
module.exports = {

    registerValidation: async (req, res, next) => {
 // eslint-disable-next-line no-console
 console.log('Product validaion running...'.blue);
 // Add console log message and change color to blue (process)
 const value = await register.validate(req.body);
 // Validating request body using schema validations.
 if (value.error) {
 // eslint-disable-next-line no-console
 console.log('Product validaion failed!'.red);
 // Add console log message and change color to red (failiure)
 return res.status(404).json({
 success: 0,
 message: value.error.details[0].message,
 });
 }
 // eslint-disable-next-line no-console
 console.log('Product validaion successfull.'.green);
 // Add console log message and change color to green (success)
 next();
 },
};
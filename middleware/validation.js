const { body, validationResult } = require('express-validator');


exports.validationSignUp = [
    body('password','the password must containt at least 5 characters').isEmpty(),
    body('email','the email must be a correct email format').isEmpty().isEmail(),
    body('projectName','the project name  must not be empty').isEmpty()
]


exports.validationSignIn = [
    body('password','the password must containt at least 5 characters').isEmpty(),
    body('email','the email must be a correct email format').isEmpty().isEmail()
]



exports.isValid = async (req, res, next) => {
    const errors = validationResult(req.body);
    try {
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          next();
          
    } catch (error) {
        res.status(400).send({msg:'Error in validating'})
    }
}


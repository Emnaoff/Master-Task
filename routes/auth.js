const express = require ('express');
const auth = express.Router();
const {authSignUp , authSignIn} = require('../controllers/user.controllers');
const {isValid, validationSignUp, validationSignIn} = require('../middleware/validation');
const {isAuth} = require('../middleware/isAuth')

auth.post('/signup',validationSignUp,isValid,authSignUp );
 
auth.post('/signin',validationSignUp,isValid,authSignIn );

auth.get('/current' ,isAuth, (req,res) => {
  res.send(req.user)
})

module.exports = auth;
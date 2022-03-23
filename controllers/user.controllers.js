const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const userSchema = require ('../models/user.models');


exports.authSignUp = async (req,res)=>{
    const {projectName,email,password,role} = req.body
    try {
        const find = await userSchema.findOne({email:email});
        if(find){
            res.status(400).send({msg:'This email is already used for an existant user.'})
        }
        const user = new userSchema(req.body);
        const salt = 10;
        const hashedPassword = bcrypt.hashSync(password,salt);
        const userID = {id:user._id};
        const token = jwt.sign(userID, process.env.SECRET_OR_KEY);
        user.password = hashedPassword;
        await user.save();
        res.status(200).send({msg:'User registred successfully',token})

    } catch (error) {
     res.status(400).send({msg:'Error while registring'})
    }
}


exports.authSignIn = async (req,res)=>{
    const {email,password} = req.body;
    try {
        const find = await userSchema.findOne({email:email});
        
        if(!find) {
              res.status(400).send({msg:'User does not exist'})
        }
        const match = bcrypt.compareSync(password, find.password)
        if(!match){
            res.status(400).send({msg:'Bad Credentials.'})
        }
        const userID = {id:find._id};
        const token = jwt.sign(userID, process.env.SECRET_OR_KEY);
        res.status(200).send({msg:'Logged In Successfully',token})

    } catch (error) {
        res.status(400).send({msg:'Error while signing In'})
    }
}




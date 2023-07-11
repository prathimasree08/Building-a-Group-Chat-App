const User = require('../Models/user');
const bcrypt = require('bcrypt');

exports.postSignUpUser = async (req, res, next) => {
    
    try{
        const { name, email,mobile, password } = req.body;
    
        const user = await User.findOne({ where:{ email: email }})
        if (user) {
            return res.status(409).json({ error: "User already exists" });
        }
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async (err, hash)=>{
            if(err){
              console.log(err);  
            }
            const result= await User.create({
                name: name,
                email: email,
                mobile: mobile,
                password: hash
            })
                return res.status(200).json(result);
        })
       
    }
    catch(err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
    };
}
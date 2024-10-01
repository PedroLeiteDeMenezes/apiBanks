import User from "../models/user";
import jsonwebtoken from 'jsonwebtoken'

class TokenController{
    
    async store(req, res){
        const {email = '', password = ''} = req.body;

        if(!email || !password){
            return res.status(401).json({
                errors: ['Invalid email or password'],
            })
        }

        const user = await User.findOne({where: { email } })
        
        if(!user){
            return res.status(401).json({
                errors: ['Invalid User']
            })
        }

        if(!(await user.passwordIsValid(password))){
            return res.status(401).json({
                errors: ['Invalid Password']
            });
        }

        const { id } = user
        const token =  jsonwebtoken.sign({ id, email }, process.env.TOKEN_SECRET,{
            expiresIn: process.env.TOKEN_EXPIRATION,
        })

       return res.json({ token, user: {name: user.first_name, last_name: user.last_name, id: user.id, email:user.email}})
    }
}

export default new TokenController();
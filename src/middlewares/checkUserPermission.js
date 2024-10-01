import User from '../models/user'

export const checkUserPermission = async (req, res, next) => {
    try{
        //Verify if user exist
        const user  = await User.findByPk(req.params.id);

        if(!user){
            return res.status(404).json({ error: 'User not Found' })
        }

        //Verify if user have permission
        if(user.id !== req.userID){
            return res.status(403).json({ error: "You don't have permission for update this user " })
        }
        return next()
    }catch(error){
        return res.status(500).json({ error: error.message })
    }
}
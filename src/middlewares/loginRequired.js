import jsonWebToken from 'jsonwebtoken' 

export default (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).json({
            errors:['Login Required']
        })
    }
    
    const [, token] = authorization.split(' ');

    try{
        const dados = jsonWebToken.verify(token, process.env.TOKEN_SECRET)
        const {id, email} = dados
        req.userID = id
        req.userEmail = email
        return next()
    }catch{
        return res.status(401).json({
            errors: ['Expired Token or Invalid']
        })
    }
}
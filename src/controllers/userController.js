import User from "../models/user";

const generateAccountNumber = () => {
    return Math.floor(1000000000  + Math.random() * 9000000000).toString()
}

const generateAgency = () => {
    return Math.floor(1000 + Math.random() * 9000).toString()
}

class UserController{
    async store(req, res){
        try{
            const {first_name, last_name, email, password, cpf, date_of_birth, address, phone, account_type} = req.body

            const newUser = await User.create ({
                first_name,
                last_name,
                email,
                password,
                cpf,
                date_of_birth,
                address,
                phone,
                account_type,
                account_number: generateAccountNumber(),
                agency: generateAgency(),
                balance: 0.00,
                status: 'active'
            })
            res.json(newUser)
        }catch(error){
            // Caso ocorra algum erro, retorna uma resposta de erro
            res.status(500).json({error: error.message})
        }

    }

    async getId(req, res){
        try{
            const user = await User.findByPk(req.params.id)
            res.json(user)
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }

    async getAll(req, res){
        try{
            const users = await User.findAll({
                where: req.query
            })
            res.json(users)
        }catch(error){
            res.status(500).json({error:error.message})
        }
    }

    async put(req, res){
        try{
            const user = await User.findByPk(req.params.id)

            if(!user){
                return res.status(404).json('User not found')
            }

            const userUpdate = await user.update(req.body)

            res.json(userUpdate)
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }
    
    async delete(req, res){
        try{
            const user = await User.findByPk(req.params.id)

            const userDelete = await user.destroy(req.body)

            res.json(userDelete)
        }catch(error){
            res.status(500).json({error: error.message})
        }
    }
}

export default new UserController();
const {User} = require('../db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const RegisterAux = async (body) => {

    let password = bcrypt.hashSync(body.password, Number.parseInt(10))
    try {
        const user = await   User.create({
            name: body.name,
            lastname: body.lastname,
            email: body.email,
            password: password,
            type: body.type
        });
        
        let token = jwt.sign({user: user}, 'pepe', {
            expiresIn: "24h"
        });
       // res.cookie('useToken', user[0].id)
        return{message:"create",  user}
    } catch (error) {
        return {message: "error", error};
    }
}

const Register = async (req, res) => {
        const user = await RegisterAux(req.body);

        if(user.message === 'create') res.json(user)
        if(user.message === 'error') res.status(500).json(user)
    
}

const Login = async (req, res) => {
    const {email, password} = req.body;
    console.log(email)

    try {
        const user = await User.findOne({
            where: {email: email},
            attributes:[  'id','name','lastname', 'email', 'password', 'type']
        });
        console.log(user)
        if(!user){
            res.status(404).json({msg: 'Usuario no encontrado'})
        }else{
            if(bcrypt.compareSync(password, user.password)){

                //Creamos el token
                let token = jwt.sign({user: user}, 'pepe', {
                    expiresIn: "24h"
                });

                //res.cookie('userToken', token)
                res.json({
                    token: token,
                    type: user.type
                })
            }else{
                res.status(401).json({msg: "Contraseña incorrecta"})
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

}

const Authentication = async (req, res) => {
    const user = req._user.user;

    try {
        const resUser = await   User.findOne({where:{id: user.id}})

        resUser === null 
            ? res.status(500).json({message: 'user eliminado'}) 
            : res.send(resUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = {
    Register,
    RegisterAux,
    Login,
    Authentication
}
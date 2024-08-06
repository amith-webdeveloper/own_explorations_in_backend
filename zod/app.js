import express from 'express'
import { z } from 'zod'

const app = express()

app.use(express.json())

const loginSchema = z.object({
    username:z.string(),
    password:z.string().min(8)
    
})

function checkauth(req , res , next){
    const username = req.body.username;
    const password = req.body.password;

    loginSchema.safeParse({username , password})

    next()
   
}

app.get('/login' , checkauth , function(req , res){

    res.send(' successfully logged !')
})

app.listen(3000)
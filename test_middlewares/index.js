const express = require('express')
const app = express()


function checkBalance(req , res , next){
    let amt = req.query.amt;
    if(amt >= 500){
        next()
    }else{
        res.send('you not have suffiecient balance!')
    }

}

app.use(checkBalance)

app.get('/pay',function(req , res){
    res.send('you can pay')
})

app.listen(3000)
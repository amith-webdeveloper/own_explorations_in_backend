import express from "express";

const app = express()

// app.use(express.urlencoded({extended:true}))
// app.use(express.json())

// without using middlewares
// app.get('/health-checkup' , function(req , res){
//     const kidneyID = req.query.kidneyid;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if(username != "amith" && password != '18406678'){
//         res.json({
//             msg:'user does not exist'
//         })
//         return;
//     }

//     if(kidneyID != 1 && kidneyID != 2){
//         res.json({
//             msg:'wrong inputs'
//         })
//         return;
//     }

//     res.send('your are healthy')

// }) without middlewares
function checkauth(req , res , next){
    const username =  req.headers.username;
    const password =  req.headers.password;

    if(username != "amith" && password != "18406678"){
        res.json({
            msg:"something wrong with your username and password"
        })
        return
    }
    next()

}

function checkKidney(req ,res , next){
    const kidneyId = req.query.kidneyid;
    if(kidneyId != 1 && kidneyId != 2){
        res.json({
            msg:'you entered wrong inputs!'
        })
        return;
    }

    next()

}

// with middleware
app.get('/health-checkup' ,checkauth , checkKidney, function(req , res){
    res.send('you are healthy')
})

app.listen(3000)
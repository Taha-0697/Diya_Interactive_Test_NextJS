const cors = require('cors')
require('dotenv').config();
const express = require('express');
const { createRecords } = require('./data');
const app = express();


const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors())
 
app.listen(PORT, ()=>{
    console.log(`Server started at https://localhost:${PORT}`);
})

/* --------------- */
      //USER API 
/* --------------- */


app.get('/', (req, res)=>{
    return res.status(200).send('server works');
})

//get all users
app.get('/getallusers',async (req,res,next)=>{
    setTimeout(() => {
        try {
          res.status(200).send({
          data: createRecords(),
    })
        } catch (error) {
             next(error);
        }
     
    }, 1000);
})


//get all users by id
app.get('/getuser/:id',async (req,res,next)=>{
    setTimeout(() => {
        try {
            let users = createRecords()
            let userid = users.filter((x)=> x.id === req.params.id)
          
            res.status(200).send({
          data: userid,
    })
        } catch (error) {
             next(error);
        }
     
    }, 0);
})

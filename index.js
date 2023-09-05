const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();
const generaterouter=require('./routes/generate');

const PORT=process.env.PORT;
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.setHeader("Access-Control-Allow-Credentials","true");
    res.send("API is running");
});

app.use('/generateData',generaterouter);

app.listen(PORT,()=>{
    console.log(`Listening on http://localhost:${PORT}`);
});

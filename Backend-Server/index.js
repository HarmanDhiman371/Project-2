const express = require('express');
const fs = require('fs');
const app = express();
app.get("/" , (req , res)=>{
    res.send(" server is runninng");
})
app.listen(3000 , ()=>{
    console.log('server is running on port 3000');
})
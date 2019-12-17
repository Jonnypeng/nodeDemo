import express = require("express");

let app = express();

app.get("/",(req,res)=>{
    console.log(req);
    res.set("Content-Type","text/plain");
    /**
     * @param {string} "Cache-Control"
     * @param {string} "public","private","no-cache","max-age=100000"
     */
    res.set("Cache-Control","public");
    res.cookie("name","Jonny");
    res.send("Hello World");
})

app.listen(3001,()=>{
    console.log("Your server is runing 3000");
});
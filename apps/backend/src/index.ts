import express  from "express";
const app = express();
const port = 3000;
import {BACKEND_URL} from "@repo/common/config"
console.log(BACKEND_URL);
app.get('/',(req,res)=>{
    res.send("Hello, typescript express! ")
})


app.listen(port,()=>{
console.log(`app is listening to :${port}`)
})
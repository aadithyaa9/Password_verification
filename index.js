import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

 var password = "ILoveProgramming";
 var word = ""
const app  = express();
const port = 3000 ;
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/check" , (req, res) => {
    word = req.body["password"];
    if (password === word){
        res.sendFile(__dirname + "/public/passowrd.html");
        console.log("User Logged In");
    }
    else{
        res.sendFile(__dirname + "/public/bad_password.html");
        console.log("User is Fake");
    }
});


app.get("/" , (req ,res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.listen (port , () => {
    console.log (`Listening on Port ${port}`);
})
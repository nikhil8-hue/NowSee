const express = require("express");

const app = express();
const PORT = 3000;

app.get("/" ,(req,res)=> {
    res.send("i am working fine just focus on your work")
});

app.listen(PORT, () => {
    console.log(`I am running on  http://localhost:${PORT}`);
})






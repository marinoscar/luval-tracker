import * as express from "express";
var portNum = 3000;

var app = express();

app.get('/', (req : express.Request, res : express.Response) => {
    res.send('<h1>Marin</h1>');
});

app.listen(portNum, () =>{
    console.log(`Listening in port ${portNum}`);
});

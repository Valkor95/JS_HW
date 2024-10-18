// import http from 'http';
//
// const PORT = 3000;
//
// const server = http.createServer(function (req, res) {
//     console.log("URL of your page:" + req.url);
//     res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
//     res.end("It works fine");
// });
//
// server.listen(PORT);
// console.log("We are listening port" + PORT);

import express from 'express';
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;

const users = [{id: 1, name: 'Mary'}, {id:2, name: 'Helen'}]
app.listen(PORT, () => console.log("Server started"));

app.get('/api/users/', function (req, res) {
    res.send(JSON.stringify(users));
})

app.post('/api/users/', function (req, res) {
    const newUser = req.body;
    users.push(newUser);

    res.send('Ok!')
})
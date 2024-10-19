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
const mainURL = '/api/users/'

let users = [{id: '1', name: 'Mary'}, {id:'2', name: 'Helen'}, {id:'3', name: 'Helen'}]
app.listen(PORT, () => console.log("Server started"));

app.get(mainURL, function (req, res) {
    res.send(JSON.stringify(users));
})

app.post(mainURL, function (req, res) {
    const newUser = req.body;
    users.push(newUser);

    res.json(newUser);
})

app.put(`${mainURL}:id`, function (req, res) {
    const userId = req.params.id;
    const updatedUser = req.body;

    const userIndex = users.findIndex(u => u.id === userId);

    if(userIndex !== -1){
        users[userIndex] = {...users[userIndex], ...updatedUser};
        res.json(users[userIndex]);
    } else {
        res.status(404).send('User not found');
    }
});

app.delete(`${mainURL}:id`, function (req, res) {
    const userId = req.params.id;
    const userIndex = users.findIndex(user => user.id === userId)

    if(userIndex !== -1){
        users = users.filter(user => user.id !== userId);
        res.sendStatus(204)
    } else {
        res.status(404).send('User not found')
    }

})
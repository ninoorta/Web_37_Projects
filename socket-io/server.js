const express = require('express')
const path = require('path')
const socketIo = require('socket.io')

const app = express()
const port = 9000

app.use('/', express.static(path.join(__dirname, 'static')))

const server = app.listen(port, (err) => console.log(err || 'Server open at port ' + port))

setupSocket(server)




function setupSocket(server) {
    const io = socketIo(server)

    io.on('connection', (socket) => {
        console.log('someone connect to server!');

        // send message from server to client

        let dataAsking = 'Want some foods?'
        socket.emit('asking', dataAsking)

        socket.on('answer', (answerAsYesNo) => {
            if (answerAsYesNo == 'yes') {
                socket.emit('result', 'Take this sandwich')
            } else {
                socket.emit('result', 'Have a good day!')
            }
        })

    })
}
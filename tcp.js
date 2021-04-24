const net = require("net")

const server = net.createServer(socket => {
    socket.write("Hello bilal.")
    socket.on("data", data => {
        console.log(data.toString())
    })
})

server.listen(8080)
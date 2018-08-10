const net = require("net");

const clients = [];

const server = net.createServer((client) => {
    client.write("WELCOME");
    client.on("data", data => {

        const msg = data.toString();
        if (msg.includes("/Start")) {
            client.write("hi")
        } 
             
        clients.map(user => {
            user.write(msg);
        })
    });

 clients.push(client);
});

server.listen(8080, () => { 
    console.log("Server listening on port 8080");
});

console.log("test em");
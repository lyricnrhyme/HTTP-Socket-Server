const net = require('net');

console.log('\n\nCL process.argv')
console.log(process.argv)
let header = '\n\nHTTP/1.1 200 OK\n\nServer: SPARTASERVE'
// let slashIndex = process.argv[2].indexOf("/");
// let host = process.argv[2].slice(0, slashIndex);
// let path = process.argv[2].slice(slashIndex);

let clients = [];

const server = net.createServer(client => {

  client.write(header)
  // client.write('\n\nHTTP/1.1 200 OK\n\nServer: SpartaServe');
  // client.write("GET " + path + " HTTP/1.1\nhost: " + host);

  console.log('\nCLIENT CONNECTED\n')

  client.write('\n\nWelcome to SpartaServe')

  client.on('data', data => {
    console.log(data.toString());
    let msg = data.toString()
  });
  
  clients.push(client);
})
  

server.listen(8080, () => {
  console.log('\nServer listening on port 8080');
});


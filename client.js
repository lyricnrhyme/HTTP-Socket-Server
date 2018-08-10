const net = require('net');

console.log('\n\nCL process.argv =')
console.log(process.argv)

let header = "GET /apply HTTP/1.1\n\nhost: localhost:8080"
// let slashIndex = process.argv[2].indexOf("/");
// let host = process.argv[2].slice(0, slashIndex);
// let path = process.argv[2].slice(slashIndex);

const client = net.createConnection(8080, '0.0.0.0', () => {

  client.write(header)
  // client.write("GET /apply HTTP/1.1\nhost: localhost:8080");
  // client.write("GET " + path + " HTTP/1.1\nhost: " + host);
  client.on('data', data => {
    console.log(data.toString());
  });
  process.stdin.pipe(client);
});







// 'yo'
// 'byeeeeeee'
// 'brah'
// "https://www.youtube.com/watch?v=9kn3mzdAnYI"


// 'a a ron'
// "https://www.youtube.com/watch?v=Dd7FixvoKBw"
// 'yo again';

// 'anything'
// 'just do it'
// "https://www.youtube.com/watch?v=oTz93Y-qeq0"

// 'shia'
// "https://www.youtube.com/watch?v=PSZy6lGgOcI"
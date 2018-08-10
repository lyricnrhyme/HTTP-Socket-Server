const net = require('net');

const client = net.createConnection(8080, '0.0.0.0', () => {
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
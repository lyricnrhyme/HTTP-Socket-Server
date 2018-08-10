const net = require('net');

const client = net.createConnection(6969, '35.165.215.74', () => {
  // client.write('I am Groot');
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
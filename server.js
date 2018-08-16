const net = require('net');
const port = 8080;
const {helium, error, hydrogen, index, style} = require('./home.js');
//const helium = require('./assets/helium.js)
//const heliumCSS = require('./assets/heliumCSS.css)

const server = net.createServer(client => {
    client.setEncoding('utf8');
    client.on('data', (data) => {
        console.log(data.toString());
        let req = data.toString().split('\n');
        let reqLine = req[0].split(' '); // ['GET', /, something]
        let uri = reqLine[1];

        if (uri === '/') {
            const date = new Date();
            const status = 'HTTP/1.1 200 OK';
            const serverName = 'coolServer';

            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${index}`;

            client.write(message);
            client.end();
        } else if (uri === '/helium') {
            const date = new Date();
            const status = 'HTTP/1.1 200 OK';
            const serverName = 'coolServer';

            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${helium}`;

            client.write(message);
            client.end();

            // client.write(`HTTP 200 \n\n\n${helium}`)
            // console.log('I WILL GIVE YOU HOME');
        } else if (uri === '/hydrogen') {
            const date = new Date();
            const status = 'HTTP/1.1 200 OK';
            const serverName = 'coolServer';

            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${hydrogen}`;

            client.write(message);
            client.end();
        } else if(uri = '/css/styles.css') {
            const date = new Date();
            const status = 'HTTP/1.1 200 OK';
            const serverName = 'coolServer';

            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: text/css\n\n${style}`;

            client.write(message);
            client.end();
        } else {
            const date = new Date();
            const status = 'HTTP/1.1 200 OK';
            const serverName = 'coolServer';

            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${error}`;

            client.write(message);
            client.end();
        }


        // let page = getPage(uri);
        // client.write(page);
        // client.end();
    })
});
// console.log(process.argv);

server.listen(port, () => {
    console.log('Server listening on ', port);
})
const net = require('net');
const port = 8080;
const {index, hydrogen, helium, lithium, beryllium, boron, carbon, nitrogen, oxygen, fluorine, neon, style, domdom, error} = require('./home.js');
// const {helium, error, hydrogen, index, style} = require('./home.js');

const server = net.createServer(client => {
    client.setEncoding('utf8');
    client.on('data', (data) => {
        console.log(data.toString());
        let req = data.toString().split('\n');
        let reqLine = req[0].split(' '); // ['GET', /, something]
        let uri = reqLine[1];

        const date = new Date();
        const status = 'HTTP/1.1 200 OK';
        const serverName = 'coolServer';

        if (uri === '/') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${index}`;

            client.write(message);
            client.end();
        } 
        else if (uri === '/hydrogen') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${hydrogen}`;

            client.write(message);
            client.end();
        }
        else if (uri === '/helium') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${helium}`;

            client.write(message);
            client.end();
            // client.write(`HTTP 200 \n\n\n${helium}`)
            // console.log('I WILL GIVE YOU HOME');
        } 
        else if (uri === '/lithium') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${lithium}`;

            client.write(message);
            client.end();
        } 
        else if (uri === '/beryllium') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${beryllium}`;

            client.write(message);
            client.end();
        }
        else if (uri === '/boron') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${boron}`;

            client.write(message);
            client.end();
        }
        else if (uri === '/carbon') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${carbon}`;

            client.write(message);
            client.end();
        }
        else if (uri === '/nitrogen') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${nitrogen}`;

            client.write(message);
            client.end();
        }
        else if (uri === '/oxygen') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${oxygen}`;

            client.write(message);
            client.end();
        }
        else if (uri === '/fluorine') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${fluorine}`;

            client.write(message);
            client.end();
        }
        else if (uri === '/neon') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${neon}`;

            client.write(message);
            client.end();
        }
        else if(uri = '/css/styles.css') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: text/css\n\n${style}`;

            client.write(message);
            client.end();
        }
        else if(uri = '/app.js') {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: text/js\n\n${domdom}`;

            client.write(message);
            client.end();
        }  
        else {
            const message = `${status}\nServer: ${serverName}\nDate: ${date}\nContent-Type: *\n\n${error}`;

            client.write(message);
            client.end();
        }
    })
});

server.listen(port, () => {
    console.log('Server listening on ', port);
})
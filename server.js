// jshint esversion:6
const sanity = "You're not crazy!";
console.log(sanity);

/* ACTUAL CODE */

// stuff required to run the stuff we want
const net = require('net');
const fs = require('fs');
// const path = require('path');

// set this stuff now so it's easier to use later
const serverName = 'https://www.ihateNET.com';
const PORT = process.env.PORT || 8080;
const timeStamp = new Date();
const files = {
  '/index.html' : '/index.html',
  '/helium.html' : '/helium.html',
  '/hydrogen.html' : '/hydrogen.html',
  '/styles.css' : '/styles.css'
};

// create the server which handles connection requests
const server = net.createServer((request) => {
  request.setEncoding('utf8');

  request.on('data', (data) => {
    console.log('Client has connected!');
    console.log('request:', data);
    generateResponse(request, data);
  });
  // async, runs more than once...
  request.on('end', () => {
    console.log('Client has disconnected');
  });
});

server.on('error', (err) => {
  throw err;
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

/* FUNCTIONS */

// does stuff...
function generateResponse(request, data) {
  let requestInfo = getRequestInfo(data);
  let method = requestInfo.method;
  let uri = requestInfo.uri;

  // file reader with information formatter inside ASYNC function
  if (files.hasOwnProperty(uri)) {
    fs.readFile(`./source${uri}`, 'utf8', (err, information) => {
      if (err) throw err;

      if (method === 'GET' || method === 'HEAD') {

        request.write(convertInfo(requestInfo, information, true), (err) => {
          if (err) throw err;

          request.end();
        });
      }
    });

  } else { 
    fs.readFile(`./source/error.html`, 'utf8', (err, information) => {
      if (err) throw err;

      request.write(convertInfo(requestInfo, information, false), (err) => {
        if (err) throw err;

        request.end();
      });  
    });
  }
}

// blah blah
function convertInfo(info, data, validRequest) {
  let method = info.method;
  let uri = info.uri;
  let type = info.type;
  let server = info.server;
  let date = info.date;
  let content_type = info.content_type;
  let connection = info.connection;

  let responseString = `Server: ${server}
Date: ${date}
Content-Type: ${content_type}
Content-Length: ${data.length}
Connection: ${connection}
`;

  if (validRequest) {

    if (method === 'GET') return `${type} 200 OK
${responseString}
${data}`;

    else if (method === 'HEAD') return `${type} 200 OK
${responseString}`;

  } else return `${type} 404 NOT FOUND
${responseString}
${data}`;
}

// returns Method and URI as strings in an object
function getRequestInfo(data) {
  let tempData = data.split('\r\n');
  let methodLine = tempData[0].split(' ');
  let method = methodLine[0];
  let uri = methodLine[1];
  let type = methodLine[2];
  let content_type;

  // handles any pesky links ending with '/'
  if (uri === '/') uri = '/index.html';
  else if (uri[uri.length-1] === '/') uri = uri.slice(0, (uri.length-1));

  if (uri.includes('html')) content_type = 'text/html; charset=utf-8';
  else if (uri.includes('css')) content_type = 'text/css; charset=utf-8';

  return {
    method : method,
    uri : uri,
    type : type,
    server : 'Mozilla/5.0 (Macintosh; Intel Mac OSX)',
    date : timeStamp,
    content_type : content_type,
    connection : 'keep-alive'
  };
}
## we will learn how to create server using express : 
there is inbuilt http module in node js but we are going to use express js packages why, the reason is simple :
1. The http module is a low-level API. This means you have to manually handle every aspect of the HTTP request and response cycle. For example, to handle different URL paths or HTTP methods (GET, POST, etc.), you have to write your own conditional logic.
2. ### example
 ```javascript
        const http = require('http');
        const server = http.createServer((req, res) => {
          if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello, world!');
          } else if (req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the about page.');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
          }
        });

        server.listen(3000, () => {
          console.log('Server is running on port 3000');
        })
```


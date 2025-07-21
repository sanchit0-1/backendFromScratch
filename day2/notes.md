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
Express.js, on the other hand, is a framework built on top of the http module. It provides a much higher level of abstraction, making common tasks significantly easier and requiring less boilerplate code.
3. ### Middleware Support
Middleware is a key feature of Express.js. Middleware functions have access to the request object, the response object, and the next middleware function in the application's request-response cycle. They can perform tasks like:
a. Authentication: Checking if a user is logged in.
b. Logging: Logging details about incoming requests.
c. Body Parsing: Automatically parsing JSON or form data from the request body.
d.Error Handling: Creating a centralized error handling mechanism.
## installing express


### open your terminal and write following command one by one :
`npm i express`
     
now make a file name server.js


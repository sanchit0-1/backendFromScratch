# INTRODUCTION
I started my backend development journey using the MERN stack. Backend is the part of a web application that runs on the server and handles things like storing data, managing user authentication, and handling API requests. It works behind the scenes to power the frontend. As I begin, I am learning the basic concepts such as modules and packages.


# What is node js ?

Node.js is a powerful, open-source runtime environment that allows you to run JavaScript code outside of the web browser — specifically, on the server side. Traditionally, JavaScript was only used to create interactive elements on websites (frontend), but with Node.js, you can now use JavaScript to build the backend of web applications as well.
Node.js is built on Google Chrome’s V8 JavaScript engine, which makes it extremely fast in executing JavaScript code. One of its key features is that it is non-blocking and asynchronous, which means it can handle many requests at the same time without waiting for one task to finish before starting another. This makes it highly efficient, especially for building real-time applications like chat apps, live updates, and APIs.
In simple terms, Node.js helps you write server-side logic (like handling requests, accessing databases, reading/writing files) using JavaScript. It's a core technology in modern web development and is widely used in stacks like MERN.


Listen on top of that we will learn what is module, packages, middleware, third party packages (NPM) and api's like thing simultaneously as we go further.

So, what are packages and modules? what makes it different?

## MODULES

A *MODULE* is a single JavaScript file or a piece of code that performs a specific task or set of tasks. In Node.js, every .js file is treated as a module. You can create your own custom modules or use built-in ones like fs (file system), http, etc.
example: 
// math.js (custom module)
*function add(a, b) {*
  *return a + b;*
}
*module.exports = add;*

now we will be using this module in another file like :

*const add = require('./math');*
*console.log(add(5, 3)); // Output: 8*

In such a way like http modules are present when we download node js.

# Packages
A package is a collection of one or more modules bundled together, usually to provide specific functionality. Packages often come with a package.json file that contains metadata like the package name, version, dependencies, etc.
You install packages using npm (Node Package Manager). Popular packages include:
1. express (for building web servers)
2. mongoose (for working with MongoDB)
3. dotenv (for environment variables)

# What is a Library?
A library is a collection of reusable code that performs specific tasks. It is designed to be used by your code to solve particular problems or add features — like handling dates, making HTTP requests, or manipulating arrays.

# NPM
**NPM** stands for Node Package Manager. It is the default package manager for Node.js and is used to install, share, and manage packages (libraries or tools) in a Node.js project.
When you build a backend application using Node.js, you often need to use external code libraries — like Express for routing, Mongoose for database interaction, or Dotenv for environment variables. npm helps you easily install and manage these libraries.

Remember we will learn gradually to all stuffs !

> Now we will try to make a server.

<pre>npm init -y</pre>
- Now, after running this command there will be a package.json file. The package.json file is the manifest for a Node.js project. Think of it as your project's central config file — it contains metadata about your project and defines its dependencies, scripts, and much more.
- now we will run a command to install express <pre>npm i express</pre> this is command to install express and to use express to make server. You will see that some extra files and folder will be there. 
# Introduction to Node.js

## What is Node.js?

Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript to write command-line tools and server-side scripts—creating a unified development experience where the same language (JavaScript) can be used both for client-side and server-side programming.

Created by Ryan Dahl in 2009, Node.js is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model that makes it lightweight, efficient, and perfect for data-intensive real-time applications.

## Key Features of Node.js

### 1. JavaScript Runtime

Node.js allows JavaScript to be executed outside the browser, extending its use to server-side development. This unifies web development with a single language.

### 2. Event-Driven Architecture

Node.js uses an event loop to handle asynchronous operations:

```javascript
// Example of event-driven programming
const fs = require('fs');

// Non-blocking, asynchronous read
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

console.log('This runs before file reading completes!');
```

### 3. Non-Blocking I/O

Node.js operations are asynchronous by default, meaning they don't block the execution thread. This makes Node.js highly efficient for I/O-bound tasks.

### 4. Single-Threaded (with Multi-Threading Support)

Node.js runs on a single thread but leverages asynchronous programming to handle concurrent operations efficiently. For CPU-intensive tasks, it offers worker threads.

### 5. NPM (Node Package Manager)

NPM is the world's largest software registry, with over 1.3 million packages that can be easily installed and managed:

```bash
# Installing a package
npm install express

# Installing a package globally
npm install -g nodemon

# Creating a new project
npm init
```

### 6. Fast Execution

Built on Chrome's V8 JavaScript engine, Node.js offers high-performance execution of JavaScript code.

## Installing Node.js

### Windows/Mac

1. Visit the [official Node.js website](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the instructions
4. Verify installation by opening a terminal and typing:

```bash
node -v
npm -v
```

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install nodejs npm
```

### Using NVM (Node Version Manager) - Recommended

NVM allows you to install and manage multiple Node.js versions:

```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Install latest LTS version
nvm install --lts

# Switch between versions
nvm use 16.15.0
```

## Core Modules

Node.js comes with built-in modules that provide essential functionality:

### File System (fs)

```javascript
const fs = require('fs');

// Reading a file synchronously
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

// Writing to a file asynchronously
fs.writeFile('output.txt', 'Hello, Node.js!', 'utf8', (err) => {
  if (err) throw err;
  console.log('File has been written');
});
```

### HTTP/HTTPS

```javascript
const http = require('http');

// Creating a simple HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
```

### Path

```javascript
const path = require('path');

// Working with file paths
const filePath = path.join(__dirname, 'files', 'example.txt');
console.log(filePath);

const extension = path.extname('file.txt');
console.log(extension); // '.txt'
```

### OS

```javascript
const os = require('os');

// Getting system information
console.log('CPU architecture:', os.arch());
console.log('Free memory:', os.freemem() / 1024 / 1024, 'MB');
console.log('Total memory:', os.totalmem() / 1024 / 1024, 'MB');
console.log('OS platform:', os.platform());
console.log('User info:', os.userInfo());
```

### Events

```javascript
const EventEmitter = require('events');

// Creating a custom event emitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Register an event listener
myEmitter.on('event', (arg) => {
  console.log('Event triggered with argument:', arg);
});

// Trigger the event
myEmitter.emit('event', 'Hello from event!');
```

## NPM and Package Management

### Package.json

The `package.json` file is at the core of Node.js projects:

```json
{
  "name": "my-nodejs-app",
  "version": "1.0.0",
  "description": "A sample Node.js application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7",
    "jest": "^27.0.0"
  }
}
```

### Managing Dependencies

```bash
# Installing dependencies from package.json
npm install

# Installing a specific dependency
npm install express

# Installing a development dependency
npm install --save-dev nodemon

# Installing a global package
npm install -g pm2

# Updating packages
npm update

# Removing a package
npm uninstall express
```

### NPM Scripts

NPM scripts provide a convenient way to run commands:

```bash
# Running a script defined in package.json
npm run dev

# Running the start script
npm start

# Running tests
npm test
```

## Creating a Basic Web Server

### Using Native HTTP Module

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Get the URL and method
  const { url, method } = req;
  
  // Log request details
  console.log(`${method} ${url}`);
  
  // Set response headers
  res.setHeader('Content-Type', 'text/html');
  
  // Handle different routes
  if (url === '/') {
    res.statusCode = 200;
    res.end('<h1>Home Page</h1>');
  } else if (url === '/about') {
    res.statusCode = 200;
    res.end('<h1>About Page</h1>');
  } else {
    res.statusCode = 404;
    res.end('<h1>404 Not Found</h1>');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Using Express Framework

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from 'public' directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]);
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Asynchronous Programming in Node.js

### Callbacks

```javascript
// Traditional callback pattern
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File content:', data);
});
```

### Promises

```javascript
// Using the promise-based API (Node.js 10+)
const fs = require('fs').promises;

fs.readFile('file.txt', 'utf8')
  .then(data => {
    console.log('File content:', data);
  })
  .catch(err => {
    console.error('Error:', err);
  });

// Converting callback APIs to promises
const util = require('util');
const readFile = util.promisify(fs.readFile);

readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Async/Await

```javascript
// Using async/await for cleaner asynchronous code
const fs = require('fs').promises;

async function readFileContent() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log('File content:', data);
    
    // Sequential reads
    const file1 = await fs.readFile('file1.txt', 'utf8');
    const file2 = await fs.readFile('file2.txt', 'utf8');
    console.log('Combined content:', file1 + file2);
  } catch (err) {
    console.error('Error:', err);
  }
}

readFileContent();

// Parallel operations with Promise.all
async function readMultipleFiles() {
  try {
    const [file1Content, file2Content] = await Promise.all([
      fs.readFile('file1.txt', 'utf8'),
      fs.readFile('file2.txt', 'utf8')
    ]);
    
    console.log('File 1:', file1Content);
    console.log('File 2:', file2Content);
  } catch (err) {
    console.error('Error reading files:', err);
  }
}

readMultipleFiles();
```

## Working with Environment Variables

```javascript
// Load environment variables from .env file
// npm install dotenv
require('dotenv').config();

// Access environment variables
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/myapp';
const API_KEY = process.env.API_KEY;

console.log(`Server running on port ${PORT}`);
console.log(`Database URI: ${DB_URI}`);
```

## Common Use Cases for Node.js

### 1. Web Servers and APIs

Node.js excels at building RESTful APIs and web servers using frameworks like Express, Fastify, or Koa.

### 2. Real-time Applications

With libraries like Socket.io, Node.js powers chat applications, live collaboration tools, and real-time dashboards.

### 3. Microservices

Node.js is perfect for building lightweight, scalable microservices with frameworks like NestJS or Moleculer.

### 4. Command-line Tools

Many development tools are built with Node.js, including build tools (Webpack, Gulp) and CLI utilities.

### 5. Serverless Functions

Node.js is a popular choice for serverless functions on platforms like AWS Lambda, Azure Functions, and Vercel.

## Popular Node.js Frameworks and Libraries

### Web Frameworks

- **Express.js**: Fast, minimalist web framework
- **Koa.js**: Lighter alternative to Express by the same team
- **Fastify**: Focus on high performance and low overhead
- **NestJS**: Progressive framework for building enterprise applications
- **Hapi.js**: Robust framework for building APIs and services

### Database Interaction

- **Mongoose**: Elegant MongoDB object modeling
- **Sequelize**: ORM for SQL databases
- **Prisma**: Next-generation ORM
- **Knex.js**: SQL query builder

### Testing

- **Jest**: Full-featured testing framework
- **Mocha**: Flexible testing framework
- **Chai**: Assertion library
- **Supertest**: HTTP assertion library

### Utility Libraries

- **Lodash**: Utility functions
- **Moment.js/date-fns**: Date manipulation
- **axios**: Promise-based HTTP client
- **dotenv**: Environment variable management

## Best Practices for Node.js Development

### 1. Use Async/Await

Prefer `async/await` over raw promises or callbacks for more readable asynchronous code.

### 2. Error Handling

Always handle errors properly, especially in asynchronous operations:

```javascript
// Good practice
try {
  const data = await readFile();
  processData(data);
} catch (err) {
  logger.error('Failed to read file:', err);
  // Handle error appropriately
}
```

### 3. Environment Configuration

Store configuration in environment variables, not in code:

```javascript
// .env file
DB_HOST=localhost
DB_PORT=27017
API_KEY=your_secret_key

// app.js
require('dotenv').config();
const dbHost = process.env.DB_HOST;
```

### 4. Security Practices

- Use HTTPS
- Implement rate limiting
- Validate and sanitize input
- Use helmet.js for secure HTTP headers
- Follow OWASP security guidelines

### 5. Logging

Implement structured logging for better debugging and monitoring:

```javascript
// npm install winston
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Usage
logger.info('Server started on port 3000');
logger.error('Database connection failed', { error: err.message });
```

### 6. Proper Project Structure

Organize your project into logical modules and follow separation of concerns:

```
project/
  ├── src/
  │   ├── config/         # Configuration files
  │   ├── controllers/    # Request handlers
  │   ├── models/         # Data models
  │   ├── routes/         # Route definitions
  │   ├── services/       # Business logic
  │   ├── utils/          # Utility functions
  │   └── app.js          # App initialization
  ├── tests/              # Test files
  ├── .env                # Environment variables
  ├── .gitignore
  ├── package.json
  └── README.md
```

## Node.js in Production

### Process Management

Use a process manager to keep your application running:

- **PM2**: Feature-rich process manager
- **Forever**: Simple CLI tool
- **Nodemon**: For development only

```bash
# Installing PM2
npm install -g pm2

# Starting an application
pm2 start app.js --name "my-app"

# Cluster mode
pm2 start app.js -i max

# Monitoring
pm2 status
pm2 logs
pm2 monit
```

### Containerization

Docker is commonly used to containerize Node.js applications:

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]
```

### Load Balancing and Scaling

Use Node.js's built-in cluster module or a load balancer:

```javascript
const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Replace the dead worker
    cluster.fork();
  });
} else {
  // Workers share the TCP connection
  const app = require('./app');
  app.listen(3000);
  console.log(`Worker ${process.pid} started`);
}
```

### Performance Monitoring

Tools for monitoring Node.js applications:

- **New Relic**: Application performance monitoring
- **Datadog**: Infrastructure and application monitoring
- **Prometheus & Grafana**: Open-source monitoring solution

## Conclusion

Node.js has transformed server-side development by bringing JavaScript to the backend. Its event-driven, non-blocking architecture makes it ideal for I/O-bound applications, APIs, real-time services, and microservices.

As you continue your Node.js journey, focus on:

1. **Mastering asynchronous programming** patterns
2. **Understanding the event loop** and how it works
3. **Learning a web framework** like Express.js
4. **Exploring database integrations** with ORMs or query builders
5. **Implementing authentication** and security best practices
6. **Building real-world projects** to apply your knowledge

With its vast ecosystem of libraries and active community, Node.js offers developers powerful tools to build fast, scalable, and maintainable applications for a wide range of use cases.
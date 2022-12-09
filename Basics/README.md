# Summary

|                 How the Web Works                 |
| :-----------------------------------------------: |
| Client => Request => Server => Response => Client |

| Program Lifecycle & Event Loop |
| --- |
| 1. Node.js run non-blocking JS code and uses an event-driven code {"Event Loop"} for running your Logic. |
| 2. A Node program exits as soon as there is no more work to do. |
| 3. createServer() event nerver finishes by default. |

| Asynchronous Code |
| --- |
| 1. JS code is non-blocking. |
| 2. Use callbacks and events => Order changes!. |

| Requests & Responses |
| --- |
| 1. Parse request data in chunks(Streams & Buffers). |
| 2. Avoid "double responses"

| Node.js & Core Modules |
| --- |
| 1. Node.js ships with multiple core modules (http, fs, path,...) |
| 2. Core modules can be imported into any file to be used there |
| 3. import via require(‘module') |

| The Node Module System |
| --- |
| 1. Import via require(./path-to-file') for custom files or require('module') for core & third-party modules |
| 2. Export via module.exports or just exports {for multiple exports}  |



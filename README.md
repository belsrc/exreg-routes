Express Registered Routes
=======

A simple module to list the registered routes for Express on server startup.


## Installing

To install the latest release version:

```bash
npm install --save exreg-routes
```

To install the latest development version:

```bash
npm install git+https://github.com/belsrc/exreg-routes.git#develop
```


In your application's server.js file simply require exreg-routes, passing
the Express application object.

```javascript
var env  = process.env.NODE_ENV || 'development';
if(env === 'development') {
  require('exreg-routes')(app);
}
```

Then when you start the server you'll get a list of the registered routes in the console.

```bash
 $ nodemon server.js

Successfully started web server on port 3000.
GET    /
POST   /
GET    /admin
POST   /admin
GET    /404
GET    /500
```


## License

Express Registered Routes is copyright (c) 2015 Bryan Kizer and licensed under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

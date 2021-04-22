
'use strict'

module.exports.handler = function(req, resp, context) {
    console.log('hello world');
    resp.setHeader('Content-type', 'text/plain');
    resp.send('Hello world!');
}

var http = require('http'),
    httpProxy = require('http-proxy'),
    proxy = httpProxy.createProxyServer({}),
    url = require('url');

http.createServer(function(req, res) {
    var hostname = req.headers.host.split(":")[0];
    switch(hostname) {
        case 'xxx.com':
        case 'www.xx.com':
            proxy.web(req, res, { target: 'http://localhost:8000' });
            break;
        default:
            break;
    }
}).listen(80, function() {
    console.log('proxy listening on port 80');
});

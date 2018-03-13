/* jshint esversion: 6 */

const date = (new Date()).toJSON();
const http = require('http');
const target = require('./controllers/target');

SUCCESS = {
    version: 1.0,
    code: 200,
    name: 'Target Trust',
    created_at: date
};
ERROR = {
    message: "Page not found",
    get code_aux() {
        return Math.random();
    }
};

http.createServer(function(req, res){
    let url = req.url,
    method = req.method
    ;

    switch(url){
        case "/api/cawt/read":
            if(method === "GET"){
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(SUCCESS));
            }else{
                res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
                res.write(JSON.stringify(ERROR));
            }
            break;
        case "/api/target":
            switch(method) {
                case "GET":
                case "POST":
                case "PUT":
                case "DELETE":
                    let return_value = target[method.toLowerCase()]();
                    res.writeHead(SUCCESS.code, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.write(JSON.stringify(return_value));
                    break;
                default:
                    let response = ERROR;
                    response.message = 'Method not allowed';
                    response.code = 405;
                    res.writeHead(response.code, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.write(JSON.stringify(response));
                    break;
            }
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            ERROR.message = "Not Found";
            ERROR.code = 404
            res.write(JSON.stringify(ERROR));
            break;
    }

    res.end();
})
    .listen(3009, function(){
        console.log('Servidor rodando em localhost:3009');
    });
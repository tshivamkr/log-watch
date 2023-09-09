import { createServer, IncomingMessage, ServerResponse } from "http";
import logRouter from "./logApi";


createServer((req, res) => {
    logRouter.lookup(req, res);
}).listen(9091,
    ()=> {console.log('Listening...');
});

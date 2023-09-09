import Router from "find-my-way";
import connect from "./db";

const logRouter = Router({
    defaultRoute: (req, res) => {
        res.statusCode = 404;
        res.end();
    }
});

logRouter.get('/logs', async (req, res) => {
    const log = (await connect()).collection('logs');

    const pageSize = 10;
    const pageNumber = 1;
    const skip = (pageNumber - 1) * pageSize;

    const cursor = log.find({}).skip(skip).limit(pageSize);
    // Retrieve the documents
    const documents = await cursor.toArray();

    res.writeHead(200, { 'Content-Type': 'application/json' })
    .end(JSON.stringify({
        logs: documents
    }));
} );

export default logRouter;

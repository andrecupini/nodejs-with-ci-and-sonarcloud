const url = require('url');

exports.get = async (req, res, next) => {
    const queryObject = url.parse(req.url, true).query;
    const a = parseInt(queryObject.a);
    const b = parseInt(queryObject.b);

    if (!a || !b) {
        res.statusMessage = "Bad Request";
        res.status(402).end();
        return;
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ result: a+b }));

};

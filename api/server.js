const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3070;

const rootRouter = require('./routes/root');
const createsRouter = require('./routes/create');
const readsRouter = require('./routes/read');
const updatesRouter = require('./routes/update');
const deletesRouter = require('./routes/delete');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD');
    res.header('access-control-allow-credentials', 'true');
    res.header('access-control-max-age', '86400');
    res.header('access-control-allow-headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
});

app.use(rootRouter);
app.use('/api', createsRouter);
app.use('/api', readsRouter);
app.use('/api', updatesRouter);
app.use('/api', deletesRouter);

async function init() {
    app.listen(PORT);
}

init();
const Express = require('express');

const app = Express();

app.use(Express.static('./public_html'));

const server = app.listen(process.env.PORT || 3009, () => {
   console.log(`Server listening at port ${server.address().port}`);
});
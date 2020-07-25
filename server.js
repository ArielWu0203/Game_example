const express = require('express');
const path = require('path');
const port = 8888;
const host = '127.0.0.1';
const app = express();
const root = process.cwd();

app.set('view engine', 'pug');
app.set('views', path.join(root,'/static/pug'));
app.use(express.static(path.join(root,'/static')));
app.get("/",(req,res) => {
    res.render('index');
});
app.listen(port,host,function(error) {
    if(error) {
        console.log(error);
    } else {
        console.info("listen on port %s", port);
    }
})
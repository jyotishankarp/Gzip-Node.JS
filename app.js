const express = require('express');
const compression = require('compression');

const app = express();
//Using compression as a middleware

//(Basic configuration)
// app.use(compression());

//Compression with different options
app.use(compression({
    level: 6,
    threshold: 10 * 1000,
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false
        }
        return compression.filter(req, res)
    }
}));


app.get('/', (req, res) => {
    const payload = 'loremnasuiygdf asdfbvaskduf asdkufg asdufg asdukfg asdkufg sdkufg text'
    res.send(payload.repeat(10000))
});

app.listen(3000, console.log('Server running on port 3000'))
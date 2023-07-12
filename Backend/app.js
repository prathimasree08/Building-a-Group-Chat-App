const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./Util/database')
var cors = require('cors');

const app = express();
app.use(cors({
    origin:"http://127.0.0.1:5500",
    credentials: true,
}));
app.use(bodyParser.json({ extended: false }));

const signupRoute = require('./Routes/signup');
const loginRoute = require('./Routes/login');


app.use(signupRoute);
app.use(loginRoute);




sequelize
// .sync({force: true})
.sync()
.then(result =>{
    // console.log(result);
    app.listen(process.env.PORT || 3000);
})
.catch(err =>{
    console.log(err);
});

async function authenticate() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
 authenticate();
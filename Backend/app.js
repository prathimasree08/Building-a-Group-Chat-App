const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sequelize = require('./Util/database')
var cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

const userRoutes = require('./Routes/signup')


app.use(userRoutes);


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
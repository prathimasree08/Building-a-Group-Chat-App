const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const sequelize = require('./Util/database')
var cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: false }));

const userRoutes = require('./Routes/user');
const chatRoutes = require('./Routes/chat');
const groupRoutes = require('./Routes/group');

const User = require('./Models/user');
const Chat = require('./Models/chats');
const Group = require('./Models/group');
const UserGroups = require('./Models/groupUser');

app.use('/user', userRoutes);
app.use('/chat', chatRoutes);
app.use('/group', groupRoutes);


User.belongsToMany(Group, { through: UserGroups, foreignKey: 'userId' });
Group.belongsToMany(User, { through: UserGroups, foreignKey: 'groupId' });

Group.hasMany(Chat, { foreignKey: 'groupId' });
Chat.belongsTo(Group, { foreignKey: 'groupId' });

User.hasMany(Chat, { foreignKey: 'userId' });
Chat.belongsTo(User, { foreignKey: 'userId' });


sequelize
// .sync({force: true})
.sync()
.then(result =>{
    // console.log(result);
    app.listen(process.env.PORT || 4000);
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
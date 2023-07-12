const User = require('../Models/user');
const Chat = require('../Models/chats')
const sequelize = require('../Util/database');

exports.getUsers = async(req, res, next)=> {
    User.findAll()
    .then(user => {
        return res.json(user)
    })
    .catch(err => console.log(err))
}

exports.postChat = async (req, res, next)=> {
    const message = req.body.message;
    console.log(message)
    let transact;
    try{
        transact = await sequelize.transaction();
        const response = await Chat.create({
            message: message,
            userId: req.user.id
        },{ transaction: transact });
        await transact.commit();
        const id = response.userId
        const user = await User.findByPk(id);
        const name = user.name
        res.status(200).json({response, name});
    }catch(err){
        if (transact) {
            await transact.rollback();
          }
        console.log(err)
    }
}
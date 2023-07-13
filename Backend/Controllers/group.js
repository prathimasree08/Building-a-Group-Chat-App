const User = require('../Models/user');
const Chat = require('../Models/chats');
const Group = require('../Models/group');
const UserGroups = require('../Models/groupUser');
const sequelize = require('../Util/database');

exports.getGroup = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const user = await User.findByPk(userId, {
        include: [
          {
            model: Group,
            through: {
              model: UserGroups,
            }
        }
    ]
})
        // console.log(user.groups)
        res.json(user.groups)
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

exports.postGroup = async (req, res, next) => {
  const groupName = req.body.name;
  const userId = req.user.id;

  try {
    const group = await Group.create({
      name: groupName,
      admin: userId,
    });

    await group.addUser(userId, {
      through: {
        admin: true,
      },
    });

    res.status(201).json({
      message: 'Group created successfully',
      group,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};
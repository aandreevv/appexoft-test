const {User} = require('../models');

const signUp = async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json({
            message: `Error: ${err}`
        });
    }
}

module.exports = {
    signUp
};

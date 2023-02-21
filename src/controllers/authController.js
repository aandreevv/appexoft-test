const {User} = require('../models');
const crypto = require("crypto");
const argon2 = require('argon2');

const signUp = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const hash = await argon2.hash(password);
        const cipher = crypto.createCipheriv('aes-256-cbc', process.env.KEY, process.env.IV);
        let encryptedPassword = cipher.update(hash, 'utf-8', 'hex');
        encryptedPassword += cipher.final('hex');
        await User.create({name, email, password: encryptedPassword});
        return res.status(200).json({
            message: "Success"
        });
    } catch (err) {
        return res.status(400).json({
            message: `Error: ${err}`
        });
    }
}

module.exports = {
    signUp
};

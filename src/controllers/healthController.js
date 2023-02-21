const os = require('os');

const getFreeSystemMemory = (req, res) => {
    res.status(200).json({
        freeMemory: os.freemem(),
    });
};

module.exports = {
    getFreeSystemMemory,
};

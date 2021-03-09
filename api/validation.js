let validation = (req, res) => {
    if (typeof req.body !== 'object') {
        return res.status(400).send({ error: 'not an object' });
    }
};

module.exports = validation;
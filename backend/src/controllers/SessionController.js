// index, show, store, update, destroy
const User = require('../models/User');
module.exports = {
    async store(req, res) {
        //const email = req.body.email;
        const { email } = req.body; //Recurso de desestruturação
        //const user = await User.create({ email });

        //let user = await User.findOne({email: email});
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ email });
        }        
        return res.json(user);
    }
};
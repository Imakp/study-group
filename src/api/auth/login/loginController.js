const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res) => {
    const loginUser = async (req, res) => {
        const { email, password } = req.body;
       
        try {
           let user = await User.findOne({ email });
       
           if (!user) {
             return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
           }
       
           const isMatch = await bcrypt.compare(password, user.password);
       
           if (!isMatch) {
             return res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] });
           }
       
           const payload = {
             user: {
               id: user.id
             }
           };
       
           jwt.sign(
             payload,
             process.env.JWT_SECRET,
             { expiresIn: 3600 },
             (err, token) => {
               if (err) throw err;
               res.json({ token });
             }
           );
        } catch (err) {
           console.error(err.message);
           res.status(500).send('Server error');
        }
       };
       
       module.exports = loginUser;
};
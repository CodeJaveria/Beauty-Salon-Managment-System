const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User
exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "User already exists" });

        user = new User({ name, email, password, role });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();
        res.status(201).json({ msg: "Registration successful! ✨" });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};

// Login User
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "Ghalat Credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: "Ghalat Credentials" });

        const payload = { user: { id: user.id, role: user.role } };
        jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ token, user: { name: user.name, role: user.role } });
        });
    } catch (err) {
        res.status(500).send("Server Error");
    }
};
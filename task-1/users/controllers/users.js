const User = require('../models/user');
const axios = require('axios');

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        await axios.post('http://localhost:3001/history', {
            action: 'create',
            userId: user.id,
            details: req.body,
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            await axios.post('http://localhost:3001/history', {
                action: 'update',
                userId: user.id,
                details: req.body,
            });
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createUser, updateUser, getUsers };
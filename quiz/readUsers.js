const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

router.get('/usernames', (reg, res) => {
    let usernames = req.users.map(function(user) {
        return {id: user.id, username: user.username}
    });
    res.send(usernames);
});

router.get('/username/:name', (req, res) => {
    let name = req.params.name;
    let users_with_name = req.users.filter(function(user) {
      return user.username === name;
    });
    console.log(users_with_name);
    if (users_with_name.length === 0) {
      res.send({
        error: {message: `${name} not found`, status: 404}
      });
    } else {
      res.send(users_with_name);
    }
});

module.exports = router
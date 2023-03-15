const express = require('express');
const router = express.Router();

const friends = [
    {
        id: 1,
        name: 'Amy Adams'
    },
    {
        id: 2,
        name: 'Betty Brown'
    },
    {
        id: 3,
        name: 'Caitlin Coombs'
    }      
]

router.get('/all', (req, res) => {
    res.json(friends)
})

router.get('/:id', (req, res) => {
    //gets the value stored in id via request parameters
    let idParam = req.params.id;

    let matchingFriend = friends.find(friend => friend.id == idParam)
    res.json(matchingFriend)
})

router.post('/new', (req, res) => {
    let newFriend = req.body;
    console.log(newFriend)
    friends.push(newFriend)
    res.json(newFriend)
})

module.exports = router;
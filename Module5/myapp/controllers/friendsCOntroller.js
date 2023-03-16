const friends = require('../models/friends')

const getFriends = (res) => {
    res.status(200);
    res.json(friends);
}

const getFriend = (id, res) => {
    let matchingFriend = friends.find(friend => friend.id == id) 

    if (matchingFriend) {
        res.status(200);
        res.json(matchingFriend)    
    } else {
        res.status(404);
        res.json({error: "Friend with id "+id+" not found"})
    }
}

const deleteFriend = (id, res) => {
    let matchingFriend = friends.find(friend => friend.id == id) 
    let friendIndex = friends.indexOf(matchingFriend);

    if (matchingFriend) {
        friends.splice(friendIndex, 1)
        res.status(200);
        res.json(matchingFriend)    
    } else {
        res.status(404);
        res.json({error: "Friend with id "+id+" not found"})
    }
}

const createFriend = (newFriend, res) => {

    friends.push(newFriend) 
    res.status(200);
    res.json(newFriend)    
}

module.exports = {
    getFriends, getFriend, createFriend, deleteFriend
}
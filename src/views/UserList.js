// src/views/UserList.js
<<<<<<< HEAD
// var m = require("mithril")
var m = require("mithril/mithril")
// const m = require('mithril').default
=======
var m = require("mithril")
//const m = require('mithril').default
>>>>>>> cac7510a0d62468d8cacb585501508e1a681a14b

var User = require("../models/User")

module.exports = {
    oninit: User.loadList,
    view: function() {
        return m(".user-list", User.list.map(function(user) {
            return m("a.user-list-item", {href: "/edit/" + user.id, oncreate: m.route.link}, user.firstName + " " + user.lastName)
        }))
    }
}

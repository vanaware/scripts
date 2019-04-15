// src/index.js
<<<<<<< HEAD
<<<<<<< HEAD
var m = require("mithril/mithril")
=======
var m = require("mithril")
>>>>>>> cac7510a0d62468d8cacb585501508e1a681a14b
=======
// var m = require("mithril")
>>>>>>> parent of 8c2e52d... @tarp/require test

const m = require('mithril').default

var UserList = require("./views/UserList")
var UserForm = require("./views/UserForm")
var Layout = require("./views/Layout")

m.route(document.body, "/list", {
    "/list": {
        render: function() {
            return m(Layout, m(UserList))
        }
    },
    "/edit/:id": {
        render: function(vnode) {
            return m(Layout, m(UserForm, vnode.attrs))
        }
    },
})

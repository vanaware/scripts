// src/views/UserForm.js
<<<<<<< HEAD
// var m = require("mithril")
<<<<<<< HEAD
var m = require("mithril/mithril")
=======
var m = require("mithril")
>>>>>>> cac7510a0d62468d8cacb585501508e1a681a14b
//const m = require('mithril').default
=======
const m = require('mithril').default
>>>>>>> parent of 8c2e52d... @tarp/require test

var User = require("../models/User")

module.exports = {
    oninit: function(vnode) {User.load(vnode.attrs.id)},
    view: function() {
        return m("form", {
                onsubmit: function(e) {
                    e.preventDefault()
                    User.save()
                }
            }, [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]", {
                oninput: function (e) {User.current.firstName = e.target.value},
                value: User.current.firstName
            }),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]", {
                oninput: function (e) {User.current.lastName = e.target.value},
                value: User.current.lastName
            }),
            m("button.button[type=submit]", "Save"),
        ])
    }
}

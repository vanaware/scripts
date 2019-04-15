// src/views/Layout.js
<<<<<<< HEAD
// var m = require("mithril")
var m = require("mithril/mithril")
=======
var m = require("mithril")
>>>>>>> cac7510a0d62468d8cacb585501508e1a681a14b
//const m = require('mithril').default

module.exports = {
    view: function(vnode) {
        return m("main.layout", [
            m("nav.menu", [
                m("a[href='/list']", {oncreate: m.route.link}, "Users")
            ]),
            m("section", vnode.children)
        ])
    }
}

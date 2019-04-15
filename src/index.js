// src/index.js
var UserList = require("./views/UserList");
var UserForm = require("./views/UserForm");
var Layout = require("./views/Layout");
var m = require("mithril");

m.route(document.body,"/list",{
  "/list": {
    render: function() {
      return m(Layout, m(UserList));
    }
  },
  "/edit/:id": {
    render: function(vnode) {
      return m(Layout, m(UserForm, vnode.attrs));
    }
  }
});

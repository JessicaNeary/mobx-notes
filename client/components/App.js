"use strict";
exports.__esModule = true;
var React = require("react");
var mobx_react_devtools_1 = require("mobx-react-devtools");
var App = function (props) {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Title"),
        props.children,
        React.createElement(mobx_react_devtools_1["default"], null)));
};
exports["default"] = App;

import ReactDOM from "react-dom/client"

import React from "react"

const root = ReactDOM.createRoot(document.getElementById("root"))

const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "childreen1" }, [React.createElement("h1", {}, "Hi"), React.createElement("h2", {}, "Hi")]),

React.createElement("div", { id: "childreen1" }, [React.createElement("h1", {}, "Hi"), React.createElement("h2", {}, "Hi")])])

root.render(parent)
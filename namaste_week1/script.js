  // const heading = React.createElement("h1", {id:"heading"}, "Namaste React");
  const root = ReactDOM.createRoot(document.getElementById("root"))
  // root.render(heading)
  //nexted elements
  const parent = React.createElement("div", {id:"parent"},[React.createElement("div",{id:"childreen1"},[React.createElement("h1", {},"Hi"),React.createElement("h2", {}, "Hi")]),
  React.createElement("div",{id:"childreen1"},[React.createElement("h1", {},"Hi"),React.createElement("h2", {}, "Hi")])])
  root.render(parent)
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "i'm an h1 element"),
    React.createElement("h2", {}, "I'm an h2 element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i'm an h1 element"),
    React.createElement("h2", {}, "I'm an h2 element"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);

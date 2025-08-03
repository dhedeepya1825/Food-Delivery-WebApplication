import React from 'react';
import ReactDOM from 'react-dom/client';

console.log("App.js loaded");
console.log("React:", React);
console.log("ReactDOM:", ReactDOM);

const parent=React.createElement("div",{id:"parent"},[
     React.createElement('div',{id:"child1", key:"child1"},[
    React.createElement('h1',{key:"h1-1"},"Iam Dhedeepya."),
    React.createElement("h2",{key:"h2-1"},"Iam from Hyd."),
]),
React.createElement('div',{id:"child2", key:"child2"},[
React.createElement('h1',{key:"h1-2"},"Iam Praneetha."),
React.createElement("h2",{key:"h2-2"},"Iam from UK."),
]),
]);

const rootElement = document.getElementById("root");
console.log("Root element:", rootElement);

if (rootElement) {
   const root = ReactDOM.createRoot(rootElement);
   console.log("Root created:", root);
   root.render(parent);
   console.log("Parent rendered:", parent);
} else {
   console.error("Root element not found!");
}
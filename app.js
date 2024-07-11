import React from "react";
import ReactDOM from "react-dom/client";
//using javascript

// let x = document.querySelector('#ram');
// let temp= document.createElement('h1');
// temp.innerText = "kya g"
// x.appendChild(temp);

//using react
//const temp = React.createElement('h1', {} , 'hello world');
//const root =ReactDOM.createRoot(document.getElementById('ram'));
// root.render(temp);

//-----------------------------------------------------------


//creating nested structure using react
{
  /* 
    <div id="parent">
        <div id="child">
            <h1>
             Hello
            </h1>
        </div>
    </div>
*/
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hello i am h1 tag")
  )
);
// const root =ReactDOM.createRoot(document.getElementById('ram'));
// root.render(parent);
// console.log(parent);






//-----------------------------------------------------------






//creating nested structure using react
{
  /* 
    <div id="parent">
        <div id="child">
            <h1>Hello</h1>     // two elements as siblings
            <h2>hello again</h2>
        </div>
    </div>
*/
}

const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello i am h1 tag"),
    React.createElement("h2", {}, "hello i am h2 tag"),
  ])
);
// const root1 = ReactDOM.createRoot(document.getElementById("ram"));
// root1.render(parent1);
// console.log(parent1);







//-----------------------------------------------------------






//creating nested structure using react
{
  /* 
    <div id="parent">
        <div id="child1">
            <h1>Hello</h1>     // two elements as siblings
            <h2>hello again</h2>
        </div>

        <div id="child2">
            <h1>Hello</h1>     // two elements as siblings
            <h2>hello again</h2>
        </div>
    </div>
*/
}

const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 tag"),
    React.createElement("h2", {}, "h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('ram'));
root.render(parent2)
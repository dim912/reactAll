import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

//entry point to react

/**

Creating React element without JSX

const myElement = React.createElement('h2', { className: 'tt' }, 'Hello, world!')
console.log(myElement)
ReactDOM.render(myElement, document.getElementById('app'))
 */

ReactDOM.render(<App />, document.getElementById('app'))



/**
MOST basic react application
ReactDOM.render(
    <h1> Hellow React</h1>,
    document.getElementById("app")
)

MOST basic JSX
const name = {test}
const componet = <p>This is my Hello {name}}</p>

* After compilation => JSX becomes javascript.
So, below is a valied component
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
* can put curly brackets around javascript in JSX

React convert JSX down to => React.createElement()

So below two are equal

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

* above React.createElemnet returns below object.

// Note: this structure is simplified => these are called as react elements/objects
=> React reads these objects and create DOM
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

*Elemnets are the smallest blocks of react app

Unlike Browser DOM elemnets => React Elemnets are pure javascript objects
(ReactDOM take care of updating DOM)

React components are made of elements

//To render an React elemnet into a root DOM node use ReactDOM.render()
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

* React elemnts are immutable. Can not be changed once created.
Element is like a single frame in a movie

* ReactDOM do diff and update only required elements in browser DOM

*/

# React

## What is React & Why React

###### Rewriting from React Docs [React](https://react.dev/learn)

A Javascript Library for building user interfaces
React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

### React Components

React components are JavaScript functions that return markup:

```javascript
function MyButton() {
    return (
        <button> This is a button </button>
    )
}
```

Now that you’ve declared MyButton, you can nest it into another component:

```javascript
import MyButton from './components/MyButton.jsx'

export default function MyApp() {
    return (
        <div> 
            <h1> Welcome to my app </h1> 
            <MyButton>
        </div>
    )
}
```

Notice that <MyButton/> starts with a capital letter. That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.

![Button Component Demo](./public/images/demo.PNG)

The export default keywords specify the main component in the file. If you’re not familiar with some piece of JavaScript syntax, MDN and javascript.info have great references.

### Writing markup with JSX

The markup syntax you’ve seen above is called JSX. It is optional, but most React projects use JSX for its convenience. All of the tools we recommend for local development support JSX out of the box.

JSX is stricter than HTML. You have to close tags like ```<br/>```. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a ```<div>...</div>``` or an empty ```<>...</>``` wrapper:

```javascript
function AboutPage() {
    return(
        <>
            <h1> About Us
            <p>We are developers</p>
        <>
    )
}
```

If you have a lot of HTML to port to JSX, you can use an [Online converter](https://transform.tools/html-to-jsx)

### Adding styles 

In React, you specify a CSS class with className. It works the same way as the HTML class attribute:

```javascript
<img className="avatar" />
```

Then you write the CSS rules for it in a separate CSS file:

```css
/* In your CSS */
.avatar {
  border-radius: 50%;
}
```

React does not prescribe how you add CSS files. In the simplest case, you’ll add a <link> tag to your HTML. If you use a build tool or a framework, consult its documentation to learn how to add a CSS file to your project.

### Displaying data 

JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. For example, this will display user.name:

```javascript
return (
    <h1>
        {user.name}
    </h1>
)
```

You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes. For example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute:

```javascript
return (
    <img
        className = 'avatar' 
        src = {user.imgUrl}
    />
)
```

You can put more complex expressions inside the JSX curly braces too, for example, string concatenation:

```javascript
const user = {
    name: 'Dayahang Rai',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQ5wQF2_FwzOL1U1q0JHoAODAVRAt2q3sAL2zD6raOjyH-b0gtvQP_1lGYr0B1V7819v6LL_Vg7ERx3DOA',
    imageWidth: 150,
    imageHeight: 100
}

export default function Profile() {
    return (
        <>
            <h1> {user.name + ' is a handsome Nepali actor.'} </h1>
            <img
                className = 'avatar' 
                src = {user.imageUrl} 
                alt = "Dayahang Rai" 
                style = {{
                    width: user.imageWidth,
                    height: user.imageHeight
                }}
            />
        </>
    )
}
```

![Concatenation Demo](./public/images/concatenation.PNG)

In the above example, style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces. You can use the style attribute when your styles depend on JavaScript variables.

### Conditional rendering 

In React, there is no special syntax for writing conditions. Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:

```javascript
let content;

if(isLoggedIn) {
    content = <UserPanel/>
}
else {
    content = <LoginPage/>
}

return (
    <div>
        {content}
    </div>
)

// If you prefer more compact code, you can use the conditional ? operator. Unlike if, it works inside JSX:

<div>
    {isLoggedIn ? (
        <UserPanel/>
    ) : (
        <LoginPage/>
    )}
</div>

// When you don’t need the else branch, you can also use a shorter logical && syntax:

<div>
  {isLoggedIn && <AdminPanel />}
</div>
```

All of these approaches also work for conditionally specifying attributes. If you’re unfamiliar with some of this JavaScript syntax, you can start by always using if...else.

### Rendering lists

You will rely on JavaScript features like for loop and the array map() function to render lists of components.

For example, let’s say you have an array of products:

```javascript
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
]
```

// Inside your component, use the map() function to transform an array of products into an array of <li> items:

```javascript
const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
)

return (
    <ul>{listItems}</ul>
)
```

Notice how list has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.

### Angela YU React course

React combines HTML, JavaScript and CSS.

Rendering data without reloading. Re-rendering the data using diffing technique by comparing the new DOM with old one.

Practice React on this website.
[Code Sandbox](https://codesandbox.io/)

### Introduction to JSX

JSX = JavaScript XML

Babel is a Javascript Compiler that powers JSX file by converting next generation javascript code to browser-compatible JavaScript code.

Challenge 1

```javascript
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My heading</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>,
  document.getElementById("root")
);

```

### Adding JavaScript expression using 

Attributes of HTML element are camelcased in React with convention
Eg: class = 'container' becomes className = 'container' & so on.

Introduction to jsx

```javascript

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Injecting HTML in Javascript</h1>
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);

```

Adding dynamic date object in HTML

```javascript
// Create a react app from scratch
// It should display 2 paragraph HTML elements
// The paragraph should say:
// Created by Yourname
// Copyright CURRENTYEAR

import React from "react";
import ReactDOM from "react-dom";

const CURRENTYEAR = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p> Created with ❤ by Pradip Timilsina </p>
    <p> Copyright @ {CURRENTYEAR}</p>
  </div>,
  document.getElementById("root")
);


```

Challenge

```javascript
//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200?random=1";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My heading
    </h1>
    <div>
      <img src={img} alt="random photo" />
      <img src={img} alt="random photo" />
      <img src={img} alt="random photo" />
    </div>
  </div>,
  document.getElementById("root")
);


```

Class based styling is recommended over inline styling.

#### Inline styling

```javascript

import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fontSize: "24px",
  border: "2px solid blue",
};

customStyle.color = "green"

ReactDOM.render(
    <div>
        <h1 style={customStyle}>Hello World!</h1>
        <h2 style = {{color: "red"}}> Red Heading </h2>
    </div>,
    document.getElementById("root")
);

```

Displaying greeting based on hours

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JSX</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/JSX"></script>
  </body>
</html>
```

styles.css

```css
.heading {
  font-size: 50px;
  font-weight: bold;
  border-bottom: 5px solid black;
}

```

```javascript
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2022, 1, 1, 1, 1);
let hour = date.getHours();

let greeting = "";
const customStyle = {};

if (hour >= 0 && hour < 12) {
  greeting = "morning";
  customStyle.color = "red";
} else if (hour >= 12 && hour < 18) {
  greeting = "afternoon";
  customStyle.color = "green";
} else {
  greeting = "evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    Good {greeting}{" "}
  </h1>,
  document.getElementById("root")
);


```

#### React Component


index.html
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JSX</title>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div id="root"></div>
    <script src="../src/index.js" type="text/JSX"></script>
  </body>
</html>

```

index.js

```javascript

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

```

/components/App.jsx
/components/heading.jsx
/components/ListComponent.jsx

```jsx

// App.jx

import React from "react";
import ReactDOM from "react-dom";

import Heading from "./HeadingComponent";
import List from "./ListComponent";

export default function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}

```

```jsx
// HeadingComponent.jsx

import React from "react";

function Heading() {
  return <h1>My Favourite Foods</h1>;
}

export default Heading;


```

```jsx

// ListComponent.jsx

import React from "react";

export default function List() {
  return (
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  );
}
```

### React Props
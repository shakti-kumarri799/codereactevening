import React from "react";
import "./style.css";

function Home()
{
    return( 
    <div className="page">
        <h1 className="first">This is Home PageThis is Home Page This is Home PageThis is Home PageThis is Home PageThis is Home Page</h1>
        <h2>dsfsdf</h2>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

Component-Based
Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

Learn Once, Write Anywhere
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.</p>
    </div>
    )
}

export default Home
/*
SOURCE: https://youtu.be/bMknfKXIFA8

WHAT IS REACT?
  React, or ReactJs, is a JavaScript library for building user interfaces and developing web applications.
  React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.
  I. How to add React to an HTML page?
    - add <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    - add <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  II. Declarative:
    React is declarative. 
    Being declarative means I can tell the computer WHAT to do and the computer can handle the details, while being imperative means I have to tell the computer HOW to do WHAT steps by steps.
  III. Composable and Reusable:
    Elements are the smallest building blocks of a Web page that describe what you want to see on the page. And, components are made of elements.
    Unlike browser DOM elements, React elements are plain JavaScript objects created and returned from JSX. And, React components are essentially functions that return React elements.

WHAT IS REACTDOM?
  ReactDOM is a global variable of the ReactDOM library.
  1. Syntax:
      ReactDOM.render(
        <>React elements</>,
        document.getElementById("root-element")
      );
    a. root:
      A root DOM node/container is required to mark the spot where React DOM should display its components on the HTML page. It will be managed by React DOM.
      Web pages built with just React usually have a single root DOM node. If you are integrating React into an existing page, you may have as many isolated root DOM nodes as you like.
    b. elements:
      All React elements must be nested in one single parent element/tag. Fragment tags "<></>" can be used as the parent tag.
      React elements are immutable, which means they, their children, and their attributes can't be changed. The only way to update the rendered element is to create a new element and re-render it.
    React DOM takes care of updating the DOM to match the React elements. It compares the elements and their children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state.
  2. to declare the root separately:
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <>React elements</>
      );
  3. to declare elements separately:
    a. using variable:
      const variableName = (
        <>React elements</>
      );
      ReactDOM.render(variableName, document.getElementById("root-element"));
    b. using function:
      function FunctionName(parameter1, parameter2) {
        return (
          <>React elements</>
        );
      }
      ReactDOM.render(<FunctionName />, document.getElementById("root-element"));

WHAT IS JSX?
  JSX, stands for JavaScript XML, is a syntax extension to JavaScript, which produces React elements.
  React is what defines JSX, so JSX needs to be used together with React.
  I. How to add JSX to an HTML page?
    1. Method 1:
        - add <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        - add <script src="script.js" type="text/babel"></script>
      This method may slow down your Website and isn't suitable for production.
    2. Method 2:
        - download Node.js
        - run npm init -y
        - run npm install babel-cli@6 babel-preset-react-app@3
        - create a "src" folder where the "script.js" file will locate
        - run npx babel --watch src --out-dir . --presets react-app/prod
      This method is the setup for a production-ready JSX preprocessor to convert all "script" tags automatically.
  II. Naming Convention:
    Because JSX is closer to JavaScript than to HTML, React uses camelCase naming instead of HTML attribute names when naming element attributes.
    EX:
      "class" in HTML = "className" in JSX
    React also uses PascalCase instead of camelCase when naming functions.
    EX:
      "functionName" in JavaScript = "FunctionName" in JSX
      "functionName()" in JavaScript = "<FunctionName />" in JSX
  III. Object Representation:
    Babel compiles JSX down to React.createElement() calls.
    After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
    These objects are React elements that describe what React should add to the real DOM on the HTML page.
    React reads these objects, interprets them, and uses them to construct the DOM elements and keep them up to date.
    SIDE NOTE:
              JSX can't be read by DOM.
              EX:
                const variableName = (
                  <>React elements</>
                );
                document.getElementById("root").append(variableName);
              JSX needs to be rendered by React.
              EX:
                const variableName = (
                  <>React elements</>
                );
                ReactDOM.render(variableName, document.getElementById("root-element"));
  IV. String Literals and Template Literals:
    1. String Literals:
        const variableName = (
          <starting-tag attribute="string value"> content </closing-tags>
        );
      Quotes are used to specify a string value as an element attribute.
    2. Template Literals:
        const variableName = (
          <starting-tag attribute={argument}> content </closing-tags>
        );
      Curly braces are used to embed a JavaScript expression in an element attribute.
*/
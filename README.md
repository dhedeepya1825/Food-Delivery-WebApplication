# React Project

A simple React application demonstrating basic React concepts and createElement usage.


## Technologies Used
- React 19
- ReactDOM 19
- Parcel (bundler)

# Parcel Features
- Dev Build
- Local server
- HMR = Hot Module Replacement (Hot Reloading)
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification 
- Bundling
- Compress the files
- Consistent Hashing 
- Code Splitting - breaking your large JavaScript bundle into smaller chunks that load only when needed!
  - Less memory usage 
  - Features load as needed 
  - Unchanged parts stay cached
- Differential Bundling (supports older browsers)
- Diagnostics
- Error Handling
- HTTPs
- Tree Shaking - remove unused code 


    
BABEL- Babel is a JavaScript Compiler Package.
Babel converts the JSX code to React Element.

Parcel  is a package - bundler package.Parcel uses Babel.

Packages are managed by npm
JSX Code is not HTML

JSX transpiled before it reaches the js engine.
transpiled is done by Parcel -Bable(js compiler) 
 
 - React Functional Component : It is just a Js
  function that returns a react element or JSX code.
  -Component composition : Composing 2 components to one another.


- 2 TYPES OF EXPORT/IMPORT:

-DEFAULT EXPORT/IMPORT: 
export default component;
import component from "path";

-NAMED EXPORT/IMPORT:
export const component;
import {component} from "path";

WHENEVER STATE VARIABLE UPDATE , REACT TRIGGERS A RECONSILIATION CYCLE(RERENDERS THE COMPONENT)
->if there is no dependancy then useEffect is called on every render
->if there is dependancy is emptyi.e,[] then useEffect is called on initial render (only once)
->if there is dependancy is i.e,[btnName] then useEffect is called everytime btnName is updated

TWO TYPES OF ROUTING
1)CLIENT-SIDE ROUTING
2)SERVER-SIDE ROUTING
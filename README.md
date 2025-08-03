# React Project

A simple React application demonstrating basic React concepts and createElement usage.

## Features
- Basic React createElement usage
- Multiple child components
- Proper key props for list items

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

## Build Types

### Development Build
- **Command:** `npx parcel index.html` or `npm start`
- **Purpose:** When developing locally
- **Features:** Fast builds, hot reloading, readable code

### Production Build  
- **Command:** `npx parcel build index.html` or `npm run build`
- **Purpose:** When ready to deploy to production
- **Features:** Minified code, optimized performance
- **Note:** Production builds take more time than dev builds

## How to Run
1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Open browser: `http://localhost:1234`
    
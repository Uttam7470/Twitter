// import { useState } from 'react'

// import './App.css'
// import Home from './components/Home'
// import Body from './components/Body'
// import {Toaster} from 'react-hot-toast'

// function App() {
 
//   return (
//     <>
  
//       <Body />
//       <Toaster />

//     </>
//   )
// }

// export default App


import React from 'react'; // Explicit import of React
import './App.css'; // Ensure CSS is applied correctly
import Body from './components/Body'; // Importing Body component
import { Toaster } from 'react-hot-toast'; // Importing Toaster for notifications

function App() {
  return (
    <>
      <Body /> {/* Render the Body component */}
      <Toaster /> {/* Render Toaster for notifications */}
    </>
  );
}

export default App;

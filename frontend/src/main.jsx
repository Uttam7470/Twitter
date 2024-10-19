// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import { Provider } from 'react-redux';
// import store from './redux/store.js';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';


// let persistor = persistStore(store);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </StrictMode>
// );


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import global CSS styles
import { Provider } from 'react-redux'; // Redux Provider for state management
import store from './redux/store.js'; // Import the Redux store
import { PersistGate } from 'redux-persist/integration/react'; // PersistGate for handling persistence
import { persistStore } from 'redux-persist'; // Function to create a persistor

// Create a persistor for the store
let persistor = persistStore(store);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App /> {/* Main application component */}
      </PersistGate>
    </Provider>
  </StrictMode>
);

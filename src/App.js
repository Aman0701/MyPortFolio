import React from 'react'; // Importing React
import { BrowserRouter as Router } from 'react-router-dom'; // Importing BrowserRouter for routing functionality
import { AppRoutes } from './AppRoutes';
import { Nav } from './Component/nav';
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <Router>
      <ToastContainer />
      <Nav />
      <AppRoutes />
    </Router>
  );
}

export default App;

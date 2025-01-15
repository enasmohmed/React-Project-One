import  React from 'react';
import  ReactDOM  from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../src/Components/Navbar/Navbar.css'
import '../src/Components/Home/Home.css'
import '../src/Components/Footer/Footer.css'
import '../src/Components/About/About.css'
import '../src/Components/Portfolio/Portfolio.css'
import '../src/Components/Contact/Contact.css'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

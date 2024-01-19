import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Services from './component/Services';
import About from './component/About';
import Menu from './component/Menu';
import Blog from './component/Blog';
import FooterBar from './component/Footer';
import Login from './authentication/Login';
import Signup from './authentication/SignUp';
import Navigation from './navigation/authNav';
import Contact from './component/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar /> 
      <Contact/>
      <Home/>
      <About/>
      <Menu/>
      <Services/> 
      <Blog/> 
      <FooterBar />
    </>
  );
}

export default App;

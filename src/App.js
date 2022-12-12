import './App.css';
import "./styles/Main.css";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
//  routin using react router dom 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  pages import 
import Home from "./components/pages/Home";
function App() {
  return (
    <div className="App">
   
        <Router>
        <Navbar /> 
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
          <Footer /> 
        </Router>
    </div>
  );
}

export default App;

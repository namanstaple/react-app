import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import Home from './pages/Home';
import Footer from './layout/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
function App() {
  console.log(process.env.REACT_APP_API_BASE_URL+'/login');
  return (
    <>
      <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/services" element={<Services />}></Route>
              <Route path="/pricing" element={<Pricing />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

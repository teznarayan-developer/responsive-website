import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import { Route, Routes } from 'react-router-dom';
import Contact from './Component/Contact';
import Header2 from './Component/Header2';

function App() {
  return (
    <div style={{margin: "auto 1rem"}}>
      <Navbar />
      <Header2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </div>
  );
}

export default App;

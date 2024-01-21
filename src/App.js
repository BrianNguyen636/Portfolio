
import './bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename = '/Portfolio'>
        <Routes >
          {/* <Route path="/"element={<Navigate to="/home" replace />}/> */}
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

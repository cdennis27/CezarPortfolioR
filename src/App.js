import Navbar from './Navbar';
import Pricing from './pages/Pricing';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';


function App() {

  
  console.log(window.location.pathname);
  return (
  <>
  <Navbar />
  <div className="container">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pricing/:id" element={<Pricing />} />
    <Route path="/about/:id" element={<About />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </div>
</>
  );
}

export default App;

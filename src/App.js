import Navbar from './Navbar';
import Work from './pages/Work';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import { Route, Routes } from 'react-router-dom';
import Charger73 from './pages/Charger73';
import Projects from './pages/Projects';
import Footer from './pages/Footer';


function App() {


  console.log(window.location.pathname);
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} >

            <Route path="27" element={<Charger73 />} />
            
          </Route>
          <Route path="/home/7" element={<Home />} />
          <Route path="/work/:id" element={<Work />} />
          <Route path="/about/:id" element={<About />} />
          <Route path="/contact/:id" element={<Contact />} />
          <Route path="/resume/:id" element={<Resume />} />
          <Route path="/projects/:id" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

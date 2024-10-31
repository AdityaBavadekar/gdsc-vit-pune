import Navbar from './components/Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import Team from './pages/Team';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Blogs from './pages/Blogs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main className="pages">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/events' element={<Events />} />
              <Route path='/achievements' element={<Achievements />} />
              <Route path='/team' element={<Team />} />
              <Route path='/blogs' element={<Blogs />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Style.css';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Navs from './Components/Navs';
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Navs />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/service' element={<Service />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

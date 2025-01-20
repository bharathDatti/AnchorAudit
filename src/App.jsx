import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './componenets/Navbar';
import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage'
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Accountes from './Pages/Accountes';
import ParticlesBackground from './componenets/ParticlesBackground';
import Footer from './componenets/Footer';

function App() {
 
  return (
    <Router>
      <ParticlesBackground/>
      
     <Navbar/>
     
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/account' element={<Accountes/>}/>
       <Route path='/details/:id' element={<DetailsPage/>}/>
       <Route path='/about'element={<AboutUs/>}/>
       <Route path='/contact'element={<ContactUs/>}/>
     </Routes>
     <Footer/>
    </Router>
  )
}

export default App
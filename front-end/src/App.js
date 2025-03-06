import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Usercomponent.jsx/Home';
import Carlist from './Usercomponent.jsx/Carlist';
import About from './Usercomponent.jsx/About';
import Footer from './Usercomponent.jsx/Footer';
import Bikeslist from './Usercomponent.jsx/Bikeslist';
import LoginForm from './Usercomponent.jsx/Form';
import Testimonials from './Usercomponent.jsx/Testimonials';
import ContactBanner from './Usercomponent.jsx/Banner';
import BookingForm from './Usercomponent.jsx/Booking';
export default function App() {
  return (
    <Router>
      <div className='App'>
        <Home/>
        <div className='middle'>
        <Routes>  
        <Route path="/" element={<About />} />       
        <Route path="/carlist" element={<Carlist />} /> 
        <Route path="/bikelist" element={<Bikeslist/>} />
        <Route path="/testimonials" element={<Testimonials/>} />
        <Route path="/loginpage" element={<LoginForm/>} />
        <Route path="/" element={<Carlist />} />
        <Route path="/book/:carId" element={<BookingForm />} />
        </Routes>
        </div>
        <div className='banner'><ContactBanner/></div>
        <Footer/>
      </div>
    </Router>
  );
}




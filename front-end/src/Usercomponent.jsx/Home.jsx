import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
import { RiMotorbikeFill } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import { CgProfile } from "react-icons/cg";

export default function Home() {
  return (
    <header>
      <div>
        <h1><SiGnuprivacyguard />VEHICLE RENTAL</h1>
      </div>
      <div>
      <nav>
        <ul>  
          <li><Link to="/"><IoHome />HOME</Link></li>
          <li><Link to="/carlist"><IoCarSport />CARS</Link></li>
          <li><Link to="/bikelist"><RiMotorbikeFill />BIKES</Link></li>
          <li><Link to="/testimonials">TESTIMONIALS</Link></li>
          <li><Link to="/loginpage"><CgProfile />Login</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  );
}

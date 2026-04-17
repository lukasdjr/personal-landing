import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {

  
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scroll ? "navbar active" : "navbar"}>
      <h2>Personal Trainer Pires</h2>

      <ul>
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
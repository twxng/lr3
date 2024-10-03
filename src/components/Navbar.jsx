import "../assets/navbar.css";
import { useEffect } from 'react';
import { Icon } from "@iconify/react";

function Navbar({ selectedCount, toggleCart }) {
  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const navbg = document.querySelector('.nav-bg');

    const handleMenuToggle = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
      navbg.classList.toggle('active');
    };

    menuIcon.addEventListener('click', handleMenuToggle);

    return () => {
      menuIcon.removeEventListener('click', handleMenuToggle);
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="#" className="logo">
          Second Lab
        </a>
        <i className="bx bx-menu" id="menu-icon"></i>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">Collections</a>
          <a href="#">Merch</a>
          <a href="#">Hats</a>
          <a href="#">Login</a>
          <div className="cart-icon" onClick={toggleCart}>
            <Icon icon="tdesign:cart" width="30px" />
            {selectedCount > 0 && (
              <span className="cart-count">{selectedCount}</span>
            )}
          </div>
        </nav>
      </div>
      <div className="nav-bg"></div>
    </>
  );
}

export default Navbar;

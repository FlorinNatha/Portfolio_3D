import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../constants';
import 'boxicons/css/boxicons.min.css';
import logo from '../assets/image.png'

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <div className="w-20 h-screen fixed top-0 left-0 bg-black flex flex-col items-center py-5 text-white">
      <div className="mb-8">
        <Link to="/">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-full hover:scale-110 transition duration-300" />
        </Link>
      </div>

      <div className="flex flex-col gap-6 items-center">
        {navLinks.map(({ id, href, name, icon }) => (
          <Link key={id} to={href} title={name}>
            <i className={`bx ${icon} text-2xl ${active === href ? 'text-white' : 'text-gray-400'} hover:scale-110 transition`} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
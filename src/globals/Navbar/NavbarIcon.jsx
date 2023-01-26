import React from 'react';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import routes from '../../routes';

const NavbarIcon = () => {
      return (
        <Link href={routes.home} className='nav_link'>
          <div className='navbar-icon'>
            <Image src={logo} alt="Fuku Shop Logo" className='logo' height={100}  style={{cursor: 'pointer'}}/>

            <style jsx>{`
              .nav_link{
                text-decoration: none;
                position: relative;
                height: 60px;
                width: 100px;
              }

              .navbar-icon {
                display: flex;
                position: relative;
                align-items: center;
                justify-content: center;
                height: 80px;
                width: 100px;
                cursor: pointer;
              }
            `}</style>
          </div>
        </Link>
      )
}

export default NavbarIcon;

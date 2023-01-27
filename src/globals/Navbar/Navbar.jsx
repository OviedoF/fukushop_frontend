import React, { useState, useEffect } from 'react';
import NavbarIcon from './NavbarIcon';
import NavbarList from './NavbarList';
import { Link } from 'react-router-dom';
import  routes  from '../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.scss';
import logo from '../../assets/logo.png';
import env from '../env';


const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menuToggle, setMenuToggle] = useState(false);

    useEffect(() => {
            const handleScroll = () => {
                const currentScrollPos = window.pageYOffset;
                const visible = prevScrollPos > currentScrollPos;
                setVisible(visible);
                setPrevScrollPos(currentScrollPos);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <header className={`navbar ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
            <nav id="navbar">
                <div className="nav-wrapper">
                    <div className="logo" style={{padding: 1}}>
                        <img src={env.logoUrl} alt="logo" style={{height: '100%', objectFit: 'cover', transform: 'scale(2)'}} />
                    </div>

                    <ul id="menu">
                        <li><a>Inicio</a></li>
                        <li><a>Productos</a></li>
                    </ul>
                </div>
            </nav>

            <div className="menuIcon" onClick={() => setMenuToggle(!menuToggle)}>
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>


            <div className={menuToggle ? 'overlay-menu active' : 'overlay-menu'}>
                <FontAwesomeIcon icon={faXmark} onClick={() => setMenuToggle(false)} id='close-overlay-menu' />

                <ul id="menu">
                    <li onClick={() => setMenuToggle(false)}>Inicio</li>
                    <li onClick={() => setMenuToggle(false)}>Productos</li>
                </ul>
                
            </div>
            
            {/* <NavbarIcon />

            <NavbarList /> */}

            <style jsx>{`
                header {
                    display: flex;
                    justify-content: space-between;
                    padding: 0 2rem;
                    align-items: center;
                    height: 60px;
                    position: relative;
                    width: 100%;
                    border-bottom: 3px solid var(--color-secondary);
                    position: fixed;
                    top: 0;
                    left: 0;
                    background-color: var(--color-primary);
                    z-index: 1000;
                }

                .navbar--hidden {
                    transform: translateY(-100%);
                    transition: transform 0.3s ease-in-out;
                }

                .navbar--visible {
                    transform: translateY(0);
                    transition: transform 0.3s ease-in-out;
                }

                #navbar {
                    position: fixed;
                    top: 0;
                    height: 60px;
                    line-height: 60px;
                    width: 100%;
                    z-index: 10;
                  }
                  
                  .nav-wrapper {
                    margin: auto;
                    text-align: center;
                    width: 70%;
                  } @media(max-width: 768px) {
                      .nav-wrapper {
                        width: 90%;
                      }
                    } @media(max-width: 638px) {
                        .nav-wrapper {
                          width: 100%;
                        }
                      } 
                  
                  
                  .logo {
                    float: left;
                    margin-left: 28px;
                    font-size: 1.5em;
                    height: 60px;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                  } @media(max-width: 768px) {
                      .logo {
                  /*       margin-left: 5px; */
                      }
                    }
                  
                  #navbar ul {
                    display: inline-block;
                    float: right;
                    list-style: none;
                    /* margin-right: 14px; */
                    margin-top: -2px;
                    text-align: right;
                    transition: transform 0.5s ease-out;
                    -webkit-transition: transform 0.5s ease-out;
                  } @media(max-width: 640px) {
                      #navbar ul {
                        display: none;
                      }
                    } @media(orientation: landscape) {
                        #navbar ul {
                          display: inline-block;
                        }
                      }
                  
                  #navbar li {
                    display: inline-block;
                  }
                  
                  #navbar li a {
                    display: block;
                    font-size: 1em;
                    height: 100%;
                    letter-spacing: 1px;
                    margin: 0 20px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 4px;
                    position: relative;
                    text-decoration: none;
                    text-transform: uppercase;
                    transition: all 0.5s ease;
                    -webkit-transition: all 0.5s ease;
                  }
                  
                  #navbar li a:hover {
                    /* border-bottom: 1px solid var(--color-text); */
                    color: var(--color-text);
                    transition: all 1s ease;
                    -webkit-transition: all 1s ease;
                  }
                  
                  /* Animated Bottom Line */
                  #navbar li a:before, #navbar li a:after {
                    content: '';
                    position: absolute;
                    width: 0%;
                    height: 1px;
                    bottom: -1px;
                    background: var(--color-text);
                  }
                  
                  #navbar li a:before {
                    left: 0;
                    transition: 0.5s;
                  }
                  
                  #navbar li a:after {
                    background: var(--color-text);
                    right: 0;
                    /* transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1); */
                  }
                  
                  #navbar li a:hover:before {
                    background: var(--color-text);
                    width: 100%;
                    transition: width 0.5s cubic-bezier((0.22, 0.61, 0.36, 1));
                  }
                  
                  #navbar li a:hover:after {
                    background: transparent;
                    width: 100%;
                    /* transition: 0s; */
                  }
                  
                  
                  
                  /*======================================================
                                      Mobile Menu Menu Icon
                    ======================================================*/
                  @media(max-width: 640px) {
                    .menuIcon {
                      cursor: pointer;
                      display: block;
                      position: fixed;
                      right: 15px;
                      top: 20px;
                      height: 23px;
                      width: 27px;
                      z-index: 12;
                    }
                  
                    /* Icon Bars */
                    .icon-bars {
                      background: var(--color-text);
                      position: absolute;
                      left: 1px;
                      top: 45%;
                      height: 2px;
                      width: 20px;
                      -webkit-transition: 0.4s;
                      transition: 0.4s;
                    } 
                  
                    .icon-bars::before {
                      background: var(--color-text);
                      content: '';
                      position: absolute;
                      left: 0;
                      top: -8px;
                      height: 2px;
                      width: 20px;
                  /*     -webkit-transition: top 0.2s ease 0.3s;
                      transition: top 0.2s ease 0.3s; */
                      -webkit-transition: 0.3s width 0.4s;
                      transition: 0.3s width 0.4s;
                    }
                  
                    .icon-bars::after {
                      margin-top: 0px;
                      background: var(--color-text);
                      content: '';
                      position: absolute;
                      left: 0;
                      bottom: -8px;
                      height: 2px;
                      width: 20px;
                  /*     -webkit-transition: top 0.2s ease 0.3s;
                      transition: top 0.2s ease 0.3s; */
                      -webkit-transition: 0.3s width 0.4s;
                      transition: 0.3s width 0.4s;
                    }
                  
                    /* Bars Shadows */
                    .icon-bars.overlay {
                      background: rgb(97, 114, 129);
                      background: rgb(183, 199, 211);
                      width: 20px;
                      animation: middleBar 3s infinite 0.5s;
                      -webkit-animation: middleBar 3s infinite 0.5s;
                    } @keyframes middleBar {
                        0% {width: 0px}
                        50% {width: 20px}
                        100% {width: 0px}
                      } @-webkit-keyframes middleBar {
                          0% {width: 0px}
                          50% {width: 20px}
                          100% {width: 0px}
                        }
                  
                    .icon-bars.overlay::before {
                      background: rgb(97, 114, 129);
                      background: rgb(183, 199, 211);
                      width: 10px;
                      animation: topBar 3s infinite 0.2s;
                      -webkit-animation: topBar 3s infinite 0s;
                    } @keyframes topBar {
                        0% {width: 0px}
                        50% {width: 10px}
                        100% {width: 0px}
                      } @-webkit-keyframes topBar {
                          0% {width: 0px}
                          50% {width: 10px}
                          100% {width: 0px}
                        }
                  
                    .icon-bars.overlay::after {
                      background: rgb(97, 114, 129);
                      background: rgb(183, 199, 211);
                      width: 15px;
                      animation: bottomBar 3s infinite 1s;
                      -webkit-animation: bottomBar 3s infinite 1s;
                    } @keyframes bottomBar {
                        0% {width: 0px}
                        50% {width: 15px}
                        100% {width: 0px}
                      } @-webkit-keyframes bottomBar {
                          0% {width: 0px}
                          50% {width: 15px}
                          100% {width: 0px}
                        }
                  
                  
                    /* Toggle Menu Icon */
                    .menuIcon.toggle .icon-bars {
                      top: 5px;
                      transform: translate3d(0, 5px, 0) rotate(135deg);
                      transition-delay: 0.1s;
                      transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    }
                  
                    .menuIcon.toggle .icon-bars::before {
                      top: 0;
                      transition-delay: 0.1s;
                      opacity: 0;
                    }
                  
                    .menuIcon.toggle .icon-bars::after {
                      top: 10px;
                      transform: translate3d(0, -10px, 0) rotate(-270deg);
                      transition-delay: 0.1s;
                      transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    }
                  
                    .menuIcon.toggle .icon-bars.overlay {
                      width: 20px;
                      opacity: 0;
                      -webkit-transition: all 0s ease 0s;
                      transition: all 0s ease 0s;
                    }
                  }
                  
                  
                  /*======================================================
                                     Responsive Mobile Menu 
                    ======================================================*/
                  .overlay-menu {
                    background: lightblue;
                    color: var(--color-text);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: 0;
                    right: 0;
                    padding-right: 15px;
                    transform: translateX(-100%);
                    width: 100vw;
                    height: 100vh;
                    -webkit-transition: transform 0.2s ease-out;
                    transition: transform 0.2s ease-out;
                  }
                  
                  .overlay-menu ul, .overlay-menu li {
                    display: block;
                    position: relative;
                  }
                  
                  .overlay-menu li a {
                    display: block;
                    font-size: 1.8em;
                    letter-spacing: 4px;
                  /*   opacity: 0; */
                    padding: 10px 0;
                    text-align: right;
                    text-transform: uppercase;
                    -webkit-transition: color 0.3s ease;
                    transition: color 0.3s ease;
                  /*   -webkit-transition: 0.2s opacity 0.2s ease-out;
                    transition: 0.2s opacity 0.2s ease-out; */
                  }
                  
                  .overlay-menu li a:hover,
                  .overlay-menu li a:active {
                    color: rgb(28, 121, 184);
                    -webkit-transition: color 0.3s ease;
                    transition: color 0.3s ease;
                  }
            `}</style>
        </header>
    );
}

export default Navbar;

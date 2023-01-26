import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavbarList = () => {
    return (
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>
                    <FontAwesomeIcon icon={faShoppingBag} />
                </li>
            </ul>

            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }

                ul {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                }

                li {
                    list-style: none;
                    font-size: 1.2rem;
                    color: var(--color-tertiary);
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    padding: 0 1rem;
                    transition: all 0.3s ease;
                    margin: 0 1rem;
                    color: var(--color-text);
                    font-family: 'Prompt', sans-serif;
                    position: relative;
                }

                li::after {
                    content: '';
                    position: absolute;
                    bottom: -3px;
                    left: 50%;
                    width: 0px;
                    height: 3px;
                    z-index: -1;
                    transition: all 0.3s ease;
                }

                li:hover::after {
                    width: 100%;
                    z-index: 2;
                    left: 0;
                    background-color: var(--color-text);
                }
            `}</style>
        </nav>
    );
}

export default NavbarList;

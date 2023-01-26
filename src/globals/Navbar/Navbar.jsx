import React from 'react';
import NavbarIcon from './NavbarIcon';
import NavbarList from './NavbarList';

const Navbar = () => {
    return (
        <header>
            <NavbarIcon />

            <NavbarList />

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
                    background-color: transparent;
                }
            `}</style>
        </header>
    );
}

export default Navbar;

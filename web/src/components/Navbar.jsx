import React from 'react';
import './navbar.css';

const Navbar = () => {

    React.useEffect(() => {
        document.getElementsByClassName("navbar-toggler")[0].addEventListener('click', () => {
            const navbarCollapse = document.getElementById("navbarSupportedContent");
            navbarCollapse.classList.toggle('vh-100');
            navbarCollapse.classList.add('d-flex');
            navbarCollapse.classList.add('flex-column');
            navbarCollapse.children[0].classList.add('gap-4');
            navbarCollapse.classList.add('w-full');
            navbarCollapse.classList.add('justify-content-center');

            if (navbarCollapse.classList.contains('vh-100')) {
                navbarCollapse.classList.remove('opacity-0');
            }else{
                navbarCollapse.classList.add('opacity-0');
            }
        })
    })

    return (
        <>
            <header>
                <nav className='navbar navbar-expand-lg fixed-top m-0 z-3 items-center d-flex align-middle flex navbar-size'>
                    <div className="container-fluid p-0 m-0">
                        <a href='/' className='d-flex navbar-size'>
                            <img src='./dsc_logo.png' alt="logo" id='navbar-nav-app-logo' className='my-auto'/>
                        </a>
                        <button class="navbar-toggler btn me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="ri-menu-line text-muted fs-5"></i>
                        </button>
                        <div className='collapse ms-md-5 navbar-collapse col' id="navbarSupportedContent">
                            <ul class="navbar-nav ul-none mb-2 mb-lg-0">
                                <li className='nav-item'><a href='/'>Home</a></li>
                                <li className='nav-item'><a href='/about'>About</a></li>
                                <li className='nav-item'><a href='/events'>Events</a></li>
                                <li className='nav-item'><a href='/team'>Team</a></li>
                                <li className='nav-item'><a href='/blogs'>Blogs</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='navbar-size'></div>
        </>
    );
};

export default Navbar;
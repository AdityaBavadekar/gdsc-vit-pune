import './navbar.css';

const Navbar = () => {
    return (
        <>
            <header>
                <nav className='navbar navbar-expand-lg fixed-top z-3 flex navbar-size'>
                    <div className="container-fluid">
                        <a href='/' className='d-flex navbar-size'>
                            <img src='./dsc_logo.png' alt="logo" id='navbar-nav-app-logo' className='my-auto'/>
                        </a>
                        <button class="navbar-toggler btn me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="ri-menu-line text-muted fs-5"></i>
                        </button>
                        <div className='collapse ms-md-5 navbar-collapse' id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
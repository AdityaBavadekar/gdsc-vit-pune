import './navbar.css';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav className='navbar navbar-expand-lg fixed-top z-3 flex w-full items-center z-50'>
                        <div className='container-fluid '>
                            <a href='/'>
                                <img src='./dsc_logo.png' alt="logo" id='navbar-nav-app-logo'/>
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className='collapse navbar-collapse navbarSupportedContentHolder' id="navbarSupportedContent">
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
                </div>

            </header>
            <div className='navbar-size'></div>
        </>
    );
};

export default Navbar;
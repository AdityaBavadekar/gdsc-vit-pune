import './navbar.css';

const Navbar = () => {
    return (
        <>
            <header>
                <nav>
                    <div className='navbar fixed-top z-3 flex w-full items-center z-50'>
                        <a href='/'>
                            <img src='./dsc_logo.png' alt="logo" />
                        </a>
                        <div>
                            <ul>
                                <li><a href='/'>Home</a></li>
                                <li><a href='/about'>About</a></li>
                                <li><a href='/events'>Events</a></li>
                                <li><a href='/team'>Team</a></li>
                                <li><a href='/blogs'>Blogs</a></li>
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
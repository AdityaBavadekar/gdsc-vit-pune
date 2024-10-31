import './footer.css';

const Footer = () => {
    return (
      <footer className='border-top'>
        <div className="container">
            <div className="container user-select-none justify-content-center pt-5 fs-3 flex d-flex flex-column align-items-center">
                <img src='/dev_logo.png' alt='Dev Logo' className='dev-logo w-25 mb-5'/>
                <div className="flex flex-column justify-content-center d-flex">
                    <p className='text-center'>Developer Student Clubs, VIT Pune</p>
                    <p className='text-center text-muted fs-6'>Copyright © 2024 All Rights Reserved</p>
                    <div className="container text-center d-flex justify-content-center py-2 align-middle items-center">
                        <a href="mailto:gdsc@vit.edu" className='my-auto text-muted text-decoration-none ms-3'>
                            <div className="container d-flex gap-3 fs-5">
                                <i class="ri-mail-fill fs-2"></i>
                                <p className='my-auto'>gdsc@vit.edu</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="p-5 container justify-content-center align-items-center d-flex flex-column">
                {/* <p className='fs-5 mb-5'>Follow us on</p> */}
                <div className="container">
                    <ul className='social-media-links row d-flex justify-content-center items-center gap-4'>
                        <li className="social-media-item col-md col-2"><a href="https://instagram.com/dscvitpune" className="social-media-link" target="_blank"><i class="ri-instagram-fill" title='Instagram'></i></a></li>
                        <li className="social-media-item col-md col-2"><a href="https://x.com/gdscvitpune" className="social-media-link" target="_blank"><i class="ri-twitter-fill" title='X'></i></a></li>
                        <li className="social-media-item col-md col-2"><a href="https://linkedin.com/company/gdscvitpune/" className="social-media-link" target="_blank"><i class="ri-linkedin-fill" title='Linkedin'></i></a></li>
                        <li className="social-media-item col-md col-2"><a href="https://facebook.com/gdscvitpune" className="social-media-link" target="_blank"><i class="ri-facebook-fill" title='Facebook'></i></a></li>
                        <li className="social-media-item col-md col-2"><a href="https://github.com/dscvitpune" className="social-media-link" target="_blank"><i class="ri-github-fill" title='GitHub'></i></a></li>
                        <li className="social-media-item col-md col-2"><a href="https://discord.com/gdscvitpune" className="social-media-link" target="_blank"><i class="ri-discord-fill" title='Discord'></i></a></li>
                        <li className="social-media-item col-md col-2"><a href="https://youtube.com/@gdscvitpune" className="social-media-link" target="_blank"><i class="ri-youtube-fill" title='Youtube'></i></a></li>
                        <li className="social-media-item col-md col-2"><a href="https://medium.com/dscvitpune" className="social-media-link" target="_blank"><i class="ri-medium-fill" title='Medium'></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="px-5 pt-5 container justify-content-center align-items-center d-flex flex-column">
                <p className='fs-5 font-italic'>Made with ❤️ by DSC VIT, Pune</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer

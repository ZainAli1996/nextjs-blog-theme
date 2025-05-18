'use client'
import LogoDark from "next/image";

function Header() {
    return (
        <header>
            {/* Desktop Header Start */}
            <div className="desktop-header">
                <div className="dg-container">
                    <div className="header-top-sec">
                        <div className="row ver-center">
                            <div className="col-xl-4">
                                <div className="our-socials">
                                    <p className="hdg-14-dark weight-600 header-txt">Follow Us</p>
                                    <ul className="header-icons">
                                        <li>
                                            <a className="single-icon" href="https://www.facebook.com/" rel="nofollow"
                                                aria-label="Facebook" target="_blank">
                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 0C5.40001 0 0 5.40964 0 12.0723C0 18.0964 4.39201 23.0964 10.128 24V15.5663H7.07998V12.0723H10.128V9.40964C10.128 6.38554 11.916 4.72289 14.664 4.72289C15.972 4.72289 17.34 4.95179 17.34 4.95179V7.92772H15.828C14.34 7.92772 13.872 8.8554 13.872 9.80723V12.0723H17.208L16.668 15.5663H13.872V24C16.6997 23.5516 19.2746 22.103 21.1319 19.9157C22.9891 17.7285 24.0064 14.9465 24 12.0723C24 5.40964 18.6 0 12 0Z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="single-icon" href="https://www.pinterest.com/" rel="nofollow"
                                                aria-label="Pinterest" target="_blank">
                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M11.8512 0C5.27881 0 0 5.32158 0 11.9502C0 16.8702 2.88841 20.9873 7.07161 22.8955C7.07161 20.6545 7.05599 20.9434 8.76359 13.6565C7.82519 11.7627 8.5548 8.63614 10.656 8.63614C13.572 8.63614 11.5908 12.9594 11.2536 14.6608C10.9548 15.9664 11.9508 16.9711 13.146 16.9711C15.4368 16.9711 16.9296 14.0582 16.9296 10.6447C16.9296 8.03345 15.138 6.12539 12.0504 6.12539C6.56041 6.12539 5.16841 12.2395 7.07161 14.1586C7.55041 14.8834 7.07161 14.9173 7.07161 15.866C6.73921 16.8691 4.0836 15.411 4.0836 11.649C4.0836 8.23428 6.8724 4.21817 12.5484 4.21817C17.0292 4.21817 20.0172 7.53151 20.0172 11.0467C20.0172 15.7658 17.4276 19.1807 13.644 19.1807C12.3492 19.1807 11.154 18.4771 10.7556 17.6736C10.032 20.4882 9.88559 21.9151 8.76359 23.4978C9.85919 23.7991 10.9548 24 12.15 24C18.7224 24 24 18.6784 24 12.051C23.7024 5.32193 18.4236 0 11.8512 0Z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="single-icon" href="https://x.com/" rel="nofollow" aria-label="X"
                                                target="_blank">
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_156_16)">
                                                        <circle cx="12" cy="12" r="12" />
                                                        <path d="M13.3247 11.0017L17.5833 5H16.3498L12.7082 10.1326L9.06614 5H5L10.6749 12.9979L6.41593 19H7.64944L11.2915 13.867L14.9339 19H19L13.3247 11.0017ZM7.00517 6.08793H8.6043L16.9944 17.912H15.3953L7.00517 6.08793Z" fill="#FFFFFF" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_156_16">
                                                            <rect width="24" height="24" fill="#FFFFFF" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="single-icon" href="https://www.instagram.com/" rel="nofollow"
                                                aria-label="Instagram" target="_blank">
                                                <svg width="24" height="24" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                        d="M12 0C18.623 0 24 5.37703 24 12C24 18.623 18.623 24 12 24C5.37703 24 0 18.623 0 12C0 5.37703 5.37703 0 12 0ZM12 4.5C9.96314 4.5 9.70772 4.50863 8.90775 4.54514C8.10947 4.58156 7.56427 4.70836 7.08717 4.89375C6.594 5.08542 6.17573 5.34188 5.75878 5.75883C5.34183 6.17578 5.08538 6.59405 4.8937 7.08722C4.70831 7.56427 4.58156 8.10947 4.54509 8.90775C4.50863 9.70772 4.5 9.96314 4.5 12C4.5 14.0369 4.50863 14.2923 4.54509 15.0923C4.58156 15.8905 4.70831 16.4357 4.8937 16.9128C5.08538 17.406 5.34183 17.8242 5.75878 18.2412C6.17573 18.6582 6.594 18.9146 7.08717 19.1063C7.56427 19.2916 8.10947 19.4184 8.90775 19.4549C9.70772 19.4914 9.96314 19.5 12 19.5C14.0369 19.5 14.2923 19.4914 15.0923 19.4549C15.8905 19.4184 16.4357 19.2916 16.9128 19.1063C17.406 18.9146 17.8242 18.6582 18.2412 18.2412C18.6582 17.8242 18.9146 17.406 19.1063 16.9128C19.2916 16.4357 19.4184 15.8905 19.4549 15.0923C19.4914 14.2923 19.5 14.0369 19.5 12C19.5 9.96314 19.4914 9.70772 19.4549 8.90775C19.4184 8.10947 19.2916 7.56427 19.1063 7.08722C18.9146 6.59405 18.6582 6.17578 18.2412 5.75883C17.8242 5.34188 17.406 5.08542 16.9128 4.89375C16.4357 4.70836 15.8905 4.58156 15.0923 4.54514C14.2923 4.50863 14.0369 4.5 12 4.5ZM12 5.85136C14.0026 5.85136 14.2398 5.859 15.0307 5.89509C15.7619 5.92847 16.159 6.05063 16.4233 6.15333C16.7734 6.28936 17.0232 6.45192 17.2856 6.71438C17.5481 6.97678 17.7106 7.22667 17.8467 7.57673C17.9494 7.84102 18.0716 8.23809 18.1049 8.96934C18.141 9.76022 18.1486 9.99741 18.1486 12C18.1486 14.0026 18.141 14.2398 18.1049 15.0307C18.0716 15.7619 17.9494 16.159 17.8467 16.4233C17.7106 16.7734 17.5481 17.0232 17.2856 17.2856C17.0232 17.5481 16.7734 17.7106 16.4233 17.8467C16.159 17.9494 15.7619 18.0716 15.0307 18.1049C14.2399 18.141 14.0027 18.1486 12 18.1486C9.99727 18.1486 9.76013 18.141 8.96934 18.1049C8.23809 18.0716 7.84102 17.9494 7.57673 17.8467C7.22662 17.7106 6.97678 17.5481 6.71433 17.2856C6.45188 17.0232 6.28936 16.7734 6.15333 16.4233C6.05063 16.159 5.92842 15.7619 5.89505 15.0307C5.85895 14.2398 5.85136 14.0026 5.85136 12C5.85136 9.99741 5.85895 9.76022 5.89505 8.96934C5.92842 8.23809 6.05063 7.84102 6.15333 7.57673C6.28936 7.22667 6.45188 6.97678 6.71433 6.71438C6.97678 6.45192 7.22662 6.28936 7.57673 6.15333C7.84102 6.05063 8.23809 5.92847 8.96934 5.89509C9.76022 5.859 9.99741 5.85136 12 5.85136ZM12 8.14866C9.87295 8.14866 8.14866 9.87295 8.14866 12C8.14866 14.127 9.87295 15.8513 12 15.8513C14.127 15.8513 15.8513 14.127 15.8513 12C15.8513 9.87295 14.127 8.14866 12 8.14866ZM12 14.5C10.6193 14.5 9.50002 13.3807 9.50002 12C9.50002 10.6193 10.6193 9.50002 12 9.50002C13.3807 9.50002 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5ZM16.9035 7.9965C16.9035 8.49356 16.5006 8.89645 16.0035 8.89645C15.5065 8.89645 15.1035 8.49356 15.1035 7.9965C15.1035 7.49944 15.5065 7.0965 16.0035 7.0965C16.5006 7.0965 16.9035 7.49944 16.9035 7.9965Z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 web-logo">
                                <a href="/">
                                    <LogoDark src="/images/logo-dark.png" width={229} height={34} className="img-fluid" alt="Header-logo" />
                                </a>
                            </div>
                            <div className="col-xl-4 hor-end">
                                <div className="find-it">
                                    <p className="hdg-14-dark weight-600 header-txt">Search</p>
                                    <div className="search-btn">
                                        <div className="circle"></div>
                                        <div className="line"></div>
                                    </div>
                                </div>
                                <div className="desktop-searchbar">
                                    <form action="/search" className="search-form">
                                        <input type="search" name="q"
                                            placeholder="Search on NextJS - Blog"
                                            aria-label="search" required />
                                        <button type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-bottom-sec">
                    <div className="dg-container-fluid">
                        <div className="row ver-center">
                            <div className="col-xl-12">
                                <ul className="menu-tab dynamic-color">
                                    <li className="single-list"><a href="/fashion">Fashion</a></li>
                                    <li className="single-list"><a href="/beauty">Beauty</a></li>
                                    <li className="single-list"><a href="/lifestyle">Lifestyle</a></li>
                                    <li className="single-list"><a href="/travel">Travel</a></li>
                                    <li className="single-list"><a href="/technology">Technology</a></li>
                                    <li className="single-list"><a href="/entertainment">Entertainment</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Desktop Header End */}

            {/* Mobile Header Start */}
            <div className="mobile-header">
                <div className="dg-container">
                    <div className="row height-64">
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                            <div className="web-logo">
                                <a href="/">
                                    <LogoDark src="/images/logo-dark.png" width={229} height={34} className="img-fluid" alt="Mobile-logo" priority={true} />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 hor-end">
                            <button className="hamburger-menu">
                                <span className="single-bar"></span>
                                <span className="single-bar"></span>
                                <span className="single-bar"></span>
                            </button>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 show-menu hide-menu">
                            <ul className="menu-tab dynamic-color">
                                <li className="single-list"><a href="/fashion">Fashion</a></li>
                                <li className="single-list"><a href="/beauty">Beauty</a></li>
                                <li className="single-list"><a href="/lifestyle">Lifestyle</a></li>
                                <li className="single-list"><a href="/travel">Travel</a></li>
                                <li className="single-list"><a href="/technology">Technology</a></li>
                                <li className="single-list"><a href="/entertainment">Entertainment</a></li>
                            </ul>

                            <div className="mobile-searchbar">
                                <form action="/search" className="search-form">
                                    <input type="search" name="q" placeholder="Search on NextJS - Blog" aria-label="search" required />
                                    <button type="submit">
                                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_32_2)">
                                                <mask id="mask0_32_2" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="18">
                                                    <path d="M20 0H0V18H20V0Z" fill="white" />
                                                </mask>
                                                <g mask="url(#mask0_32_2)">
                                                    <path d="M19.6273 16.1946L13.0274 10.8054C13.1575 10.6071 13.2785 10.4028 13.3843 10.1926C13.8895 9.2043 14.1435 8.13785 14.1435 7.02337C14.1435 3.1512 10.9706 0 7.07175 0C3.17291 0 0 3.1512 0 7.02337C0 9.23427 1.0163 11.2711 2.78877 12.6139H2.7918C2.7918 12.6139 2.79785 12.6198 2.80087 12.6229C4.03798 13.5541 5.51404 14.0467 7.07175 14.0467C7.85213 14.0467 8.6083 13.9235 9.32818 13.6832C10.045 13.4429 10.7256 13.0884 11.3426 12.6229C11.3517 12.6168 11.3608 12.6108 11.3668 12.6018C11.4757 12.5207 11.5815 12.4336 11.6845 12.3465L18.3236 17.7687C18.5142 17.9249 18.7441 18 18.974 18C19.2704 18 19.5638 17.8738 19.7665 17.6305C20.1264 17.1949 20.0628 16.5521 19.6273 16.1946ZM10.1115 10.9917C10.1115 10.9917 10.0965 11.0037 10.0874 11.0097C9.21327 11.6645 8.17275 12.01 7.07175 12.01C5.97076 12.01 4.91816 11.6616 4.041 11.0007C4.041 11.0007 4.03898 10.9986 4.03495 10.9947H4.03193C2.77365 10.0394 2.05075 8.59446 2.05075 7.02337C2.05075 4.2747 4.30415 2.03672 7.07175 2.03672C9.83936 2.03672 12.0927 4.2747 12.0927 7.02337C12.0927 7.81642 11.9113 8.57343 11.5544 9.27333C11.2125 9.94329 10.7135 10.538 10.1115 10.9917Z" fill="white" />
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_32_2">
                                                    <rect width="20" height="18" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile Header End */}
        </header>
    );
}

export default Header;
'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer-sec">
            <div className="dg-container">
                <div className="row row-gap-40">
                    <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-xs-12">
                        <Link href="/">
                            <Image src="/images/logo-light.png" className="img-fluid img-block mb-20" width={229} height={34} alt="Footer-logo" />
                        </Link>
                        <p className="ft-disclaimer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique parturient sociosqu sed, tellus nec, lorem habitasse. Integer nunc risus tincidunt tellus sed vitae. Curabitur commodo neque sapien, non dapibus velit malesuada nec. Praesent sit amet ipsum porta, dapibus elit at, varius lacus. Suspendisse potenti. Fusce nec ligula id libero vulputate consequat. Aenean accumsan nulla vel turpis tristique, vitae pharetra dolor egestas. Vivamus vel magna at neque vulputate euismod, nec fermentum magna.</p>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-5 col-sm-12 col-xs-12">
                        <p className="hdg-20-dark color-white weight-500 mb-20">Company</p>
                        <ul className="ft-menu">
                            <li><Link href="/about" className="ft-link">About Us</Link></li>
                            <li><Link href="/contact" className="ft-link">Contact Us</Link></li>
                            <li><Link href="/privacy-policy" className="ft-link">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12">
                        <p className="hdg-20-dark color-white weight-500 mb-20">Categories</p>
                        <ul className="ft-menu">
                            <li><Link href="/travel" className="ft-link">Travel</Link></li>
                            <li><Link href="/beauty" className="ft-link">Beauty</Link></li>
                            <li><Link href="/fashion" className="ft-link">Fashion</Link></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12">
                        <p className="hdg-20-dark color-white weight-500 mb-20">Follow Us</p>
                        <ul className="ft-menu">
                            <li><a href="https://www.facebook.com/" className="ft-link" rel="nofollow" target="_blank">Facebook</a></li>
                            <li><a href="https://www.instagram.com/" className="ft-link" rel="nofollow" target="_blank">Instagram</a></li>
                            <li><a href="https://www.pinterest.com/" className="ft-link" rel="nofollow" target="_blank">Pinterest</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p className="our-rights">© Copyrights 2025 NextJS - Blog. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

'use client'
import LogoLight from 'next/image';

export default function Footer() {
    return (
        <footer className="footer-sec">
            <div className="dg-container">
                <div className="row row-gap-40">
                    <div className="col-xl-5 col-lg-4 col-md-7 col-sm-12 col-xs-12">
                        <a href="/">
                            <LogoLight src="/images/logo-light.png" className="img-fluid img-block" width={229} height={34} alt="Footer-logo" />
                        </a>
                        <p className="ft-disclaimer">Third-party trademarks are the property of their respective third-party owners. Presence of a third-party trademark does not mean that NextJS - Blog has any relationship with that third-party or that the third-party endorses NextJS - Blog or its services. When you buy through links on NextJS - Blog we may earn a commission.</p>
                        <ul className="ft-social">
                            <li>
                                <a href="https://www.facebook.com/" rel="nofollow" aria-label="Facebook" target="_blank">
                                    <svg width="12" height="20" viewBox="0 0 12 20" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.3902 8.24911L10.0925 10.5993H6.51761V18.8249H4.34507V10.5993H1.08626V8.24911H4.34507V6.09518C4.34507 3.10694 6.04182 1.17508 8.6695 1.17508C9.79488 1.17508 10.4966 1.23972 10.9018 1.29847L10.8703 3.52409L9.19959 3.52761C9.15398 3.52292 8.06554 3.43126 7.28016 4.21152C6.77397 4.71328 6.51761 5.43478 6.51761 6.35371V8.24913H10.3902V8.24911ZM8.00906 5.08226C8.43704 4.651 9.104 4.698 9.15289 4.70035L11.9403 4.69918L12 0.350177L11.5807 0.238542C11.3113 0.166875 10.4868 0 8.6695 0C5.43351 0 3.2588 2.45006 3.2588 6.09518V7.07403H0V11.7744H3.2588V20H7.60387V11.7744H11.0386L11.635 7.07403H7.60388V6.3537C7.60388 5.78144 7.74074 5.3537 8.00906 5.08226Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.pinterest.com/" rel="nofollow" aria-label="Pinterest" target="_blank">
                                    <svg width="16" height="20" viewBox="0 0 16 20" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.57709 13.228C6.03684 15.9814 5.37753 18.6211 3.42381 20C2.82025 15.8384 4.30903 12.7128 5.00045 9.39448C3.82146 7.46524 5.14204 3.58242 7.62805 4.53893C10.6869 5.71569 4.97936 11.7123 8.81054 12.4613C12.8114 13.2431 14.4448 5.71079 11.9643 3.26156C8.37972 -0.275511 1.53026 3.18101 2.37233 8.24504C2.57719 9.48285 3.8923 9.85835 2.89805 11.5673C0.603867 11.0722 -0.0805118 9.31291 0.00734987 6.96719C0.149426 3.12735 3.55486 0.439323 6.97124 0.0672684C11.2915 -0.402947 15.3461 1.60927 15.906 5.56144C16.5366 10.0224 13.9563 14.8535 9.33626 14.5058C8.08394 14.4111 7.55822 13.8075 6.57709 13.228Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/" rel="nofollow" aria-label="X" target="_blank">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_21_56)">
                                            <path d="M15.7512 0H18.818L12.1179 8.47183L20 20H13.8284L8.99458 13.0082L3.46359 20H0.394938L7.5613 10.9385L0 0H6.32828L10.6977 6.39077L15.7512 0ZM14.6748 17.9692H16.3742L5.40491 1.9241H3.58132L14.6748 17.9692Z"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_21_56">
                                                <rect width="20" height="20"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" rel="nofollow" aria-label="Instagram" target="_blank">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.86967 0.122729C4.24178 0.196179 2.83082 0.594174 1.69149 1.72868C0.548196 2.86915 0.155142 4.2857 0.0815085 5.89664C0.0357365 6.90211 -0.231914 14.4983 0.544217 16.4904C1.06761 17.8343 2.09844 18.8676 3.45468 19.3927C4.08753 19.6389 4.80995 19.8054 5.86967 19.8541C14.7305 20.2551 18.0151 20.0368 19.4002 16.4904C19.6459 15.859 19.8151 15.1373 19.8619 14.0802C20.2669 5.19669 19.7963 3.27114 18.2519 1.72868C17.027 0.506824 15.5862 -0.32492 5.86967 0.122729ZM5.95123 18.0675C4.98107 18.0238 4.45471 17.8622 4.10346 17.7262C3.21986 17.3828 2.55617 16.7218 2.21487 15.8434C1.62382 14.3297 1.81985 7.1405 1.87259 5.97721C1.92433 4.83773 2.15518 3.79633 2.95917 2.99235C3.95421 1.99977 5.23978 1.51332 13.9932 1.90837C15.1354 1.95998 16.1793 2.19035 16.9853 2.99235C17.9803 3.98491 18.4739 5.28038 18.0719 14.0001C18.028 14.9679 17.8659 15.493 17.7295 15.8434C16.829 18.1511 14.7574 18.4714 5.95123 18.0675ZM14.0897 4.68961C14.0897 5.3467 14.624 5.88102 15.2838 5.88102C15.9434 5.88102 16.4788 5.3467 16.4788 4.68961C16.4788 4.03253 15.9434 3.4987 15.2838 3.4987C14.624 3.4987 14.0897 4.03253 14.0897 4.68961ZM4.86267 9.98797C4.86267 12.8029 7.15028 15.0851 9.97218 15.0851C12.7941 15.0851 15.0818 12.8029 15.0818 9.98797C15.0818 7.173 12.7941 4.89224 9.97218 4.89224C7.15028 4.89224 4.86267 7.173 4.86267 9.98797ZM6.65573 9.98797C6.65573 8.16161 8.14034 6.67984 9.97218 6.67984C11.8041 6.67984 13.2887 8.16161 13.2887 9.98797C13.2887 11.8153 11.8041 13.2975 9.97218 13.2975C8.14034 13.2975 6.65573 11.8153 6.65573 9.98797Z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-5 col-sm-12 col-xs-12">
                        <p className="hdg-20-dark color-white weight-500 mb-20">Company</p>
                        <ul className="ft-menu">
                            <li><a href="/about" className="ft-link">About Us</a></li>
                            <li><a href="/contact" className="ft-link">Contact Us</a></li>
                            <li><a href="/impressum" className="ft-link">Impressum</a></li>
                            <li><a href="/privacy-policy" className="ft-link">Privacy Policy</a></li>
                            <li><a href="/terms-conditions" className="ft-link">Terms &amp; Conditions</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-5 col-sm-12 col-xs-12">
                        <p className="hdg-20-dark color-white weight-500 mb-20">Categories</p>
                        <ul className="ft-menu">
                            <li><a href="/travel" className="ft-link">Travel</a></li>
                            <li><a href="/beauty" className="ft-link">Beauty</a></li>
                            <li><a href="/fashion" className="ft-link">Fashion</a></li>
                            <li><a href="/lifestyle" className="ft-link">Lifestyle</a></li>
                            <li><a href="/entertainment" className="ft-link">Entertainment</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-5 col-sm-12 col-xs-12">
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

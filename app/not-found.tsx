import Link from 'next/link';
import "./style.css";

const ErrorPage = () => {
    return (
        <section className="error-page-sec">
            <div className="dg-container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="error-page-content">
                            <h1>404</h1>
                            <h2>Oops!, Page Not Found.</h2>
                            <p>Sorry, The page you are looking for can't be found.</p>
                            <p></p>
                            <div className="home-btn">
                                <Link href="/">Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage;
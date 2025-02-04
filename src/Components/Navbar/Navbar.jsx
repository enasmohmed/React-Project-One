import { Link } from "react-router-dom";


export default function Navbar() {
    
    return <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top  text-uppercase p-3">
            <div className="container">
                <Link className="navbar-brand fs-2 fw-bolder text-white" to="startFramework">Start Framework</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                        <li className="nav-item">
                            <Link className="nav-link"  activeClassName="active" aria-current="page" to="about">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  activeClassName="active" to="portfolio">portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  activeClassName="active" to="contact">contact</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>

    </>
}

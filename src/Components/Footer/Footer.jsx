import React from 'react'

export default function Footer() {
    return <>


        <footer className="section-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">LOCATION</h5>
                                <p className="card-text">2215 John Daniel Drive</p>
                                <p className="card-text">Clark, MO 65243</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">AROUND THE WEB</h5>
                                <p className="card-text">
                                    <div className="social-icons">
                                        <i className="fa fa-facebook"></i>
                                        <i className="fa fa-twitter"></i>
                                        <i className="fa fa-linkedin"></i>
                                        <i className="fa fa-globe"></i>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">ABOUT FREELANCER</h5>
                                <p className="card-text">Freelance is a free to use, licensed Bootstrap theme <br /> created by Route.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>


        <div className="copyright text-center">
            Copyright &copy; Enas Mohmaed 2025
        </div>
    </>
}

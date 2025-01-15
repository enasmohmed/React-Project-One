import React from 'react';

export  function About() {
    

    return <>

        <section className='about-section p-5 m-5'>
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <div className="title-about pt-5">
                    <h1 className='text-uppercase fw-bolder'>about component</h1>
                </div>
                <div className="line-star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                
                <div className="row m-5">
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
                            CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML,
                            CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
    </>
}

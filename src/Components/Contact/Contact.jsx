import React from 'react';
export function Contact() {

    
    return (
        <>
            <div className="section-contact p-5 m-5">
                <div className="container d-flex justify-content-center align-items-center flex-column">
                    <div className="section-title">
                        <h2 className="text-uppercase fw-bolder">conatct section</h2>
                    </div>
                    <div className="line-star">
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>



                    <form className='w-50 mt-5'>
                        
                        <div className="form-group">
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="User Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="User Age" />
                        </div>
                        
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="User Password" />
                        </div>
                    
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>

                </div>
            </div>
        </>
    )
}


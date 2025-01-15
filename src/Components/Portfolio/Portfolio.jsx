import React, { useState } from "react";

import image1 from "../../assets/portfolio/poert1.png";
import image2 from "../../assets/portfolio/poert2.png";
import image3 from "../../assets/portfolio/poert3.png";




export default function Portfolio() {

    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (image) => {
        setSelectedImage(image);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return <>
        <div className="section-portfolio p-5 m-5">
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <div className="section-title">
                    <h2 className="text-uppercase fw-bolder">portfolio component</h2>
                </div>
                <div className="line-star">
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>

                <div className="row mt-5 mb-0">

                    <div className="card col-md-4 bg-transparent border-0 mb-5" onClick={() => openImageModal(image1)}>
                        <img className="card-img-top rounded" src={image1} alt="Card 1" />
                    </div>
                    <div className="card col-md-4 bg-transparent border-0 mb-5" onClick={() => openImageModal(image2)}>
                        <img className="card-img-top rounded" src={image2} alt="Card 1" />
                    </div>
                    <div className="card col-md-4 bg-transparent border-0 mb-5" onClick={() => openImageModal(image3)}>
                        <img className="card-img-top rounded" src={image3} alt="Card 1" />
                    </div>
                    <div className="card col-md-4 bg-transparent border-0 mb-5" onClick={() => openImageModal(image1)}>
                        <img className="card-img-top rounded" src={image1} alt="Card 1" />
                    </div>
                    <div className="card col-md-4 bg-transparent border-0 mb-5" onClick={() => openImageModal(image2)}>
                        <img className="card-img-top rounded" src={image2} alt="Card 1" />
                    </div>
                    <div className="card col-md-4 bg-transparent border-0 mb-5" onClick={() => openImageModal(image3)}>
                        <img className="card-img-top rounded" src={image3} alt="Card 1" />
                    </div>


                    {selectedImage && (
                        <div className="image-modal" onClick={closeImageModal}>
                            <div className="overlay"></div>
                            <img className="modal-image" src={selectedImage} alt="Selected" />
                            <span className="close-modal" onClick={closeImageModal}>
                                &times;
                            </span>
                        </div>
                    )}

                </div>




            </div>
        </div>
    </>
}


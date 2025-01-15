import React from 'react';
import Avatar from '../../assets/images/icon.svg';




export default function Home() {
    

    return <>


        <main className="main-section pt-5 pb-0">
            <div className="avatar">
                <img src={Avatar}  alt="Avatar" className="avatar-img" />
            </div>
            <h2>START FRAMEWORK</h2>
            <div className="line-star">
                <i class="fa fa-star" aria-hidden="true"></i>
            </div>
        
            <p>Graphic Artist · Web Designer · Illustrator</p>
        </main>
    </>
}


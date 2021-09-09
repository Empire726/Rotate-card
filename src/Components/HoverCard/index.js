import React from 'react'
import "../../StyleSheets/card/card.css"
import lote from "../../image/naveen.JPG"

const Hovercard = () => {
    return (
        <>
            <div className="card-wrapper" >
                <div className="card">
                    <div className="card-image">
                        <img src={lote} alt="Reload" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="/" ><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="/" ><i className="fab fa-instagram"></i></a></li>
                        <li><a href="/" ><i className="fab fa-twitter"></i></a></li>
                        <li><a href="/" ><i className="fab fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2> NAME </h2>
                        <span className="job-title">Developer</span>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Hovercard;

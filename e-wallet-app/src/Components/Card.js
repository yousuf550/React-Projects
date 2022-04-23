import React from 'react'
import chip from "../Images/chip.png"
import '../card.css';


export const Card = () => {
    return (
        <section>
            <div className="card">
                <div className="face front">
                    <img className="chip" src={chip} alt="chip" />
                    <h3 className="bank">Bank</h3>
                    <h3 className="number">0000 0000 0000 0000</h3>
                    <h5 className="card-holder">FIRST NAME LAST NAME</h5>
                    <h5 className="valid"><span>VALID THRU <br /> </span><span>01/25</span></h5>
                </div>
            </div>
        </section>
    )
}

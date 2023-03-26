import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./sass/FirstPage.scss"
import "./sass/SecondPage.scss"
import "./sass/ThirdPage.scss"
import { useNavigate, useLocation } from 'react-router-dom'
import "./sass/FourthPage.scss"

const FourthPage = () => {
    const location = useLocation()
    console.log(location.state);
    return (
        <div className="container">
            <div className="first-container">
                <div className="button-container">
                    <div className="first-btn">
                        <button >1</button>
                        <div className="typography">
                            <h3 className='first-child'>Step 1</h3>
                            <h3>Your info
                            </h3>
                        </div>
                    </div>

                    <div className="first-btn">
                        <button>2</button>
                        <div className="typography">
                            <h3 className='first-child'>Step 2</h3>
                            <h3>Select plan</h3>
                        </div>
                    </div>

                    <div className="first-btn">
                        <button>3</button>
                        <div className="typography">
                            <h3 className='first-child'>Step 3</h3>
                            <h3>Add-ons</h3>
                        </div>
                    </div>

                    <div className="first-btn">
                        <button className='btn-active'>4</button>
                        <div className="typography">
                            <h3 className='first-child'>Step 4</h3>
                            <h3>Summary</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second">
                <h1>Finishing Up</h1>
                <h4>Double-check everything looks OK before confirming.</h4>
                <div className="fourth-container">
                    <div className="arcade-text">
                        <div className="link-text">
                            <h3>Arcade(Monthly)</h3>
                            <Link to="/secondpage">Change</Link>
                        </div>
                        <div className="amount-text">
                            <p>{location?.state?.ref}</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="buttons">
                    <button className="next-step-btn"><Link to="/lastpage">Next Step</Link></button>
                    <button className='prev-page-btn'><Link to="/thirdpage" >Go Back</Link></button>
                </div>
            </div>
        </div>
    )
}

export default FourthPage
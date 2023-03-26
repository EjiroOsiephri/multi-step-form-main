import React, { useState } from 'react'
import "./sass/SecondPage.scss"
import { Link } from "react-router-dom"
import { useNavigate, useLocation } from 'react-router-dom'
import "./sass/ThirdPage.scss"
import "./SecondPage"



const ThirdPage = () => {
    const location = useLocation()
    const toggleValue = location.state.isToggled

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
                        <button className='btn-active'>3</button>
                        <div className="typography">
                            <h3 className='first-child'>Step 3</h3>
                            <h3>Add-ons</h3>
                        </div>
                    </div>

                    <div className="first-btn">
                        <button>4</button>
                        <div className="typography">
                            <h3 className='first-child'>Step 4</h3>
                            <h3>Summary</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second">
                <h1>Pick add-ons</h1>
                <h4>Add-ons help enhance your gaming experience.</h4>
                <div className="add-on-grid">
                    <div className="grid-container">
                        <div className="checkbox-container">
                            <input type='checkbox' />
                            <div className="checkbox-text">
                                <h6 className='first-checkbox-text'>Online service</h6>
                                <h6>Access to multiplayer games</h6>
                            </div>
                        </div>
                        <div className="amount">
                            {toggleValue ? <h6>10/yr</h6> : <h6>+$1/mo</h6>}
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="checkbox-container">
                            <input type='checkbox' />
                            <div className="checkbox-text">
                                <h6 className='first-checkbox-text'>Larger storage</h6>
                                <h6>Extra 1TB of cloud save</h6>
                            </div>
                        </div>
                        <div className="amount">
                            {toggleValue ? <h6>20/yr</h6> : <h6>+$2/mo</h6>}
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="checkbox-container">
                            <input type='checkbox' />
                            <div className="checkbox-text">
                                <h6 className='first-checkbox-text'>Customizable Profile</h6>
                                <h6>Custom theme on your profile</h6>
                            </div>
                        </div>
                        <div className="amount">
                            {toggleValue ? <h6>20/yr</h6> : <h6>+$2/mo</h6>}
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button className="next-step-btn"><Link to="/fourthpage">Next Step</Link></button>
                    <button className='prev-page-btn'><Link to="/secondpage">Go Back</Link></button>
                </div>
            </div>
        </div>
    )
}

export default ThirdPage
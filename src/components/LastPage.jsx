import React, { useState } from 'react'
import "./sass/SecondPage.scss"
import { Link } from "react-router-dom"
import { useNavigate, useLocation } from 'react-router-dom'
import thankyou from "./images/icon-thank-you.svg"
import "./sass/LastPage.scss"

const LastPage = () => {
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
                <div className="align-summary">
                    <div className="img-thank-you">
                        <img src={thankyou} alt="" />
                    </div>
                    <h3 c>Thank You</h3>
                    <h3 className='h3-text'>Thanks for confirming your subscription! We hope you have fun
                        using our platform. If you ever need support, please feel free
                        to email us at support@loremgaming.com.</h3>
                </div>
                <div className="buttons">
                    <button className='prev-btn'><Link to="/fourthpage" >Go Back</Link></button>
                </div>
            </div>

        </div>

    )
}

export default LastPage
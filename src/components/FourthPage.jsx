import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import "./sass/FirstPage.scss"
import "./sass/SecondPage.scss"
import "./sass/ThirdPage.scss"
import Arcade from "./images/icon-arcade.svg"
import Advanced from "./images/icon-advanced.svg"
import Pro from "./images/icon-pro.svg"
import "./ThirdPage"
import ThirdPage from './ThirdPage'
import "./sass/FourthPage.scss"

const FourthPage = () => {
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
                <div className="buttons">
                    <button className="next-step-btn"><Link to="/lastpage">Next Step</Link></button>
                    <button className='prev-page-btn'><Link to="/thirdpage">Go Back</Link></button>
                </div>
            </div>
        </div>
    )
}

export default FourthPage
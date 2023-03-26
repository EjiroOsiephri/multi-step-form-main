import { useNavigate } from 'react-router-dom'
import React, { useState, useRef } from 'react'
import "./sass/FirstPage.scss"
import { Link } from "react-router-dom"
import "./sass/SecondPage.scss"
import Arcade from "./images/icon-arcade.svg"
import Advanced from "./images/icon-advanced.svg"
import Pro from "./images/icon-pro.svg"
import "./ThirdPage"
import ThirdPage from './ThirdPage'

const SecondPage = () => {
    const Navigate = useNavigate()
    const [boxText, setBoxText] = useState("");
    const [boxTextTwo, setBoxTextTwo] = useState("");
    const [boxTextThree, setBoxTextThree] = useState("");

    const [isToggled, setIsToggled] = useState(false);

    const circleStyle = {
        transform: isToggled ? 'translateX(1.8em)' : 'translateX(0)',
    };
    const [activeBoxes, setActiveBoxes] = useState('');

    const [activeBox, setActiveBox] = useState(isToggled ? "$90/yr" : "$9/mo");
    const [activeBoxTwo, setActiveBoxTwo] = useState(isToggled ? "$120/yr" : "$12/mo");
    const [activeBoxThree, setActiveBoxThree] = useState(isToggled ? "$150/yr" : "$15/mo");

    const handleBoxClick = (index, boxTextValue) => {
        setActiveBoxes(index);
        setBoxText(boxTextValue)
        setBoxTextTwo(boxTextValue)
        setBoxTextThree(boxTextValue)
    }


    const clickHandler = () => {
        setIsToggled(!isToggled);
        setActiveBox(isToggled ? "$9/mo" : "$90/yr");
        setActiveBoxTwo(isToggled ? "$12/mo" : "$120/yr");
        setActiveBoxThree(isToggled ? "$15/mo" : "$150/yr");
    };


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
                        <button className='btn-active'>2</button>
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
                        <button>4</button>
                        <div className="typography">
                            <h3 className='first-child'>Step 4</h3>
                            <h3>Summary</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second">
                <h1> Select your plan</h1>
                <h4>You have the option of monthly or yearly billing.
                </h4>
                <div className="box">
                    <div className={activeBoxes === 0 ? 'box-container active-styles' : 'box-container'} onClick={() => handleBoxClick(0, activeBox)}>
                        <div className="img">
                            <img src={Arcade} alt="" />
                        </div>
                        <div className="step-two-flex">
                            <h3>Arcade</h3>
                            <p>{activeBox}</p>
                            <p className='yearly-payment'>{isToggled && '2 Months Free'}</p>
                        </div>
                    </div>
                    <div className={activeBoxes === 1 ? 'box-container active-styles' : 'box-container'} onClick={() => handleBoxClick(1, activeBoxTwo)}>
                        <div className="img">
                            <img src={Advanced} alt="" />
                        </div>
                        <div className="step-two-flex">
                            <h3>Advanced</h3>
                            <p >{activeBoxTwo}</p>
                            <p className='yearly-payment'>{isToggled && '2 Months Free'}</p>
                        </div>
                    </div>
                    <div className={activeBoxes === 2 ? 'box-container active-styles' : 'box-container'} onClick={() => handleBoxClick(2, activeBoxThree)}>
                        <div className="img">
                            <img src={Pro} alt="" />
                        </div>
                        <div className="step-two-flex">
                            <h3>Pro</h3>
                            <p >{activeBoxThree}</p>
                            <p className='yearly-payment'>{isToggled && '2 Months Free'}</p>
                        </div>
                    </div>
                </div>

                <div className="slider">
                    <p className={isToggled ? "toggler--dark" : "toggler--light"}>Monthly</p>
                    <div className="toggler--slider">
                        <div className="toggler--slider--circle" style={circleStyle} onClick={clickHandler}></div>
                    </div>
                    <p className={isToggled ? "toggler--light" : "toggler--dark"}>Yearly</p>
                </div>
                <div className="button">
                    <button className="next-step-btn"><Link to="/thirdpage" state={{ isToggled: isToggled, ref: boxText }} >Next Step</Link></button>
                    <button className='prev-page-btn'><Link to="/">Go Back</Link></button>
                </div>
            </div>

        </div>
    )
}

export default SecondPage
import React, { useState } from 'react'
import "./sass/FirstPage.scss"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const FirstPage = () => {
    const [error, setError] = useState(false)

    const [formData, setFormData] = useState({
        firstText: "This field is required",
        lastText: "This field is required",
        emailText: ""
    });
    const Navigate = useNavigate()

    const submitHandler = (event) => {
        event.preventDefault();
        const inputValue = event.target.elements.text.value;
        const inputValueTrim = inputValue.trim()

        const inputNumberValue = event.target.number.value;
        const inputNumberValueTrim = inputNumberValue.trim()

        const emailValueInput = event.target.email.value
        const emailValueInputTrim = emailValueInput.trim()


        let hasError = false;
        const newFormData = { ...formData };

        if (inputValueTrim.length < 1) {
            hasError = true;
            newFormData.firstText = "This field is required";
        } else if (inputValueTrim.length > 15) {
            hasError = true;
            newFormData.firstText = "Name too Long";
        } else {
            newFormData.firstText = "";
        }


        if (inputNumberValueTrim.length < 1) {
            hasError = true;
            newFormData.lastText = "This field is required";
        } else if (inputNumberValueTrim.length > 15) {
            hasError = true;
            newFormData.lastText = "Phone number too long";
        } else {
            newFormData.lastText = "";
        }

        const inputEmailValue = event.target.email.value;
        const inputEmailValueTrim = inputEmailValue.trim()
        if (inputEmailValueTrim.length < 1) {
            hasError = true;
            newFormData.emailText = "This field is required";
        } else {
            newFormData.emailText = "";
        }

        if (hasError) {
            setFormData(newFormData);
            setError(true);
        } else {
            setError(false);
            Navigate('/secondpage')
        }
    }

    return (
        <div className="container">
            <div className="first-container">
                <div className="button-container">
                    <div className="first-btn">
                        <button className='btn-active'>1</button>
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
                        <button>4</button>
                        <div className="typography">
                            <h3 className='first-child'>Step 4</h3>
                            <h3>Summary</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-container">
                <h1>Personal info</h1>
                <h4>Please provide your name, email address, and phone number.</h4>
                <form onSubmit={submitHandler} >
                    <div className="name">
                        <div className="text-flex">
                            <label htmlFor="text">Name</label>
                            {error && <p>{formData.firstText}</p>}
                        </div>
                        <input type="text"
                            className='input' name="text" placeholder='e.g. Stephen King' />
                    </div>
                    <div className="email">
                        <div className="text-flex">
                            <label htmlFor="text">Email Address</label>
                            {error && <p>{formData.emailText}</p>}
                        </div>
                        <input className='input' type="email" name="email" placeholder='e.g. stephenking@lorem.com' />
                    </div>
                    <div className="phone">
                        <div className="text-flex">
                            <label htmlFor="text">Phone Number</label>
                            {error && <p>{formData.lastText}</p>}
                        </div>
                        <input className='input' type="number" name="number" placeholder='e.g. +1 234 567 890' />
                    </div>
                    <button className="next-step-btn">Next Step</button>
                </form>
            </div>
        </div>
    )
}

export default FirstPage
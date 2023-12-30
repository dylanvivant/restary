'use client'
import React, { useState } from 'react'

import './style.css'

const Table = React.forwardRef((props, ref) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        checkbox: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous traiteriez les données du formulaire, par exemple en les envoyant à un serveur
        console.log(formData);
    };

    return (

        <section ref={ref} id={props.id} className="reservation-form-container">
            <h2>Reserve</h2>
            <h4>Your Table</h4>
            <p>Once you've made a reservation, kindly await for our confirmation email.</p>
            <form onSubmit={handleSubmit}>
                <div className="formText">
                    <div className="labeltext">
                        <label htmlFor="firstName">Firt Name*</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="John"
                            required
                        />
                    </div>
                    <div className="labeltext">

                        <label htmlFor="lastName">Last Name*</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Doe"
                            required
                        />
                    </div>

                </div>

                <label htmlFor="email">Email*</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="joedoe@restary.com"
                    required
                />
                <label htmlFor="date">Date*</label>
                <input
                    type="date"
                    name="trip-start"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="Date"
                    required
                />
                <label htmlFor="message">Message</label>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Additionnal information"
                />
                <div className="checkbox">

                    <label htmlFor="checkbox">I agree to receive occasional updates and offers</label>
                    <input type="checkbox" name="checkbox" placeholder='checkbox' value={formData.checkbox} onChange={handleChange} />
                </div>


                <button type="submit">Submit</button>
            </form>
        </section>
    );
});

export default Table;

'use client';
import React from 'react';
import Link from 'next/link';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

import './style.css';
const Footer = () => {

    return (
        <footer className="footer">
            <div className="contentfooter">

                <div className="contactInfo">
                    <h3>Restary</h3>

                    <div className="content">

                        <div className="contactContent">
                            <IoIosMail className="social-icon" />
                            <a href="mailto:contact@dylanvivant.com">info@restary.com</a>
                        </div>
                        <div className="contactContent">
                            <FaPhone className="social-icon" />
                            <a href="tel:+33627812760">+123 456 7890</a>

                        </div>
                        <div className="horaire">
                            <GoClockFill className="social-icon" />
                            <div className={"operatingHours"}>
                                <p>Mon - Fri: 11:30am - 10:00pm</p>
                                <p>Saturday: 10:00am - 10:00pm</p>
                                <p>Sunday: 1:00pm - 10:00pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-footers">

                    <div className="menu-footer">
                        <h3>Our Type of Menu</h3>
                        <ul>
                            <Link href="#starters">
                                <li>Starters</li>

                            </Link>
                            <Link href="#soup">
                                <li>Soup</li>

                            </Link>
                            <Link href="#salads">
                                <li>Salads</li>

                            </Link>
                            <Link href="#risotto">
                                <li>Risotto</li>

                            </Link>
                            <Link href="#meat-and-fish">
                                <li>Meat and fish</li>

                            </Link>
                            <Link href="#side-dishes">
                                <li>Side dishes</li>

                            </Link>

                        </ul>
                    </div>
                    <div className="socialLinks-footer">
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/dylan-vivant/">
                                    <AiOutlineFacebook className="social-icon" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.makeitdifferently.com/">
                                    <AiOutlineInstagram className="social-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyRight">
                <p>© 2024 Restary. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

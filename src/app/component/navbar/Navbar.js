'use client'
import React from 'react'
import Link from 'next/link';

import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import './style.css'

export default function Navbar({ Click }) {
    return (
        <header>
            <nav>
                <Link href={'/'}>
                    <div className="logo">
                        <span className="logo">
                            Restary
                        </span>
                    </div>
                </Link>

                <ul id='links-pc' className="nav-links">
                    <li onClick={Click}>
                        <span>RESERVE A TABLE</span>
                    </li>
                    <li>
                        <Link href="/menu">
                            <span>BROWSE MENU</span>
                        </Link>
                    </li>
                </ul>

                <ul id='social-pc' className="social-links ">

                    <li>
                        <Link href="https://www.linkedin.com/in/dylan-vivant/">
                            <AiOutlineFacebook className="social-icon" />
                        </Link>

                    </li>
                    <li>
                        <Link href="https://www.makeitdifferently.com/">
                            <AiOutlineInstagram className="social-icon" />
                        </Link>
                    </li>
                </ul>

                <details open={"open"} >
                    <summary>
                        <AiOutlineMenu className="menu-icon" />
                        <AiOutlineClose className="close-icon" />
                    </summary>
                    <div className="menu-mobile">
                        <ul className="nav-links">
                            <li>
                                <Link href="#reserve">
                                    <span>RESERVE A TABLE</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/menu">
                                    <span>BROWSE MENU</span>
                                </Link>
                            </li>
                        </ul>

                        <ul className="social-links">

                            <li>
                                <Link href="#">
                                    <AiOutlineFacebook className="social-icon" />
                                </Link>

                            </li>
                            <li>
                                <Link href="#">
                                    <AiOutlineInstagram className="social-icon" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </details>
            </nav>
        </header>
    )
}

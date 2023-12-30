'use client'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';

import './style.css'
import 'animate.css';


export default function Carrousel({ Click }) {

    const [animatedText, setAnimatedText] = useState([]);

    useEffect(() => {
        const text = "Enjoy A Tasty Experience";
        let delay = 100;
        const spans = text.split("").map((char, index) => {
            let spanElement;
            if (char !== ' ') {
                spanElement = <span key={index} style={{
                    animationDelay: `${delay}ms`,
                    '-moz-animation-delay': `${delay}ms`,
                    '-webkit-animation-delay': `${delay}ms`
                }}>
                    {char}
                </span>;
                delay += 150;
            } else {
                spanElement = <span key={index}>&nbsp;</span>;
            }
            return spanElement;
        });
        setAnimatedText(spans);
    }, []);

    return (
        <section className="carrousel">
            <div className={'slide'} >

                <Image src="/carrousel/image-1.webp" alt="restaurant" className="image" width={1140} height={450} />

            </div>
            <div className="content-slide">
                <div className="text">
                    <h2>Welcome</h2>
                    <h1 className="cssanimation sequence leRotateYZoomIn">{animatedText}</h1>
                    <p>Enjoy a rich variety of dishes and aromatic coffee, selection of juices, aromatic teas and delicious desserts made by our Pastry Chef.</p>
                </div>
                <div className="button-slide">
                    <button onClick={Click} className='btn-1'>RESERVE A TABLE</button>

                    <Link href={'/menu'}>
                        <button className='btn-2'>BROWSE MENU</button>

                    </Link>
                </div>
            </div>


        </section>
    )
}

'use client';
import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './component/Card'
import './style.css'

import { mostPopular } from '@/app/data/mostpopular';

export default function Popular() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };

    return (
        <section className="popular">
            <div className="container">
                <div className="title-container">
                    <h2>EXPLORE</h2>
                    <h4>Popular Dishes</h4>
                </div>
                <div className="slider-mask">
                    <Slider {...settings}>
                        {mostPopular.map((item, index) => (
                            <Card key={index} title={item.title} price={item.price} image={item.cover} />
                        ))}
                    </Slider>
                </div>

                <div className="button">
                    <Link href={'/menu'}>
                        <button className='btn-1'>BROWSE MENU</button>

                    </Link>
                </div>
            </div>
        </section>
    );
}

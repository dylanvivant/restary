'use client'
import React from 'react'

import GuestReviews from './component/GuestReviews'
import './style.css'

import Link from 'next/link';


import { Reviews } from '@/app/data/review';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReviewsSection() {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        vertical: true, // Ajoutez cette ligne pour le défilement vertical
        verticalSwiping: true, // Active le balayage (swiping) vertical
    };

    return (
        <section className="guest-review">
            <div className="reviews">
                <div className="title-reviews">
                    <h2>Guest</h2>
                    <h4>Reviews</h4>
                </div>
                <div className="slider-mask-z">
                    <Slider {...settings}>
                        {Reviews.map((item, index) => (
                            <GuestReviews key={index} name={item.Name} image={item.Image} alt={item.Name} icon={item.Icon} alticon={item.Plateform} social={item.Social} content={item.Review} />
                        ))}
                    </Slider>
                </div>


            </div>

            <div className="container-img">
                <img src="/reviews/alex-haney-CAhjZmVk5H4-unsplash.webp" alt="Image d'illustration" width={570} height={800} />
            </div>
        </section>
    )
}

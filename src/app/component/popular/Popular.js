'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from './component/Card'

import './style.css'

import { mostPopular } from '@/app/data/mostpopular';

export default function Popular() {
    // Définir un état pour stocker la largeur de l'écran
    const [width, setWidth] = useState(window.innerWidth);

    // Gérer le redimensionnement de la fenêtre

    useEffect(() => {
        // Mettre à jour la largeur une fois que le composant est monté
        setWidth(window.innerWidth);

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Nettoyer l'écouteur d'événement lors du démontage du composant
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // S'assurer que width est défini avant de continuer
    if (width === null) return null; // ou un placeholder/loader
    // Paramètres de base pour le slider
    const baseSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };

    // Adapter les paramètres en fonction de la largeur de l'écran
    let settings;
    if (width <= 767) {
        settings = { ...baseSettings, slidesToShow: 1, slidesToScroll: 1 };
    } else if (width >= 768 && width <= 859) {
        settings = { ...baseSettings, slidesToShow: 2, slidesToScroll: 1 };
    } else if (width >= 860 && width <= 1140) {
        settings = { ...baseSettings, slidesToShow: 3, slidesToScroll: 1 };
    } else (settings = { ...baseSettings, slidesToShow: 4, slidesToScroll: 1 })

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

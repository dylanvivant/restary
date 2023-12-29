import React from 'react';
import { menu } from '../data/menu';
import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';
import './style.css';

export default function Page() {
    // Group menu items by category
    const menuByCategory = menu.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    // Function to create a valid HTML ID from a category name
    const toValidId = (name) => {
        return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    };

    return (
        <div className='app'>
            <Navbar />
            <main>
                <div className="menu-container">
                    <div className="menu-title">
                        <h4>Menu</h4>
                    </div>
                    <div className="menu-content">
                        {Object.keys(menuByCategory).map((category) => (
                            <div key={category} id={toValidId(category)}>
                                <div className="menu-category-title">
                                    <h5> {category}</h5>
                                    <div className="line" />
                                </div>

                                <div className="menu-items">
                                    {menuByCategory[category].map((item, index) => (
                                        <div className="menu-item" key={index}>
                                            <div className="menu-item-image">
                                                <img src={item.cover} alt={item.title} width={150} height={150} />
                                            </div>
                                            <div className="content-menu">
                                                <div className="menu-item-title">
                                                    <h2>{item.title}</h2>
                                                </div>
                                                <div className="menu-item-description">
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

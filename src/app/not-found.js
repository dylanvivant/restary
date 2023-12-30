import React from 'react'

import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'

import './not-found.css'

export default function NotFound() {
    return (
        <main>
            <Navbar />
            <section >
                <div className="not-found">
                    <h1>404 - Not found</h1>
                </div>
                <div className="error">
                    <p>You didn't break anything, but we cannot find what you're looking for.</p>
                    <div className="back">
                        <a href="/">Back to homepage</a>
                    </div>
                </div>

            </section>
            <Footer />
        </main>
    )
}

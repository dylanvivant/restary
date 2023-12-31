import React from 'react'
import Image from 'next/image'

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <Image src={props.image} alt="food" width={270} height={297} />
            </div>
            <div className="card-content">
                <h3>{props.title}</h3>
                <span className="price">{props.price}</span>
            </div>
        </div>
    )
}

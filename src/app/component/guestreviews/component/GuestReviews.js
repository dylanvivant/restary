import React from 'react'
import Link from 'next/link'

import Image from 'next/image'

export default function GuestReviews(props) {
    return (
        <article>
            <div className="header-review">
                <Image src={props.image} alt={props.alt} width={50} height={50} />
                <div className="name">
                    <h4>{props.name}</h4>
                    <Image src={props.icon} alt={props.alticon} width={24} height={24} />
                    <Link href={"https://www.linkedin.com/in/dylan-vivant/"}><span>{props.social}</span></Link>
                </div>
            </div>
            <div className="content-review">
                <p>{props.content}</p>
            </div>
        </article>
    )
}

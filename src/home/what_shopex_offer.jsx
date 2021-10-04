import React from 'react'

export const WhatShopexOffer = (props) => {
    const images = [
        'images/24_hours_support1.svg',
        'images/cashback1.svg',
        'images/free_delivery1.svg',
        'images/premium_quality1.svg',
    ]
    return (
        <>
            <div className="what-title mb-10 d-flex align-items-center justify-content-center">
                What Shopex Offer!
            </div>
            <div className="what-shopex_wrapper">
                {images.map((item, i) => {
                    return (
                        <div className="what-item">
                            <div className="img">
                                <img src={item} alt="TIODJDLFj" />
                            </div>
                            <div className="title">24/7 Support</div>
                            <div className="content">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolore explicabo distinctio,
                                nisi voluptate consequatur exercitationem.
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

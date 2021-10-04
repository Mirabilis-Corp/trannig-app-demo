import React from 'react'
import { Button } from '../base-components'
import { FeaturedProduct } from './featured_product'
import { LeatestProduct } from './leatest_products'
import { WhatShopexOffer } from './what_shopex_offer'
import { PromotProduct } from './promot_product'
import { AppFooter } from '../components/footer'

export function HomePage() {
    const Featured = [
        { img: '/images/image1.png' },
        { img: '/images/image3.png' },
        { img: '/images/image1168.png' },
        { img: '/images/image1169.png' },
    ]
    const Trending = [
        { img: '/images/image1171.png' },
        { img: '/images/image1170.png' },
        { img: '/images/image31.png' },
        { img: '/images/image32.png' },
    ]
    return (
        <div className="app-root">
            <div className="app-banner d-flex flex-row">
                <div className="description d-flex flex-row">
                    <div className="desc-img">
                        <img src={'/images/image_32.png'} alt={'images32'} />
                    </div>
                    <div className="desc-content">
                        <div className="text-accent">
                            Best Furnniture For You Castle....
                        </div>
                        <div className="text-large">
                            New Furniture Collection Trends in 2020
                        </div>
                        <div className="text-primary-light">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque earum sunt a natus soluta.
                        </div>
                        <div>
                            <Button color={'accent'} variante={'contained'}>
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <div className="img">
                        <img
                            src={'/images/sofa_promotional_header.png'}
                            alt="sofa_promotinal_header"
                        />
                        <div className="img-2 d-flex justify-content-center align-items-center">
                            <img src={'/images/images_33.png'} alt="images" />
                        </div>
                    </div>
                </div>
            </div>
            <FeaturedProduct title={'Featured Products'} contents={Featured} />
            <LeatestProduct />
            <WhatShopexOffer />
            <PromotProduct />
            <FeaturedProduct title={'Trending Products'} contents={Trending} />
            <AppFooter />
        </div>
    )
}

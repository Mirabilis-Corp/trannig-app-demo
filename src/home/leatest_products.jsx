import React from 'react'
import { IconButton } from '../base-components'

export const LeatestProduct = (props) => {
    const ITEMS = [
        { img: '/images/image1166.png' },
        { img: '/images/image15.png' },
        { img: '/images/image1168.png' },
    ]
    const ITEMS2 = [
        { img: '/images/image23.png' },
        { img: '/images/image32.png' },
        { img: '/images/image3.png' },
    ]
    return (
        <>
            <div className="main-title mt-50 mb-10 d-flex align-items-center justify-content-center">
                Leatest Products
            </div>
            <div className="tab-nav">
                <div className="tab-nav-item active">New Arrival</div>
                <div className="tab-nav-item">Best Seller</div>
                <div className="tab-nav-item">Featured</div>
                <div className="tab-nav-item">Special Offer</div>
            </div>
            <div className="leatest-section">
                {ITEMS.map((item, i) => (
                    <LeatestItem item={item} key={i} />
                ))}
            </div>
            <div className="leatest-section">
                {ITEMS2.map((item, i) => (
                    <LeatestItem item={item} key={i} />
                ))}
            </div>
        </>
    )
}

export const LeatestItem = (props) => {
    const { item } = props
    return (
        <div className="leatest-item">
            <div className="img">
                <img src={item.img} alt="Image_content" />
            </div>
            <div className="d-flex justify-content-between align-items-center my-10">
                <div className="text-dark">Comfort Handy Craft</div>
                <div className="d-flex flex-row">
                    <span className="text-primary">$4200</span>
                    <span className="text-accent mx-15">$6500</span>
                </div>
            </div>
            <div className="options d-flex flex-column">
                <div>
                    <IconButton color={'primary'}>
                        <i className={'DGfi-add_shopping_cart'}></i>
                    </IconButton>
                </div>
                <div>
                    <IconButton color={'primary'}>
                        <i className={'DGfi-favorite'}></i>
                    </IconButton>
                </div>
                <div>
                    <IconButton color={'primary'}>
                        <i className={'DGfi-saved_search'}></i>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

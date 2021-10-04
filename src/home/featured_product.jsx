import React from 'react'
import { Button, IconButton } from '../base-components'

export const FeaturedProduct = (props) => {
    const { title, contents = [] } = props
    return (
        <>
            <div className="main-title mt-50 mb-20 d-flex align-items-center justify-content-center">
                {title}
            </div>
            <div className="featured-section align-items-center justify-content-center">
                {contents.map((item, i) => (
                    <FeaturedItem item={item} key={i} />
                ))}
            </div>
        </>
    )
}

export const FeaturedItem = (props) => {
    const { item } = props
    return (
        <div className="featured-item">
            <div className="img">
                <img src={item.img} alt="Image_content" />
                <div>
                    <Button color="success" variante={'contained'}>
                        View Details
                    </Button>
                </div>
            </div>
            <div className="description d-flex justify-content-center align-items-center flex-col p-20">
                <div className="text-accent">Cantilever chair</div>
                <div className="dividers d-flex flex-column justify-content-center align-items-center">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-primary">Code - Y938339</div>
                <div className="text-primary">$43800</div>
            </div>
            <div className="options d-flex flex-row">
                <div>
                    <IconButton color={'primary'}>
                        <i className={'DGfi-add_shopping_cart'}></i>
                    </IconButton>
                </div>
                <div>
                    <IconButton color={'accent'}>
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

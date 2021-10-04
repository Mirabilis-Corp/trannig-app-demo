import React from 'react'
import { Button } from '../base-components'

export const PromotProduct = (props) => {
    return (
        <div className="promot-product d-flex justify-content-center flex-row align-items-center">
            <div className="img">
                <img
                    src={
                        'images/home_Stylish_Club_Sofa_Chair_Pleated_Sofa_Armchair_with_Golden_Legs1.png'
                    }
                    alt="home_Stylish_Club_Sofa_Chair_Pleated_Sofa_Armchair_with_Golden_Legs1"
                />
            </div>
            <div className="description">
                <div className="title">
                    Unique Features Of leatest & <br />
                    Trending Poducts
                </div>
                <div className="point">
                    <span className="bg-accent"></span>
                    <span>
                        All frames constructed with hardwood solids and <br />
                        laminates
                    </span>
                </div>
                <div className="point">
                    <span className="bg-primary"></span>
                    <span>
                        Reinforced with double wood dowels, glue, screw - nails{' '}
                        <br />
                        corner blocks and machine nails
                    </span>
                </div>
                <div className="point">
                    <span className="bg-green"></span>
                    <span>
                        Arms, backs and seats are structurally reinforced
                    </span>
                </div>
                <div className="btn-options mt-15">
                    <Button color={'accent'} variante={'contained'}>
                        Add To Cart
                    </Button>
                    <div className="text-primary ml-10">
                        <span>B&B Italian Sofa </span>
                        <br />
                        <span>$2200</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

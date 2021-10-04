import React from 'react'
import { Button, IconButton, TextInput } from '../base-components'

export const AppFooter = (props) => {
    return (
        <div className="footer__app">
            <div className="footer_content d-flex justify-content-center align-items-center">
                <div className="subscribe-form m-10">
                    <div className="title">Hekto</div>
                    <form action="#" className="d-flex">
                        <TextInput label="Enter Email Address" value="" />
                        <div className="d-flex align-items-end">
                            <Button color="accent" variante="contained">
                                Sign Up
                            </Button>
                        </div>
                    </form>
                    <div className="text">Contact Info</div>
                    <div className="text">
                        17 Princess Road, London, Greater London NW1 8JR, UK
                    </div>
                </div>
                <div className="footer-categories m-10">
                    <div className="title">Categories</div>
                    <ul>
                        <li>Laptops & Computers</li>
                        <li>Cameras & Photography</li>
                        <li>Smart Phones & Tablets</li>
                        <li>Video Games & Consoles</li>
                        <li>Waterproof Headphones</li>
                    </ul>
                </div>
                <div className="footer-categories m-10">
                    <div className="title">Customer Core</div>
                    <ul>
                        <li>My Account</li>
                        <li>Discount</li>
                        <li>Returns</li>
                        <li>Orders History</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>
                <div className="footer-categories m-10">
                    <div className="title">Pages</div>
                    <ul>
                        <li>Blog</li>
                        <li>Browse the Shop</li>
                        <li>Category</li>
                        <li>Pre-Built Pages</li>
                        <li>Visual Composer Elements</li>
                        <li>WooCommerce Pages</li>
                    </ul>
                </div>
            </div>
            <div className="footer_copyright d-flex justify-content-between align-items-center">
                <small className="text-primary-light">
                    &copy;Copyright, dc-corp.cm - All Rights Reserved
                </small>
                <div className="d-flex">
                    <IconButton variante={'contained'} color="primary-dark">
                        <i className="DGfi-facebook"></i>
                    </IconButton>
                    <IconButton variante={'contained'} color="primary-dark">
                        <i className="DGfi-instagram"></i>
                    </IconButton>
                    <IconButton variante={'contained'} color="primary-dark">
                        <i className="DGfi-twitter"></i>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

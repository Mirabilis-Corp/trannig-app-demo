import React from 'react'
import { useLocation } from 'react-router'

export const HeadingBar = () => {
    const [search, setSearch] = React.useState('')

    const { pathname } = useLocation()

    return (
        <div className="header_app">
            <div className="p-10 bg-primary d-flex flex-row justify-content-between align-items-center default-padding">
                <div className="contact">
                    <span className="px-10">
                        <i className="DGfi-emailmailmarkunreadlocal_post_office"></i>
                        mhhosanul@gmail.com
                    </span>
                    <span className="px-10">
                        <i className="DGfi-phone"></i>(1234556)748483
                    </span>
                </div>
                <div className="d-flex flex-row mr-20">
                    <div className="px-10 cursor-pointer">
                        English <i className="DGfi-arrow_down"></i>
                    </div>
                    <div className="px-10 cursor-pointer">
                        USD <i className="DGfi-arrow_down"></i>
                    </div>
                    <div className="px-10 cursor-pointer">
                        Login <i className="DGfi-person"></i>
                    </div>
                    <div className="px-10 cursor-pointer">
                        Wishlist <i className="DGfi-favorite"></i>
                    </div>
                    <div className="px-10 cursor-pointer">
                        <i className="DGfi-cart"></i>
                    </div>
                </div>
            </div>
            <div className="bg-white navbar d-flex justify-content-between align-items-center">
                <div className="d-flex flex-row align-items-center">
                    <div className="logo">Hekto</div>
                    <ul className="menu ml-10">
                        <li
                            className={`menu-item ${
                                '/' === pathname ? 'active' : ''
                            }`}
                        >
                            <a href={'/'}>Home</a>
                        </li>
                        <li
                            className={`menu-item ${
                                '/grid-default' === pathname ? 'active' : ''
                            }`}
                        >
                            <a href={'/grid-default'}>Pages</a>
                        </li>
                        <li
                            className={`menu-item ${
                                '/products' === pathname ? 'active' : ''
                            }`}
                        >
                            <a href={'/products'}>Products</a>
                        </li>
                        <li
                            className={`menu-item ${
                                '/blog' === pathname ? 'active' : ''
                            }`}
                        >
                            <a href={'/blog'}>Blog</a>
                        </li>
                        <li
                            className={`menu-item ${
                                '/shop' === pathname ? 'active' : ''
                            }`}
                        >
                            <a href={'/shop'}>Shop</a>
                        </li>
                        <li
                            className={`menu-item ${
                                '/contact' === pathname ? 'active' : ''
                            }`}
                        >
                            <a href={'/contact'}>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="search-form d-flex align-items-center">
                    <input
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button>
                        <i className="DGfi-search"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

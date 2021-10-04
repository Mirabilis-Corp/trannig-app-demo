import React from 'react'
import { AppFooter } from '../components/footer'

export default function GridDefault() {
    const content1 = [
        { img: 'images/image23.png', title: 'Title of this' },
        { img: 'images/image32.png', title: 'Title of this' },
        { img: 'images/image1166.png', title: 'Title of this' },
        { img: 'images/image1170.png', title: 'Title of this' },
    ]
    return (
        <div className="app-root">
            <div className="min-banner">
                <div className="title">Shop Grid Default</div>
                <div className="smaller">
                    Home - Shop -{' '}
                    <span className="text-accent">Shop Grid Default</span>
                </div>
            </div>
            <ShowBloc content={content1} />
            <ShowBloc content={content1} />
            <ShowBloc content={content1} />
            <ShowBloc content={content1} />
            <AppFooter />
        </div>
    )
}

export const ShowBloc = (props) => {
    const { content } = props
    return (
        <div className="grid-content d-flex flex-row justify-content-center align-items-center">
            {content.map((item, i) => (
                <div className="section-item" key={i}>
                    <div className="img d-flex justify-content-center align-items-center">
                        <img src={item.img} alt="image_content" />
                    </div>
                    <div className="description">
                        <div className="description d-flex justify-content-center align-items-center flex-col pt-10 pb-15 px-20">
                            <div className="text-accent">{item.title}</div>
                            <div className="dividers d-flex flex-column justify-content-center align-items-center">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div className="text-primary-dark">
                                Code - Y938339
                            </div>
                            <div className="text-primary-dark">$43800</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

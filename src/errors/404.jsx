import React from 'react'
import { AppFooter } from '../components/footer'
import { Button } from '../base-components'

export function NotFoundError() {
    return (
        <div className="app-root">
            <div className="min-banner">
                <div className="title">404 Not Found</div>
                <div className="smaller">
                    Home - Page -{' '}
                    <span className="text-accent">404 Not Found</span>
                </div>
            </div>
            <div className={"error-content d-flex flex-col justify-content-center" +
            " align-items-center"}>
                <div className={"description"}>
                    <img src={"images/group123.svg"} alt={"content error"} />
                    <div className='text-primary-dark'>
                        <span>oops!</span>&nbsp;&nbsp;
                        <span>The page you requested was not found!</span>
                        <div className={"mt-19"}>
                            <Button onClick={() => window.location = "/"} color={"accent"} variante={"contained"}>Back to Home</Button>
                        </div>
                    </div>
                </div>
            </div>
            <AppFooter />
        </div>
    )
}

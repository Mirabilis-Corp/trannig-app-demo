import React from "react"
import { Button, Textarea, TextInput } from '../base-components'
import { AppFooter } from '../components/footer'

export const ContactUs = props => {
    const bool_style = {
        width: 40,
        height: 40,
        borderRadius: '50%',
        margin: 10
    }
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [subject, setSubject] = React.useState("")
    const [message, setMessage] = React.useState("")
    return (
        <div className={"app-root"}>
            <div className="min-banner">
                <div className="title">Contact Us</div>
                <div className="smaller">
                    Home - Pages -{' '}
                    <span className="text-accent">Contact Us</span>
                </div>
            </div>
            <div className='default-padding d-flex flex-row justify-content-center align-items-center'>
                <div className={"flex-1"}>
                    <div className='text-primary-dark text-bold'>Information About us</div>
                    <div className={"text-primary-dark"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</div>
                    <div className={"d-flex"}>
                        <div className={"bg-primary"} style={bool_style}></div>
                        <div className={"bg-accent"} style={bool_style}></div>
                        <div className={"bg-success"} style={bool_style}></div>
                    </div>
                </div>
                <div className={"flex-1"}>
                    <div className='text-primary-dark text-bold'>Information About us</div>
                    <div className={"d-flex"}>
                        <div className='d-flex flex-1'>
                            <div><div style={bool_style} className={"bg-primary-dark"}> </div></div>
                            <div>
                                <div>Tel: 877-67-88-99</div>
                                <div>E-Mail: shop@store.com</div>
                            </div>
                        </div>
                        <div className='d-flex flex-1'>
                            <div><div style={bool_style} className={"bg-accent"}> </div></div>
                            <div>
                                <div>Support Forum</div>
                                <div>For over 24hr</div>
                            </div>
                        </div>
                    </div>
                    <div className={"d-flex"}>
                        <div className={"flex-1 d-flex"}>
                            <div><div style={bool_style} className={"bg-success"}> </div></div>
                            <div>
                                <div>20 Margaret st, London</div>
                                <div>Great britain, 3NM98-LK</div>
                            </div>
                        </div>
                        <div className='d-flex flex-1'>
                            <div><div style={bool_style} className={"bg-primary"}> </div></div>
                            <div>
                                <div>Free standard shipping</div>
                                <div>on all orders.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='default-padding d-flex flex-row justify-content-center align-items-center'>
                <div className={"flex-1"}>
                    <div className={"text-primary text-bold"}>Get In Touch</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</div>
                    <div className='d-flex'>
                        <TextInput label={"Your Name*"} value={name} onValueChange={val => setName(val)}/>
                        <TextInput label={"Your Email*"} value={email} onValueChange={val=> setEmail(val)}/>
                    </div>
                    <TextInput label={"Subject*"} value={subject} onValueChange={val => setSubject(val)}/>
                    <Textarea value={message} onValueChange={val => setMessage(val)} label={"Type Your Messege*"} autoGrow={true}/>
                    <Button color={"accent"} variante={"contained"}>Send Mail</Button>
                </div>
                <div className={"flex-1"}>
                   <div className={"w-100"}><img className={"w-100"} src={"images/group124.svg"} alt='Content of the image' /></div>
                </div>
            </div>
            <AppFooter />
        </div>
    )
}

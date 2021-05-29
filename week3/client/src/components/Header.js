import {useState} from 'react'
import './css/header.css'
import user from './img/user.png'
import previous from './img/previous.svg'
import arowdown from './img/down-arrow.png'
import menu from './img/menu.png'

export default function Header(){
    const [active, setactive] = useState(false)
    const [active2, setactive2] = useState(false)
    const [active3, setactive3] = useState(false)

    
    return (
        <div>
            <div className="menu-mini" onClick={() =>setactive3(!active3)}>
                <img src ={menu}></img>
            </div>
            <div className={active3 ? "navbar":"navbar hiden"}>
                <div className="user">
                    <div className="avt">
                        <img src={user}></img>
                    </div>
                    <div className="user-info">
                        <p><a href="">Tô Đức Quân</a></p>
                        <div className="acc">
                            <a href="">My account</a>
                            <a href="">Log out</a>
                        </div>
                    </div>
                    <div className="close" onClick={() =>setactive3(!active3)}>
                        <img src={previous}></img>
                    </div>
                </div>
                <div className="menu">
                    <div className="space">

                    </div>
                    <div className="single-menu">
                        <a href="#"><strong>Dashboard</strong></a>
                    </div>
                    <div className="single-menu">
                        <a href="#"><strong>Repost and Statistic</strong></a>
                    </div>
                    <div className="dropdown-menu" id="menu1" onClick = {() =>setactive(!active)}>
                        <a className="drop"><strong>B2B Solution</strong> <img src={arowdown}></img></a>
                        <div className={active ? "dropdown-content click":"dropdown-content"} id="drop1">
                            <a href="/plan">Custom pricings</a>
                            <a href="#">Customer auto tag</a>
                            <a href="#">Wholesaler Registration form</a>
                        </div>
                    </div>
                    <div className="dropdown-menu" id="menu2" onClick = {() =>setactive2(!active2)}>
                        <a className="drop"><strong>Marketing Solution</strong> <img src={arowdown}></img></a>
                        <div className={active2 ? "dropdown-content click":"dropdown-content"} id="drop2">
                            <a href="#">Sales pop</a>
                            <a href="#">Rewards and Loyalty Points</a>
                            <a href="#">Consistent Cart and Abandoned Cart</a>
                        </div>
                    </div>
                    <div className="single-menu">
                        <a href="#l"><strong>Login to access page</strong></a>
                    </div>
                    <div className="single-menu">
                        <a href="/label"><strong>Product labels pro</strong></a>
                    </div>
                    <div className="ending">
                        <p><a href="">BSS Shopify CMS Admin - 2020</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
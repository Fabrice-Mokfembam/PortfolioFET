import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA'
import me from '../assets/hack.jpg'
import HeaderSocial from './HeaderSocial'
export const Header = () => {
return (
<header>
        <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Fabrice-Mokfenbam</h1>
        <h5 className='text-light'>Software Engineer </h5>
        <CTA/>
        <HeaderSocial/>
        <div className='my_image'>
        <img src={me} alt='my image'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll down</a>
        </div>
 </header>
)
}
export default Header;
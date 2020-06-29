import Link from "next/link";
import '../assets/css/style.css'
const Nav = () => {
    return (
        <div className='Nav'>
            <div className='navTop'>
                <img style={{width:"140px"}} src= 'https://imgur.com/m5KWye4.jpg' alt = ''/>
                <h4>SALI SAMIR MOHAMED</h4>
                <h6> SOFTWEAR ENGINEERING </h6>
            </div>
            <div className='navMid'>
                <Link href={'/'}><a>PORTFOLIO ></a></Link>
                <Link href={'/my_offer'}><a>MY OFFER</a></Link>
                <Link href={'/contact'}><a>CONTACT ME</a></Link>
                <Link href={'/resume'}><a>MY CV</a></Link>
            </div>
            <div className='navButton'>
                 <ul>
                    <h6>GIT IN TOUCH</h6>
                    <li> <a href='https://www.hotmail.com'><img src= 'https://iconarchive.com/icons/custom-icon-design/mono-general-2/24/mail-icon.png' alt = ''/></a></li>
                    <li> <a href='https://www.linkedin.com/in/sali-m-aa7a95b4/' ><img src= 'https://iconarchive.com/icons/graphics-vibe/purple-glossy-social/24/linkedin-icon.png' alt = ''/></a> </li>
                    <li> <a href='https://github.com/sali73'><img src= 'https://iconarchive.com/icons/limav/flat-gradient-social/24/Github-icon.png' alt = ''/></a></li>
                    <li> <a href='https://www.facebook.com/'><img src= 'https://iconarchive.com/icons/designbolts/pink-girly-social/24/Active-Facebook-icon.png' alt = ''/></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;
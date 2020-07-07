import Head from 'next/head'
import Link from "next/link";
import '../assets/css/style.css'
const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>portfoilio</title>
                <link rel='stylesheet' media='screen and (min-width: 701px) and (max-width: 900px)' href='css/medium.css' />
                <link rel="icon" href="https://cdn3.iconfinder.com/data/icons/hotel-10-1/48/452-512.png" />
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
            </Head>
            <div className = 'grid ' >
                <nav className="background">
                    <div className="transbox">
                        <div className='navTop'>
                            <img className='myimg' src= 'https://imgur.com/Ghlpeff.jpg' alt = ''/>
                            <h4>SALI MOHAMED</h4>
                            <h6> SOFTWEAR ENGINEERING </h6>
                        </div>
                         <div className='navMid'>
                            <a href={'/'}>PORTFOLIO ></a>
                            <a href={'/my_offer'} >MY OFFER</a>
                           <a href={'/contact'} >CONTACT ME</a>
                           <a href={'/resume'}>MY CV</a>
                        </div>
                        <div className='navBottom'>
                             <ul>
                                <h6>GIT IN TOUCH</h6>
                                <li> <a className='touch' href='https://www.hotmail.com'><img src= 'https://iconarchive.com/icons/custom-icon-design/mono-general-2/24/mail-icon.png' alt = ''/></a></li>
                                <li> <a className='touch' href='https://www.linkedin.com/in/sali-m-aa7a95b4/' ><img src= 'https://iconarchive.com/icons/graphics-vibe/purple-glossy-social/24/linkedin-icon.png' alt = ''/></a> </li>
                                <li> <a className='touch' href='https://github.com/sali73'><img src= 'https://iconarchive.com/icons/limav/flat-gradient-social/24/Github-icon.png' alt = ''/></a></li>
                                <li> <a className='touch' href='https://www.facebook.com/'><img src= 'https://iconarchive.com/icons/designbolts/pink-girly-social/24/Active-Facebook-icon.png' alt = ''/></a></li>
                              </ul><br/><br/><br/><br/><br/><br/>
                         </div>
                     </div>
                </nav>
                <main >
                    {props.children}
                </main>
            </div>
        </div>
    )
}
export default Layout;
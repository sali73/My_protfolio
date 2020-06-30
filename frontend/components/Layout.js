
import Head from 'next/head'
import Link from "next/link";
import '../assets/css/style.css'
const Layout = (props) => {
    return (
        <>
            <Head>
                <title>portfoilio</title>
                <link rel="icon" href="https://cdn3.iconfinder.com/data/icons/hotel-10-1/48/452-512.png" />
                <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@1&family=Raleway:ital,wght@1,500&display=swap" rel="stylesheet"></link>
            </Head>

            <div className = 'grid' >
                <nav className="background">
                    <div className="transbox">
                        <div className='navTop'>
                            <img className='myimg' src= 'https://imgur.com/Ghlpeff.jpg' alt = ''/>
                            <h4>SALI SAMIR MOHAMED</h4>
                            <h6> SOFTWEAR ENGINEERING </h6>
                        </div>
                         <div className='navMid'>
                            <Link href={'/'}><h5>PORTFOLIO ></h5></Link>
                            <Link href={'/my_offer'}><h5>MY OFFER</h5></Link>
                            <Link href={'/contact'}><h5>CONTACT ME</h5></Link>
                            <Link href={'/resume'}><h5>MY CV</h5></Link>
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

                <main>
                    {props.children}
                </main>
            </div>
        </>
    )
}
export default Layout;
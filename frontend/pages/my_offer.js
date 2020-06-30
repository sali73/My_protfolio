import Layout from  '../components/Layout'
import Link from "next/link";
const Offer = () => {
    return (
        <>
            <Layout>
                <div className='offer'>
                    <h2>MY OFFER </h2>
                </div>
                <div className='myoffer'>
                        <h5>I have maintained, developed and launched multiple projects from scratch, carrying the development of its' back-end and front-end codebases.</h5>
                        <h5>My current toolset includes Elixir Language Ruby, React,Redux and all the other various frameworks, libraries and technologies related to them.</h5>
                        <h4>I can help you with all the sides of your project :</h4>
                        <ul >
                            <li><h5>leading/co-developing the back-end and front-end,</h5></li>
                            <li><h5>mentoring the team,</h5></li>
                            <li><h5>estimating tasks,</h5></li>
                            <li><h5>researching possible techs,</h5></li>
                            <li><h5>leading, launching and monitoring the project.</h5></li>
                        </ul>
                    <div className='line'></div>
                    <div>
                        <h4><img src='https://icons.iconarchive.com/icons/cornmanthe3rd/plex/24/Other-html-5-icon.png'/> FRONT-END ENGINEERING</h4>
                        <h5>My current experience and skills in front-end includes:</h5>
                        <ul>
                            <li><h5> React</h5></li>
                            <li><h5> Next.js</h5></li>
                            <li><h5> Redux</h5></li>
                            <li><h5> jQuery</h5></li>
                            <li><h5> HTML, Css, sess, javascript</h5></li>
                        </ul>
                    </div>
                    <div className='line'></div>
                    <div>
                        <h4><img src='https://icons.iconarchive.com/icons/thehoth/seo/24/seo-web-code-icon.png'/> BACK-END ENGINEERING</h4>
                        <h5>What I can do for you at that side is :</h5>
                        <ul>
                            <li><h5> lead development of backends in Elixir/Ruby,</h5></li>
                            <li><h5> cooperation with APIs, </h5></li>
                            <li><h5> using different types of databases (like PostgreSQL, MySQL)</h5></li>
                            <li><h5> python</h5></li>
                            <li><h5>Django</h5></li>
                            <li><h5>Express</h5></li>
                        </ul>
                    </div>
                    <div className='line'></div>
                    <h6>If your initial thought is that I can’t be the best in everything, it's okay. Send the design job to someone else, and I will take care of all the code development, or whatever other role you see me best in.
                        In cases when you already have an existing team, but you would still use some help, <Link href={'/contact'}> Contact me. </Link> as well. I’ll fit in very quickly, I promise.</h6>
                </div>
            </Layout>

        </>
    )

}
export default Offer;
import Layout from  '../components/Layout'

const Contact = () => {
    console.log('this is the contact page ')
    return (
        <>
            <Layout>
                <div className= 'jumbotron'>
                    <div className='resumeTop'>
                        <h3>Sali Samir Mahmoud</h3>
                        <h5>SOFTWARE ENGINEER</h5>
                        <h6>Sally.elgendy@hotmail.com  |  Yonkers, New York |  https://github.com/sali73  |  https://www.linkedin.com/in/salimohamed</h6>
                    </div>
                    <div className='lineTwo'></div>
                    <div className='resumeBottom'>
                        <h4>SUMMARY</h4>
                        <p>I am a strong foundation in software engineering and programming principles across multiple platforms. Experienced in object-oriented programming, developing, testing/debugging code, and designing interfaces.Quick learner and a successful master of new technologies.</p>
                        <h4>SKILLS</h4>
                        <p>PROGRAMING LANGUAGES:  javascript , HTML,CSS/sass,PostgreSQL, MySQL MongoDB , python , Django , express , React ,Rube , Go , Query
                        <br/>TECHNICAL SKILLS:  Microsoft Word , Microsoft Excel , Microsoft PowerPoint , Google Drive</p>
                        <h4>EXPERIENCE</h4>
                        <h5>General Assembly</h5>
                        <h6>Web Development Fellow - April 2020 to Current - New York</h6>
                        <ul>
                            <li> 12 weeks of software engineering impressive training</li>
                            <li> Create Apps Using Front-end and Back-end Tools, Projectsexamples:</li>
                            <ul >
                                <li><a href='https://ces-store.netlify.app/shop'>Women Bags Store</a></li>
                                <li><a href='https://bookmarkd-react-app.herokuapp.com'>Bookmarkd App</a></li>
                                <li><a href='https://orlando-full-stack-app.herokuapp.com/tour'>Orlando Tour App</a></li>
                            </ul>
                        </ul>
                        <h5>El Marwa Food Industries</h5>
                        <h6>Junior front end developer - May 2012 to September 2016 - Cairo,Egypt</h6>
                        <ul>
                            <li>Implemented web designs and outlook through programming languages HTML, CSS , jQuery and JavaScript frameworks to renew and update the industrie website <a href='http://www.elmarwa.com'>elmarwa</a></li>

                        </ul>
                        <h4>EDUCATION</h4>
                        <ul className='edu'>
                            <li><a href='https://generalassemb.ly/'>General Assembly -  NY,USA -2020 Software Engineering Immersive</a></li>
                            <li><a href='https://www.aambfs.org/'>Arab Academy for Banking and Financial Sciences</a> - Financial Management Master’s Degree -  Cairo,Egypt - 2009</li>
                            <li><a href='http://www.thebesacademy.org/en/page.php?id=3'>Thebes Academy of science and Technology </a>- Information Systems Foundation Degree -  Cairo,Egypt - 2005 </li>
                            <li><a href='http://www.thebesacademy.org/en/page.php?id=3'>Thebes Academy of science and Technology </a>- Computer Science Bachelor Degree -  Cairo,Egypt - 2004</li>

                        </ul>
                </div>
            </div>




            </Layout>
        </>
    )

}
export default Contact;
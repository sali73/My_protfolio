import Layout from  '../components/Layout'

const Contact = () => {
    console.log('this is the contact page ')
    return (
        <>
            <Layout>
                <h2>CONTACT ME</h2>
                <div className='myoffer'>
                    <h4>I am available for hire and open to any ideas of cooperation.</h4>
                    <ul>
                        <li><h5>E-mail:<a href='https://www.hotmail.com'> sally.elgendy@hotmail.com</a></h5></li>
                        <li><h5>LinkedIn:<a href='https://www.linkedin.com/in/sali-m-aa7a95b4/' >Sali Mohamed</a></h5></li>
                        <li><h5>Github:<a href='https://github.com/sali73'>sali73</a></h5></li>
                        <li><h5>Facebook:<a href='https://www.facebook.com/'>elgendy sally</a></h5></li>

                    </ul>
                </div>
            </Layout>
        </>
    )

}
export default Contact;
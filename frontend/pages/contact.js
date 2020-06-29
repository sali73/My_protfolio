import Layout from  '../components/Layout'

const Contact = () => {
    console.log('this is the contact page ')
    return (
        <>
            <Layout>
                <div >
                    <h3>CONTACT ME</h3>
                    <h5>I am available for hire and open to any ideas of cooperation.</h5>
                    <ul>
                        <li><h6>E-mail:</h6><a href='https://www.hotmail.com'><h6><img src= 'https://iconarchive.com/icons/custom-icon-design/mono-general-2/16/mail-icon.png' alt = ''/>sally.elgendy@hotmail.com</h6></a></li>
                        <li><h6>LinkedIn:</h6><a href='https://www.linkedin.com/in/sali-m-aa7a95b4/' ><h6><img src= 'https://iconarchive.com/icons/graphics-vibe/purple-glossy-social/16/linkedin-icon.png' alt = ''/>Sali Mohamed</h6></a></li>
                        <li><h6>Github:</h6><a href='https://github.com/sali73'><h6><img src= 'https://iconarchive.com/icons/limav/flat-gradient-social/16/Github-icon.png' alt = ''/>sali73</h6></a></li>
                        <li><h6>Facebook:</h6><a href='https://www.facebook.com/'><h6><img src= 'https://iconarchive.com/icons/designbolts/pink-girly-social/16/Active-Facebook-icon.png' alt = ''/>elgendy sally</h6></a></li>

                    </ul>
                </div>
            </Layout>
        </>
    )

}
export default Contact;
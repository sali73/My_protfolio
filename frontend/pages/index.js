import fetch from 'isomorphic-unfetch';
import Link from "next/link";
import Layout from '../components/Layout';
export default function Index (props) {
    return (
        <Layout>
            <div className= 'portfolio'>
                <div>
                    <div className='index'>
                        <h2>PORTFOLIO</h2>
                        <h6>See my works below.</h6>
                    </div>
                </div>

                <div className='portfolio2'>
                    <div className='partone'><small><br/>Now<br/><br/><br/>2020<br/><br/><br/>Projects</small></div>
                    <div className='parttwo'>
                        <div className='part'>
                            <h6>Currently open to co-operation on new and existing projects.
                                Looking for a softwer engineer, or frontend  a just full-stack dev willing to join your team?
                                <Link href={'/contact'}>Contact me. </Link> I will answer you in ~24 hours.</h6>
                        </div>
                        <div className='line'></div>
                        <div className='parttwo'>
                            <h6>I was an 12 Weeks Of Software Engineering Impressive Training
                                Create Apps Using Front-end and Back-end Tools.This gave me a lot of experience and hindsight on how a proper team collaboration, recruitment, and project management process should look like. See <Link href={'/resume'}> my CV</Link> for more details.</h6>
                        </div>
                        <div className='line'></div>
                         <ul >
                            {props.projects
                                ? props.projects.map((index, key) => {
                                    return (
                                            <>
                                                <div className='card projects' style={{width: "20rem" }}key={key} >

                                                        <img className='card-img-top projectsimg'src={index.image} alt=""/>

                                                        <div className="card-body">
                                                        <h4 className="card-title">title : {index.title}</h4>
                                                        <h6 className="card-text"><a href={index.code} >code </a></h6>
                                                        <h6 className="card-text"><a href= {index.deployment} >deployment </a></h6>

                                                    </div>
                                                </div>

                                            </>
                                    )
                                })
                                : "Loading..."
                                }
                    </ul>
                </div>
            </div>
            </div>
        </Layout>
    )


}
Index.getInitialProps = async (props) => {
    let res, data, projects;
    try{
        res = await fetch('http://142.93.253.51:8000/api/v1/project/');
        data = await res.json();
        projects = data.objects;
    } catch(error){
        console.error(error);
    }
    return {
        projects
    }
};
// import fetch from 'isomorphic-unfetch';
// import Link from "next/link";
// import Layout from '../components/Layout';
// export default function Index ({projects}) {
//     return (
//         <Layout>
//             <div className= 'portfolio'>
//                 <div className= 'port'>
//                     <h1>PORTFOLIO</h1>
//                     <h6> <big>About me</big> I am a strong foundation in software engineering and programming principles across multiple
//                     platforms.  Experienced in object-oriented programming, developing, testing / debugging code, and
//                     designing interfaces.Quick learner and a successful master of new technologies.
//                     See my works below.</h6>
//                 </div>
//                 <div className='portfolio2'>
//                     <div className='partone'>
//                         <small><br/>Now<br/><br/><br/><br/><br/><br/>2020<br/><br/><br/><br/><br/> Projects</small>
//                     </div>
//                     <div className='parttwo'>
//                             <h6><big>Currently open to co-operation on new and existing projects.</big><br/>
//                                 Looking for a softwer engineer, or frontend  a just full-stack dev willing to join your team?
//                                 <Link href={'/contact'}> Contact me. </Link> I will answer you in ~24 hours.</h6>
//                             <div className='line'></div>
//                             <h6>I was an 12 Weeks Of Software Engineering Impressive Training
//                                 Create Apps Using Front-end and Back-end Tools.This gave me a lot of experience and hindsight on how a proper team collaboration, recruitment, and project management process should look like.Also i am graduated of <big>Computer Scince Bachelor degree</big> ==> See <Link href={'/resume'}> my CV </Link> for more details.</h6>
//                         <div className='line'></div>
//                          <ul className='project_cards'>
//                             {projects
//                                 ? projects.map((index, key) => {
//                                     return (
//                                             <>
//                                                 <div className='card' style={{width: "20rem" }}key={key} >
//                                                         <img className='card-img-top projectsimg'src={index.image} alt=""/>
//                                                     <div className="card-body">
//                                                         <h4 className="card-title">{index.title}</h4>
//                                                         <button type="button" className="btn btn-light"><a href={index.code} ><h6> App Code</h6> </a></button>
//                                                         <button type="button" className="btn btn-lightbtn btn-light"><a href= {index.deployment}><h6>Deployment </h6></a></button>
//                                                     </div>
//                                                 </div>
//                                             </>
//                                     )
//                                 })
//                                 : "Loading..."
//                                 }
//                           </ul>
//                 </div>
//                 </div>
//             </div>
//         </Layout>
//     )
// }
// Index.getInitialProps = async () => {
//     let res, data, projects;
//     try{
//         res = await fetch('http://127.0.0.1:8000/api/v1/project/');
//         data = await res.json();
//         projects = data.objects;
//     } catch(error){
//         console.error(error);
//     }
//     return {
//         projects:projects
//     }
// };

import fetch from 'isomorphic-unfetch';
import Link from "next/link";
import Layout from '../components/Layout';
import {Component} from 'react';

export default class Index extends Component {
    state = {
        projects : []
    }
static async getInitialProps (){
    let res, data, projects;
    try{
        res = await fetch('http://127.0.0.1:8000/api/v1/project/');
        data = await res.json();
        projects = data.objects;
    } catch(error){
        console.error(error);
    }
    return {
        projects:projects
    }
}
async componentDidMount(){
        let res , data , projects ;
     try{
        res = await fetch('http://127.0.0.1:8000/api/v1/project/');
        data = await res.json();
        projects = data.objects;
        this.setState([projects])
    } catch(error){
        console.error(error);
    }
}
render(){
    return (
        <Layout >
            <div className= 'portfolio'>
                <div className= 'port'>
                    <h1>PORTFOLIO</h1>
                    <h6> <big>About me</big> I am a strong foundation in software engineering and programming principles across multiple
                    platforms.  Experienced in object-oriented programming, developing, testing / debugging code, and
                    designing interfaces.Quick learner and a successful master of new technologies.
                    See my works below.</h6>
                </div>
                <div className='portfolio2'>
                    <div className='partone'>
                        <small><br/>Now<br/><br/><br/><br/><br/><br/>2020<br/><br/><br/><br/><br/> Projects</small>
                    </div>
                    <div className='parttwo'>
                            <h6><big>Currently open to co-operation on new and existing projects.</big><br/>
                                Looking for a softwer engineer, or frontend  a just full-stack dev willing to join your team?
                                <Link href={'/contact'}> Contact me. </Link> I will answer you in ~24 hours.</h6>
                            <div className='line'></div>
                            <h6>I was an 12 Weeks Of Software Engineering Impressive Training
                                Create Apps Using Front-end and Back-end Tools.This gave me a lot of experience and hindsight on how a proper team collaboration, recruitment, and project management process should look like.Also i am graduated of <big>Computer Scince Bachelor degree</big> ==> See <Link href={'/resume'}> my CV </Link> for more details.</h6>
                        <div className='line'></div>
                         <ul className='project_cards'>
                            {this.props.projects
                                ? this.props.projects.map((index, key) => {
                                    return (
                                            <>
                                                <div className='card' style={{width: "20rem" }}key={key} >
                                                        <img className='card-img-top projectsimg'src={index.image} alt=""/>
                                                    <div className="card-body">
                                                        <h4 className="card-title">{index.title}</h4>
                                                        <button type="button" className="btn btn-light"><a href={index.code} ><h6> App Code</h6> </a></button>
                                                        <button type="button" className="btn btn-lightbtn btn-light"><a href= {index.deployment}><h6>Deployment </h6></a></button>
                                                    </div>
                                                </div>
                                            </>
                                    )
                                })
                                : this.state.projects.map((index, key) => {
                                    return (
                                            <>
                                                <div className='card' style={{width: "20rem" }}key={key} >
                                                        <img className='card-img-top projectsimg'src={index.image} alt=""/>
                                                    <div className="card-body">
                                                        <h4 className="card-title">{index.title}</h4>
                                                        <button type="button" className="btn btn-light"><a href={index.code} ><h6> App Code</h6> </a></button>
                                                        <button type="button" className="btn btn-lightbtn btn-light"><a href= {index.deployment}><h6>Deployment </h6></a></button>
                                                    </div>
                                                </div>
                                            </>
                                    )
                                })
                                }
                          </ul>
                </div>
                </div>
            </div>
        </Layout>
    )
}
}
;
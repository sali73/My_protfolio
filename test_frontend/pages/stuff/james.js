import Layout from  '../../components/Layout'
import fetch from 'isomorphic-unfetch'

const Index = () => {
    console.log('this is the home page ')
    return (
        <>
            <Layout>
            <h1>hello from me</h1>
            </Layout>
        </>
    )
};
Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
    const data = await res.json()
    return {
        data,
        james:'you are james'
    }
}    
export default Index;
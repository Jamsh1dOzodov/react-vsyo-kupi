import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';



const History = () => {

    const breadcrumbsList = [
        { id: 1, text: 'Каталог', link: '/' },
        { id: 2, text: 'История заказов', link: '/', last: true }
    ]

    return (
        <>
            <Layout>
                <Breadcrumbs elements={breadcrumbsList} />
                <div className='container'>
                    <div className='wrapper'>
                        <Sidebar active='history' />
                        <div className='history'>
                            <h3 className='history__title'>История заказов</h3>
                            
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default History;
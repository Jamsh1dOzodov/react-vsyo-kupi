import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Layout from '../components/Layout/Layout'
import Sidebar from '../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';


const PasswordChange = () => {

    const breadcrumbsList = [
        { id: 1, text: 'Главная', link: '/' },
        { id: 2, text: 'Мой профиль', link: '/' },
        { id: 3, text: 'Пароль', link: '/', last: true }
    ]

    return (
        <>
            <Layout>
                <Breadcrumbs elements={breadcrumbsList} />
                <div className='passwordchange'>
                    <div className='container'>
                        <div className='wrapper'>
                            <Sidebar active='password'/>
                            <div className='password'>
                                <div className='wrapper'>
                                    <h3 className='password__title'>Пароль</h3>
                                    <Link to="/password" className='password__btn'>Редактировать</Link>
                                </div>
                                <p className='password__text'>Пароль был изменен 128 дней назад</p>
                            </div>
                            <div className='empty'></div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default PasswordChange;
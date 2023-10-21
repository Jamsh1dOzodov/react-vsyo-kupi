import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Layout from '../components/Layout/Layout'
import Sidebar from '../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import map from '../assets/images/personal_map.png'





const Personal = () => {
    const breadcrumbsList = [
        {id: 1, text: 'Главная', link: '/'},
        {id: 2, text: 'Мой профиль', link: '/'},
        {id: 3, text: 'Данные учетной записи', link: '/', last: true}
    ]
    return (
        <>
            <Layout>
                <Breadcrumbs elements={breadcrumbsList} />
                <div className='personal'>
                    <div className='container'>
                        <div className='wrapper'>
                            <Sidebar active='personal' />
                            <div className='accaunt'>
                                <h2 className='accaunt__title'>Данные учетной записи</h2>
                                <div className='accaunt-dataChange'>
                                    <p className='accaunt-dataChange__text'>Персональные данные</p>
                                    <Link to='/personaldata' className='accaunt-dataChange__btn'>Редактировать</Link>
                                </div>
                                <div className='accaunt-data'>
                                    <p className='accaunt-data__text accaunt-data__text--bold'>ФИО</p>
                                    <p className='accaunt-data__text'>Константинопольский Альберт Николаевич</p>
                                </div>
                                <div className='accaunt-column'>
                                    <div className='accaunt-data'>
                                        <p className='accaunt-data__text accaunt-data__text--bold'>Телефон</p>
                                        <p className='accaunt-data__text'>+7 999 888-25-35</p>
                                    </div>
                                    <div className='accaunt-data'>
                                        <p className='accaunt-data__text accaunt-data__text--bold'>Почта</p>
                                        <p className='accaunt-data__text'>examplequitelongmail@gmail.ru</p>
                                    </div>
                                </div>
                                <div className='accaunt-column'>
                                    <div className='accaunt-data'>
                                        <p className='accaunt-data__text accaunt-data__text--bold'>Дата рождения</p>
                                        <p className='accaunt-data__text'>24.05.95</p>
                                    </div>
                                    <div className='accaunt-data'>
                                        <p className='accaunt-data__text accaunt-data__text--bold'>Ссылка на профиль ВКонтакте</p>
                                        <Link className='accaunt-data__link'>vk.com/name</Link>
                                    </div>
                                </div>

                                <div className='accaunt-dataChange accaunt-dataChange--address'>
                                    <p className='accaunt-dataChange__text'>Адрес</p>
                                    <Link to='/personaladdress' className='accaunt-dataChange__btn'>Редактировать</Link>
                                </div>
                                <p className='accaunt__address'>660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2</p>

                                <div className='accaunt-map'><img src={map} /></div>
                            </div>
                            <div className='empty'></div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Personal;
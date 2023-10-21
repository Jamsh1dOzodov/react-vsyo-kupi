import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import birthdayImg from '../assets/icons/personal_birthdayImg.svg';




const PersonalData = () => {
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
                            <div className='accauntData'>
                                <h2 className='accauntData__title'>Данные учетной записи</h2>
                                <div className='accauntData-tit'>
                                    <p className='accauntData-tit__text'>Персональные данные</p>
                                    <div className='accauntData-tit__line'></div>
                                </div>

                                <form className='accauntData-persData'>
                                    <div className='wrapper'>
                                        <div className='group'>
                                            <label className='group__title'>Телефон<span className='group__title group__title--red'>*</span></label>
                                            <input className='group__input' type='text' />
                                        </div>
                                        <div className='group'>
                                            <label className='group__title'>Почта<span className='group__title group__title--red'>*</span></label>
                                            <input className='group__input' type='email' />
                                        </div>
                                    </div>
                                    <div className='group--long group'>
                                        <label className='group__title'>ФИО<span className='group__title group__title--red'>*</span></label>
                                        <input className='group__input' type='text' />
                                    </div>

                                    <div className='accauntData-persData__birthday birthday'>
                                        <div className='group'>
                                            <label className='group__title'>Дата рождения</label>
                                            <input className='group__input' type='text' />
                                        </div>
                                        <div className='birthday__img'><img src={birthdayImg} /></div>
                                        <p className='birthday__text'>Укажите для получения подарка</p>
                                    </div>
                                    <div className='group--vk group'>
                                        <label className='group__title'>Сcылка на ваш профиль <span className='group__title group__title--link'>ВКонтакте</span></label>
                                        <input className='group__input' type='text' placeholder='https://vk.com/name' />
                                    </div>

                                    <div className='accauntData-persData__btns btns'>
                                        <button type='reset' className='btns__cancel'>Отменить изменения</button>
                                        <button type='submit' className='btns__save'>Сохранить</button>
                                    </div>
                                </form>
                            </div>
                            <div className='empty'></div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default PersonalData;
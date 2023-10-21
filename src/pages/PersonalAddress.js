import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import map from '../assets/images/personal_map.png';




const PersonalAddress = () => {

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
                            <div className='accauntAddress'>
                                <h2 className='accaunt__title'>Данные учетной записи</h2>
                                <div className='accauntData-tit'>
                                    <p className='accauntData-tit__text'>Персональные данные</p>
                                    <div className='accauntData-tit__line'></div>
                                </div>
                                <form className='accauntAddress-address'>
                                    <div className='wrapper'>
                                        <div className='group'>
                                            <label className='group__title'>Страна<span className='group__title group__title--red'>*</span></label>
                                            <input className='group__input' type='text' />
                                        </div>
                                        <div className='group'>
                                            <label className='group__title'>Город<span className='group__title group__title--red'>*</span></label>
                                            <input className='group__input' type='text' />
                                        </div>
                                    </div>
                                    <div className='group--long group'>
                                        <label className='group__title'>Улица<span className='group__title group__title--red'>*</span></label>
                                        <input className='group__input' type='text' />
                                    </div>
                                    <div className='wrapper'>
                                        <div className='group group--short'>
                                            <label className='group__title'>Дом<span className='group__title group__title--red'>*</span></label>
                                            <input className='group__input' type='text' />
                                        </div>
                                        <div className='group group--short'>
                                            <label className='group__title'>Квартира<span className='group__title group__title--red'>*</span></label>
                                            <input className='group__input' type='text' />
                                        </div>
                                        <div className='group group--short'>
                                            <label className='group__title'>Индекс<span className='group__title group__title--red'>*</span></label>
                                            <input className='group__input' type='text' />
                                        </div>
                                    </div>
                                    <div className='accaunt-map'><img src={map} /></div>
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

export default PersonalAddress;
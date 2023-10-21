import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Layout from '../components/Layout/Layout'
import Sidebar from '../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';



const Password = () => {

    const breadcrumbsList = [
        { id: 1, text: 'Главная', link: '/' },
        { id: 2, text: 'Мой профиль', link: '/' },
        { id: 3, text: 'Пароль', link: '/', last: true }
    ]

    return (
        <>
            <Layout>
                <Breadcrumbs elements={breadcrumbsList} />
                <div className='passwordinp'>
                    <div className='container'>
                        <div className='wrapper'>
                            <Sidebar active='password' />
                            <div className='password'>
                                <h3 className='password__title'>Смена пароля</h3>
                                <form>
                                    <div className='group--long group'>
                                        <label className='group__title'>Старый пароль</label>
                                        <input className='group__input' type='password' />
                                    </div>
                                    <div className='group--long group'>
                                        <label className='group__title'>Новый пароль</label>
                                        <input className='group__input' type='password' />
                                    </div>
                                    <div className='group--long group'>
                                        <label className='group__title'>Новый пароль еще раз</label>
                                        <input className='group__input' type='password' />
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

export default Password;
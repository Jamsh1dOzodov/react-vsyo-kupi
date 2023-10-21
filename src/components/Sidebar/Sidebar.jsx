import './Sidebar.scss';
import sprite from '../../assets/sprites/sprite.svg'
import { Link } from 'react-router-dom';


const Sidebar = (props) => {
    return (
        <>
            <div className="sidebar">
                <h3 className='sidebar__title'>Мой профиль</h3>
                <ul className='sidebar-list'>
                    <li className={props.active === 'personal' ? 'sidebar-list__item sidebar-list__item--active' : 'sidebar-list__item'}>
                        <Link to='/personal' className='sidebar-list__link'>
                            <svg className="sidebar-list__icon">
                                <use href={`${sprite}#sidebar_personal`}></use>
                            </svg>
                            <span className='sidebar-list__text'>Данные учетной записи</span>
                        </Link>
                    </li>
                    <li className={props.active === 'password' ? 'sidebar-list__item sidebar-list__item--active' : 'sidebar-list__item'}>
                        <Link to='/passwordchange' className='sidebar-list__link'>
                            <svg className="sidebar-list__icon">
                                <use href={`${sprite}#sidebar_password`}></use>
                            </svg>
                            <span className='sidebar-list__text'>Пароль</span>
                        </Link>
                    </li>
                    <li className={props.active === 'favorite' ? 'sidebar-list__item sidebar-list__item--active' : 'sidebar-list__item'}>
                        <Link className='sidebar-list__link'>
                            <svg className="sidebar-list__icon">
                                <use href={`${sprite}#sidebar_favorite`}></use>
                            </svg>
                            <span className='sidebar-list__text'>Избранное</span>
                        </Link>
                    </li>
                    <li className={props.active === 'history' ? 'sidebar-list__item sidebar-list__item--active' : 'sidebar-list__item'}>
                        <Link className='sidebar-list__link'>
                            <svg className="sidebar-list__icon">
                                <use href={`${sprite}#sidebar_history`}></use>
                            </svg>
                            <span className='sidebar-list__text'>История заказов</span>
                        </Link>
                    </li>
                    <li className={props.active === 'email' ? 'sidebar-list__item sidebar-list__item--active' : 'sidebar-list__item'}>
                        <Link className='sidebar-list__link'>
                            <svg className="sidebar-list__icon">
                                <use href={`${sprite}#sidebar_email`}></use>
                            </svg>
                            <span className='sidebar-list__text'>E-mail рассылка</span>
                        </Link>
                    </li>
                </ul>
            </div >
        </>
    )
}

export default Sidebar;
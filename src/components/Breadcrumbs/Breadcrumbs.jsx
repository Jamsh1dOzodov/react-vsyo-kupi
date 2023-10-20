import './Breadcrumbs.scss';
import { Link } from 'react-router-dom';


const Breadcrumbs = () => {
    return(
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <ul className='breadcrumbs-list'>
                        <li className='breadcrumbs-list__item'><Link className='breadcrumbs-list__link'>Главная</Link></li>
                        <li className='breadcrumbs-list__item'><Link className='breadcrumbs-list__link'>Мой профиль</Link></li>
                        <li className='breadcrumbs-list__item'><Link className='breadcrumbs-list__link breadcrumbs-list__link--light'>Данные учетной записи</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Breadcrumbs;
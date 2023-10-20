import { Link } from 'react-router-dom'
import './Navbar.scss'


const Navbar = () => {
    return(
        <>
            <nav className='nav'>
                <div className="container">
                    <div className="wrapper">
                        <ul className='nav-list'>
                            <li className='nav-list__item'><Link className='nav-list__link nav-list__link--active'>Для дома</Link></li>
                            <li className='nav-list__item'><Link className='nav-list__link'>Сад и огород</Link></li>
                            <li className='nav-list__item'><Link className='nav-list__link'>Бытовая химия</Link></li>
                            <li className='nav-list__item'><Link className='nav-list__link'>Косметика и гигиена</Link></li>
                            <li className='nav-list__item'><Link className='nav-list__link'>Все для праздника</Link></li>
                            <li className='nav-list__item'><Link className='nav-list__link'>Игрушки</Link></li>
                        </ul>
                        <div className="nav-delivery">
                            <Link className='nav-delivery__del'>Доставка</Link>
                            <Link className='nav-delivery__partner'>Сотрудничество</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
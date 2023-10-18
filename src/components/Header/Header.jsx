import './Header.scss'
import menu from '../../assets/icons/header_menu.svg'
import logo from '../../assets/icons/header_logo.svg'
import { Link } from 'react-router-dom';
import lupa from '../../assets/icons/header_lupa.svg'
import favorite from '../../assets/icons/header_favorite.svg'
import backet from '../../assets/icons/header_basket.svg'
import personal from '../../assets/icons/header_personal.svg'
import emptyArrow from '../../assets/icons/header_emptyArrowDown.svg'


const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <div className="wrapper">
                        <div className="header-left">
                            <div className="wrapper">
                                <div className="header-left__menuIcon"><img src={menu} alt="Меню" /></div>
                                <div className="header-left__logo"><img src={logo} alt="" /></div>
                                <div className="header-left__contacts">
                                    <Link className='header-left__phone' to="tel:+88009008888">8 800 900-88-88</Link>
                                    <div className="header-left__selectCity">
                                        <select className='header-left__select' name="Город" id="city">
                                            <option className='header-left__city' value="Красноярск" selected>Красноярск</option>
                                            <option className='header-left__city' value="Москва">Москва</option>
                                            <option className='header-left__city' value="Питер">Питер</option>
                                            <option className='header-left__city' value="Владивосток">Владивосток</option>
                                        </select>
                                    </div>
                                </div>
                                <form className='header-left__form'>
                                    <input className='header-left__search' type="text" placeholder='Введите название товара' />
                                    <button type='submit' className='header-left__searchBtn'><img src={lupa} alt="" /></button>
                                </form>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="wrapper">
                                <Link className="header-right__favorites" to='#'>
                                    <img src={favorite} alt="Избранное" />
                                </Link>
                                <div className="header-right__basket">
                                    <Link to='#' className="header-right__basketLogo">
                                        <img src={backet} alt="Корзина" />
                                    </Link>
                                    <p className='header-right__basketSum'>99 999 ₽</p>
                                </div>
                                <div className="header-right__personal">
                                    <Link to='#' className="header-right__personalLogo">
                                        <img src={personal} alt="Личный кабинет" />
                                    </Link>
                                    <p className='header-right__personalName'>Александр</p>
                                    <Link className='header-right__personalArrow' to="#"><img src={emptyArrow} alt="стрелка" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
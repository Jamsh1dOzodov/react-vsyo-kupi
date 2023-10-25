import './Footer.scss'
import { Link } from 'react-router-dom';
import instagram from '../../assets/icons/footer_instagramLogo.svg'
import vk from '../../assets/icons/footer_vkLogo.svg'
import sprite from '../../assets/sprites/sprite.svg'



const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="wrapper">
                        <div className="col col--first">
                            <h3 className='footer__colTitle'>ДЛЯ ПОКУПАТЕЛЕЙ</h3>
                            <ul className='footer-colList'>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Отзывы покупателей</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Личный кабинет</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Способы оплаты</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Возврат / обмен</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Доставка</Link></li>
                            </ul>
                        </div>
                        <div className="col col--second">
                            <h3 className='footer__colTitle'>ПОЛЕЗНАЯ ИНФОРМАЦИЯ</h3>
                            <ul className='footer-colList'>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Политика конфиденциальности</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Пользовательские соглашения</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Распродажа</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Новинки</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Акции</Link></li>
                            </ul>
                        </div>
                        <div className="col col--third">
                            <h3 className='footer__colTitle'>СОТРУДНИЧЕСТВО</h3>
                            <ul className='footer-colList'>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Поставщикам</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Партнёрам</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Вакансии</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>Контакты</Link></li>
                                <li className='footer-colList__item'><Link className='footer-colList__link' to='#'>О нас</Link></li>
                            </ul>
                        </div>
                        <div className="col col--contact">
                            <Link className='footer__colPhone' to='tel:+88009008888'>8 800 900-88-88</Link>
                            <Link className='footer__colPhone' to='tel:+83912832249'>8 391 283-22-49</Link>
                            <Link className='footer__colEmail' to='mailto:sales@краснаяцена.рф'>sales@краснаяцена.рф</Link>
                            <div className="footer-colSocial">
                                <Link className='footer-colSocial__link' to='#'>Сотрудничество</Link>
                                <Link className='footer-colSocial__insta'>
                                    <svg className="icon">
                                        <use href={`${sprite}#footer_instagramLogo`}></use>
                                    </svg>
                                </Link>
                                <Link className='footer-colSocial__insta footer-colSocial__vk'>
                                    <svg className="icon">
                                        <use href={`${sprite}#footer_vkLogo`}></use>
                                    </svg>
                                </Link>
                            </div>
                            <p className='footer__colSchedule'>Заказ товаров без выходных с 9:00 до 22:00</p>
                        </div>
                    </div>

                    <ul className="footer-links">
                        <li className="footer-links__item"><Link className='footer-links__link' to='#'>Все для дома</Link></li>
                        <li className="footer-links__item"><Link className='footer-links__link' to='#'>Все для дачи</Link></li>
                        <li className="footer-links__item"><Link className='footer-links__link' to='#'>Все для туризма</Link></li>
                        <li className="footer-links__item"><Link className='footer-links__link' to='#'>Все для гаража</Link></li>
                        <li className="footer-links__item"><Link className='footer-links__link' to='#'>Все для праздника</Link></li>
                        <li className="footer-links__item"><Link className='footer-links__link' to='#'>Все для детей</Link></li>
                        <li className="footer-links__item"><Link className='footer-links__link' to='#'>Все для школы</Link></li>
                        <li className="footer-links__item"><Link className='footer-links__link' to='#'>Все для уборки</Link></li>
                        <li className="footer-links__item"><Link className='footer-links__link' to='#'>Все для готовки</Link></li>
                        <li className="footer-links__item"><Link className='footer-links__link' to='#'>Все для тебя</Link></li>
                    </ul>
                </div>
            </footer>
            <div className="under">
                <div className="container">
                    <div className="wrapper">
                        <p className='under__text'>2022 Интернет-магазин «Всё Купи» </p>
                        <p className='under__text'>Цены и наличие товарных предложений актуальны на 12:00 12.09.2022</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
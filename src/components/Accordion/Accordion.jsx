import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/history_arrow.svg';
import React, { useState } from 'react'



const Accordion = ({ paid }) => {

    const [open, setOpen] = useState(false)

    const accordion = (event) => {
        if (!event.target.classList.contains('top-rightCol__btn')) {
            if (open) {
                setOpen(false)
                return
            } return setOpen(true)
        }
    }

    return (
        <div className='history-accordion'>
            <div onClick={accordion} className={paid ? 'history-accordion__top history-accordion__top--paid top' : 'history-accordion__top top'}>
                <h4 className='top__title'>Заказ № 16894</h4>
                <div className='top-rightCol'>
                    <button className='top-rightCol__btn'>Оплатить</button>
                    <span className='top-rightCol__status'>{paid ? 'Доставлен' : 'Не оплачен'}</span>
                    <div className={open ? 'top-rightCol__arrow' : 'top-rightCol__arrow top-rightCol__arrow--down'}><img src={arrow} /></div>
                </div>
            </div>
            <div className={open ? 'history-accordion__middle history-accordion__middle--open middle' : 'history-accordion__middle middle'}>
                <table className='middle-table'>
                    <thead className='middle-table__head head'>
                        <tr className='head-titles'>
                            <th className='head-titles__text head-titles__text--first'>Наименование</th>
                            <th className='head-titles__text'>Кол-во</th>
                            <th className='head-titles__text head-titles__text--last'>Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='middle-table__mid mid'>
                            <td className='mid-name'>
                                <p className='mid-name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                            </td>
                            <td className='mid-count'>
                                <p className='mid-count__text'>1</p>
                            </td>
                            <td className='mid-price'>
                                <p className='mid-price__text'>72 420₽</p>
                            </td>
                        </tr>
                        <tr className='middle-table__mid mid'>
                            <td className='mid-name'>
                                <p className='mid-name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...</p>
                            </td>
                            <td className='mid-count'>
                                <p className='mid-count__text'>165</p>
                            </td>
                            <td className='mid-price'>
                                <p className='mid-price__text'>100 172 420₽</p>
                            </td>
                        </tr>
                        <tr className='middle-table__mid mid'>
                            <td className='mid-name'>
                                <p className='mid-name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                            </td>
                            <td className='mid-count'>
                                <p className='mid-count__text'>2</p>
                            </td>
                            <td className='mid-price'>
                                <p className='mid-price__text'>72 420₽</p>
                            </td>
                        </tr>
                        <tr className='middle-table__mid mid'>
                            <td className='mid-name'>
                                <p className='mid-name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                            </td>
                            <td className='mid-count'>
                                <p className='mid-count__text'>2</p>
                            </td>
                            <td className='mid-price'>
                                <p className='mid-price__text'>72 420₽</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className='middle-summary'>
                    <tbody>
                        <tr>
                            <td className='middle-summary__delivery delivery'>
                                <p className='delivery__text'>Стоимость доставки</p>
                            </td>
                            <td className='middle-summary__delivery middle-summary__delivery--right delivery'>
                                <p className='delivery__price'>450 ₽</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-summary__discount discount'>
                                <p className='discount__text'>Скидка</p>
                            </td>
                            <td className='middle-summary__discount middle-summary__discount--right discount'>
                                <p className='discount__price'>- 300 ₽</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-summary__sum sum'>
                                <p className='sum__text'>Итого</p>
                            </td>
                            <td className='middle-summary__sum middle-summary__sum--right sum'>
                                <p className='sum__price'>72 420₽</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className='middle-delivery'>
                    <tbody>
                        <tr>
                            <td className='middle-delivery__info info'>
                                <p className='info__text'>Способ получения</p>
                            </td>
                            <td className='middle-delivery__info middle-delivery__info--right info'>
                                <p className='info__text info__text--light'>Доставка по адресу</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-delivery__info info'>
                                <p className='info__text'>Дата получения</p>
                            </td>
                            <td className='middle-delivery__info middle-delivery__info--right info'>
                                <p className='info__text info__text--light'>Вторник, 14.12.2021 с 09:00 до 15:00</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-delivery__info info'>
                                <p className='info__text'>В резерве до</p>
                            </td>
                            <td className='middle-delivery__info middle-delivery__info--right info'>
                                <p className='info__text info__text--light'>Суббота, 18.12.2021 21:00 </p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-delivery__info info'>
                                <p className='info__text'>Метод оплаты</p>
                            </td>
                            <td className='middle-delivery__info middle-delivery__info--right info'>
                                <p className='info__text info__text--light'>Оплата курьеру</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-delivery__info info'>
                                <p className='info__text'>Адрес</p>
                            </td>
                            <td className='middle-delivery__info middle-delivery__info--right info'>
                                <p className='info__text info__text--light'>660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Accordion;
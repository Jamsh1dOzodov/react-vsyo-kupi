import { Link } from 'react-router-dom';
import arrow from '../../assets/icons/history_arrow.svg';
import React, { useState } from 'react'



const Accordion = ({ paid, order, orders, priceDelivery, discount, sum, deliveryMethod, receivingDate, reserveDate, payMethod, address }) => {

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
                <h4 className='top__title'>Заказ № {order}</h4>
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
                        {orders &&
                            orders.map(order =>
                                <tr key={order.id} className='middle-table__mid mid'>
                                    <td className='mid-name'>
                                        <p className='mid-name__text'>{order.name}</p>
                                    </td>
                                    <td className='mid-count'>
                                        <p className='mid-count__text'>{order.count}</p>
                                    </td>
                                    <td className='mid-price'>
                                        <p className='mid-price__text'>{order.price}₽</p>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <table className='middle-summary'>
                    <tbody>
                        <tr>
                            <td className='middle-summary__delivery delivery'>
                                <p className='delivery__text'>Стоимость доставки</p>
                            </td>
                            <td className='middle-summary__delivery middle-summary__delivery--right delivery'>
                                <p className='delivery__price'>{priceDelivery} ₽</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-summary__discount discount'>
                                <p className='discount__text'>Скидка</p>
                            </td>
                            <td className='middle-summary__discount middle-summary__discount--right discount'>
                                <p className='discount__price'>- {discount} ₽</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-summary__sum sum'>
                                <p className='sum__text'>Итого</p>
                            </td>
                            <td className='middle-summary__sum middle-summary__sum--right sum'>
                                <p className='sum__price'>{sum}₽</p>
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
                                <p className='info__text info__text--light'>{deliveryMethod}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-delivery__info info'>
                                <p className='info__text'>Дата получения</p>
                            </td>
                            <td className='middle-delivery__info middle-delivery__info--right info'>
                                <p className='info__text info__text--light'>{receivingDate}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-delivery__info info'>
                                <p className='info__text'>В резерве до</p>
                            </td>
                            <td className='middle-delivery__info middle-delivery__info--right info'>
                                <p className='info__text info__text--light'>{reserveDate}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-delivery__info info'>
                                <p className='info__text'>Метод оплаты</p>
                            </td>
                            <td className='middle-delivery__info middle-delivery__info--right info'>
                                <p className='info__text info__text--light'>{payMethod}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='middle-delivery__info info'>
                                <p className='info__text'>Адрес</p>
                            </td>
                            <td className='middle-delivery__info middle-delivery__info--right info'>
                                <p className='info__text info__text--light'>{address}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Accordion;
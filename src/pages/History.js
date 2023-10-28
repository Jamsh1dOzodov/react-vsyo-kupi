import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import arrow from '../assets/icons/history_arrow.svg';
import React, { useState } from 'react'
import Pagination from '../components/Pagination/Pagination';
import Accordion from '../components/Accordion/Accordion';
import { useContext } from 'react';
import { AuthContext } from '../context/context';




const History = () => {

    const breadcrumbsList = [
        { id: 1, text: 'Каталог', link: '/' },
        { id: 2, text: 'История заказов', link: '/', last: true }
    ]

    const { isAuth, setIsAuth } = useContext(AuthContext)


    const orderHistory = [
        {
            id: 1,
            order: '11111',
            paid: false,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 2,
            order: '11111',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 3,
            order: '11111',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 4,
            order: '11111',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 5,
            order: '11111',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 6,
            order: '11111',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 7,
            order: '22222',
            paid: false,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 8,
            order: '22222',
            paid: false,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 9,
            order: '22222',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 10,
            order: '22222',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 11,
            order: '22222',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 12,
            order: '22222',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 13,
            order: '33333',
            paid: false,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 14,
            order: '33333',
            paid: false,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 15,
            order: '33333',
            paid: false,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 16,
            order: '33333',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 17,
            order: '33333',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
        {
            id: 18,
            order: '33333',
            paid: true,
            orders: [
                { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti так будет выглядеть если больше...', count: '165', price: '100 172 420' },
                { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
                { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', count: '1', price: '72 420', },
            ],
            priceDelivery: '450',
            discount: '300',
            sum: '72 420',
            deliveryMethod: 'Доставка по адресу',
            receivingDate: 'Вторник, 14.12.2021 с 09:00 до 15:00',
            reserveDate: 'Суббота, 18.12.2021 21:00 ',
            payMethod: 'Оплата курьеру',
            address: '660000, г. Красноярск, ул. Малая, 44б, корпус 7, строение 2'
        },
    ]


    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage, setCardsPerPage] = useState(6)

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = orderHistory.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <>
            <Layout>
                <Breadcrumbs elements={breadcrumbsList} />
                <div className='container'>
                    <div className='wrapper'>
                        <Sidebar active='history' />
                        {/* {isAuth
                            ? <div className='history'>
                                <h3 className='history__title'>История заказов</h3>
                                {currentCards &&
                                    currentCards.map(item =>
                                        <Accordion key={item.id} paid={item.paid} order={item.order} priceDelivery={item.priceDelivery} discount={item.discount} sum={item.discount} deliveryMethod={item.deliveryMethod} receivingDate={item.receivingDate} reserveDate={item.reserveDate} payMethod={item.payMethod} address={item.address} orders={item.orders} />
                                    )
                                }
                                <Pagination cardsPerPage={cardsPerPage} totalCards={orderHistory.length} paginate={paginate} />
                            </div>
                            : 'Войдите в аккаунт'
                        } */}

                        <div className='history'>
                            <h3 className='history__title'>История заказов</h3>
                            {isAuth
                                ? <div>
                                    {currentCards &&
                                        currentCards.map(item =>
                                            <Accordion key={item.id} paid={item.paid} order={item.order} priceDelivery={item.priceDelivery} discount={item.discount} sum={item.discount} deliveryMethod={item.deliveryMethod} receivingDate={item.receivingDate} reserveDate={item.reserveDate} payMethod={item.payMethod} address={item.address} orders={item.orders} />
                                        )
                                    }
                                    <Pagination cardsPerPage={cardsPerPage} totalCards={orderHistory.length} paginate={paginate} />
                                </div>
                                : 'Войдите в аккаунт'
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default History;
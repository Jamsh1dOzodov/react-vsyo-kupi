import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import videocard from '../assets/images/favorite_videocard.png';
import React, { useState } from 'react'
import TableBtn from '../components/TableBtn/TableBtn';




const Favorite = () => {

    const breadcrumbsList = [
        { id: 1, text: 'Каталог', link: '/' },
        { id: 2, text: 'Избранное', link: '/', last: true }
    ]


    return (
        <>
            <Layout>
                <Breadcrumbs elements={breadcrumbsList} />
                <div className='container'>
                    <div className='wrapper'>
                        <Sidebar active='favorite' />
                        <div className='favorite'>
                            <h3 className='favorite__title'>Избранное</h3>
                            <table className='table'>
                                <thead className='table-head'>
                                    <tr className='table-head__titles titles'>
                                        <th colspan="2" className='titles__text titles__text--first'>Наименование</th>
                                        <th className='titles__text'>Цена</th>
                                        <th className='titles__text titles__text--last'>Действия</th>
                                    </tr>
                                </thead>
                                <tr className='table-middle'>
                                    <td className='table-middle__image image'>
                                        <div className='image__img'><img src={videocard} /></div>
                                    </td>
                                    <td className='table-middle__name name'>
                                        <p className='name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                                    </td>
                                    <td className='table-middle__price table-middle__price--discount price'>
                                        <p className='price__real'>29 990 ₽</p>
                                        <p className='price__discount'>23 990 ₽</p>
                                    </td>
                                    <td className='table-middle__btns btns'>
                                        <TableBtn delete={false} />
                                        <TableBtn delete={true} />
                                    </td>
                                </tr>
                                <tr className='table-middle'>
                                    <td className='table-middle__image image'>
                                        <div className='image__img'><img src={videocard} /></div>
                                    </td>
                                    <td className='table-middle__name name'>
                                        <p className='name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                                    </td>
                                    <td className='table-middle__price price'>
                                        <p className='price__real'>29 990 ₽</p>
                                        <p className='price__discount'>23 990 ₽</p>
                                    </td>
                                    <td className='table-middle__btns btns'>
                                        <TableBtn />
                                        <button className='btns__btn'>Удалить</button>
                                    </td>
                                </tr>
                                <tr className='table-middle'>
                                    <td className='table-middle__image image'>
                                        <div className='image__img'><img src={videocard} /></div>
                                    </td>
                                    <td className='table-middle__name name'>
                                        <p className='name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                                    </td>
                                    <td className='table-middle__price price'>
                                        <p className='price__real'>29 990 ₽</p>
                                        <p className='price__discount'>23 990 ₽</p>
                                    </td>
                                    <td className='table-middle__btns btns'>
                                        <TableBtn />
                                        <button className='btns__btn'>Удалить</button>
                                    </td>
                                </tr>
                                <tr className='table-middle'>
                                    <td className='table-middle__image image'>
                                        <div className='image__img'><img src={videocard} /></div>
                                    </td>
                                    <td className='table-middle__name name'>
                                        <p className='name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                                    </td>
                                    <td className='table-middle__price price'>
                                        <p className='price__real'>29 990 ₽</p>
                                        <p className='price__discount'>23 990 ₽</p>
                                    </td>
                                    <td className='table-middle__btns btns'>
                                        <TableBtn />
                                        <button className='btns__btn'>Удалить</button>
                                    </td>
                                </tr>
                                <tr className='table-middle'>
                                    <td className='table-middle__image image'>
                                        <div className='image__img'><img src={videocard} /></div>
                                    </td>
                                    <td className='table-middle__name name'>
                                        <p className='name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                                    </td>
                                    <td className='table-middle__price price'>
                                        <p className='price__real'>29 990 ₽</p>
                                        <p className='price__discount'>23 990 ₽</p>
                                    </td>
                                    <td className='table-middle__btns btns'>
                                        <TableBtn />
                                        <button className='btns__btn'>Удалить</button>
                                    </td>
                                </tr>
                                <tr className='table-middle'>
                                    <td className='table-middle__image image'>
                                        <div className='image__img'><img src={videocard} /></div>
                                    </td>
                                    <td className='table-middle__name name'>
                                        <p className='name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                                    </td>
                                    <td className='table-middle__price price'>
                                        <p className='price__real'>29 990 ₽</p>
                                        <p className='price__discount'>23 990 ₽</p>
                                    </td>
                                    <td className='table-middle__btns btns'>
                                        <TableBtn />
                                        <button className='btns__btn'>Удалить</button>
                                    </td>
                                </tr>
                                <tr className='table-middle'>
                                    <td className='table-middle__image image'>
                                        <div className='image__img'><img src={videocard} /></div>
                                    </td>
                                    <td className='table-middle__name name'>
                                        <p className='name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                                    </td>
                                    <td className='table-middle__price price'>
                                        <p className='price__real'>29 990 ₽</p>
                                        <p className='price__discount'>23 990 ₽</p>
                                    </td>
                                    <td className='table-middle__btns btns'>
                                        <TableBtn />
                                        <button className='btns__btn'>Удалить</button>
                                    </td>
                                </tr>
                                <tr className='table-middle'>
                                    <td className='table-middle__image image'>
                                        <div className='image__img'><img src={videocard} /></div>
                                    </td>
                                    <td className='table-middle__name name'>
                                        <p className='name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                                    </td>
                                    <td className='table-middle__price price'>
                                        <p className='price__real'>29 990 ₽</p>
                                        <p className='price__discount'>23 990 ₽</p>
                                    </td>
                                    <td className='table-middle__btns btns'>
                                        <TableBtn />
                                        <button className='btns__btn'>Удалить</button>
                                    </td>
                                </tr>
                                <tr className='table-middle'>
                                    <td className='table-middle__image image'>
                                        <div className='image__img'><img src={videocard} /></div>
                                    </td>
                                    <td className='table-middle__name name'>
                                        <p className='name__text'>Видеокарта MSI / ASUS gtx1650 / super / 1050ti</p>
                                    </td>
                                    <td className='table-middle__price price'>
                                        <p className='price__real'>29 990 ₽</p>
                                        <p className='price__discount'>23 990 ₽</p>
                                    </td>
                                    <td className='table-middle__btns btns'>
                                        <TableBtn />
                                        <button className='btns__btn'>Удалить</button>
                                    </td>
                                </tr>
                            </table>
                            <div className='navigation'>
                                <div className='wrapper'>
                                    <button className='navigation__btn navigation__btn--active'>1</button>
                                    <button className='navigation__btn'>2</button>
                                    <button className='navigation__btn'>3</button>
                                    <button className='navigation__btn'>4</button>
                                    <button className='navigation__btn'>5</button>
                                    <span className='navigation__dots'>...</span>
                                    <button className='navigation__btn'>22</button>
                                    <button className='navigation__next'>Дальше</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Favorite;
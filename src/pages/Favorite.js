import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../components/Pagination/Pagination.scss';





const Favorite = () => {

    const breadcrumbsList = [
        { id: 1, text: 'Каталог', link: '/' },
        { id: 2, text: 'Избранное', link: '/', last: true }
    ]

    const cards = [
        { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
        { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 5, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 6, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 7, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 8, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 9, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 10, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 11, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
        { id: 12, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
        { id: 13, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 14, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 15, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 16, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 17, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 18, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 19, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 20, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 21, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
        { id: 22, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 23, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
        { id: 24, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 25, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 26, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 27, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 28, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 29, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 30, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 31, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
        { id: 32, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
        { id: 33, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 34, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 35, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 36, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 37, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 38, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 39, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 40, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 41, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
        { id: 42, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 43, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
        { id: 44, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 45, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 46, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 47, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 48, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 49, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
        { id: 50, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
    ]

    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage, setCardsPerPage] = useState(10)

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);




    // const [itemOffset, setItemOffset] = useState(0);
    // const endOffset = itemOffset + 5;
    // // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // const currentItems = cards.slice(itemOffset, endOffset);
    // const pageCount = Math.ceil(cards.length / 5);

    // const handlePageClick = (event) => {
    //     const newOffset = (event.selected * 5) % cards.length;
    //     // console.log(
    //     //     `User requested page number ${event.selected}, which is offset ${newOffset}`
    //     // );
    //     setItemOffset(newOffset);
    // };



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
                                        <th colSpan="2" className='titles__text titles__text--first'>Наименование</th>
                                        <th className='titles__text'>Цена</th>
                                        <th className='titles__text titles__text--last'>Действия</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentCards &&
                                        currentCards.map(favorite =>
                                            <Table key={favorite.id} id={favorite.id} name={favorite.name} src={favorite.src} stock_price={favorite.stock_price} discount_price={favorite.discount_price} />
                                        )
                                    }
                                    {/* <Table currentItems={currentItems} /> */}
                                </tbody>
                            </table>
                            <Pagination cardsPerPage={cardsPerPage} totalCards={cards.length} paginate={paginate} />

                            {/* <ReactPaginate
                                itemsPerPage={5}
                                containerClassName="pagination"
                                breakLabel="..."
                                nextLabel="Дальше"
                                nextLinkClassName="pagination-next"
                                previousLabel="prev"
                                previousClassName="pagination-prev"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                marginPagesDisplayed={1}
                                renderOnZeroPageCount={null}
                                activeClassName="active"
                                breakClassName="pagination-break"
                                pageClassName="pagination-page"
                                pageLinkClassName="pagination-page__link"
                            /> */}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}



export default Favorite;
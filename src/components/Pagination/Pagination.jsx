
import ReactPaginate from 'react-paginate';
import './Pagination.scss';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Table from '../Table/Table';





const favorites = [
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
]

export function Favorites({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((favorite) => (
                    <Table key={favorite.id} id={favorite.id} name={favorite.name} src={favorite.src} stock_price={favorite.stock_price} discount_price={favorite.discount_price} />
                ))}
        </>
    );
}







function Pagination({ itemsPerPage }) {



    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = favorites.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(favorites.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % favorites.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <>
            <Favorites currentItems={currentItems} />
            <ReactPaginate
                containerClassName="pagination"
                breakLabel="..."
                nextLabel="Дальше"
                nextLinkClassName="pagination-next"
                previousLabel="prev"
                previousClassName="pagination-prev"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={22}
                marginPagesDisplayed={1}
                renderOnZeroPageCount={null}
                activeClassName="active"
                breakClassName="pagination-break"
                pageClassName="pagination-page"
                pageLinkClassName="pagination-page__link"
            />
        </>
    )
}

// ReactDOM.render(
//     <Pagination itemsPerPage={10} />,
//     document.getElementById('container')
//   );

export default Pagination;
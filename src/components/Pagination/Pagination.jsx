// import React from "react";
// import './Pagination.scss'


// const Pagination = ({cardsPerPage, totalCards, paginate}) => {

//     const pageNumbers = []

//     for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++){
//         pageNumbers.push(i)
//     }

//     // const paginate = () => {

//     // }

//     return(
//         <>
//             <ul className="pagination">
//                 {pageNumbers.map(number => (
//                     <li key={number} className='pagination-btn'>
//                         <a onClick={() => paginate(number)} className="pagination-btn__link" href="#">
//                             {number}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }


// export default Pagination;



import ReactPaginate from 'react-paginate';
import './Pagination.scss';
import React, { useEffect, useState } from 'react';





// function Pagination({ itemsPerPage }) {


//     const cards = [
//         { id: 1, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
//         { id: 2, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 3, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 4, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 5, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 6, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 7, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 8, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 9, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 10, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 11, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
//         { id: 12, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
//         { id: 13, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 14, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 15, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 16, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 17, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 18, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 19, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 20, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 21, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
//         { id: 22, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 23, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
//         { id: 24, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 25, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 26, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 27, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 28, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 29, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 30, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 31, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
//         { id: 32, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
//         { id: 33, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 34, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 35, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 36, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 37, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 38, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 39, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 40, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 41, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
//         { id: 42, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 43, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '29 990', discount_price: '23 990' },
//         { id: 44, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 45, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 46, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 47, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 48, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 49, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//         { id: 50, name: 'Видеокарта MSI / ASUS gtx1650 / super / 1050ti', src: '/static/media/favorite_videocard.a0597a498824b74ac805.png', stock_price: '23 990' },
//     ]

//     const [itemOffset, setItemOffset] = useState(0);
//     const endOffset = itemOffset + itemsPerPage;
//     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//     const currentItems = cards.slice(itemOffset, endOffset);
//     const pageCount = Math.ceil(cards.length / itemsPerPage);

//     const handlePageClick = (event) => {
//         const newOffset = (event.selected * itemsPerPage) % cards.length;
//         console.log(
//             `User requested page number ${event.selected}, which is offset ${newOffset}`
//         );
//         setItemOffset(newOffset);
//     };
//     return (
//         <>
            
//             <ReactPaginate
//                 containerClassName="pagination"
//                 breakLabel="..."
//                 nextLabel="Дальше"
//                 nextLinkClassName="pagination-next"
//                 previousLabel="prev"
//                 previousClassName="pagination-prev"
//                 onPageChange={handlePageClick}
//                 pageRangeDisplayed={5}
//                 pageCount={pageCount}
//                 marginPagesDisplayed={1}
//                 renderOnZeroPageCount={null}
//                 activeClassName="active"
//                 breakClassName="pagination-break"
//                 pageClassName="pagination-page"
//                 pageLinkClassName="pagination-page__link"
//             />
//         </>
//     )
// }

    

// export default Pagination;
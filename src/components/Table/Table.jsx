import React, { useState } from "react";
import Button from "../UI/Button/Button";

const Table = ({ currentItems, name, src, stock_price, discount_price }) => {

    const [inbasket, setInbasket] = useState(false)
    const basketIn = () => {
        if (inbasket) {
            setInbasket(false)
            return
        } return setInbasket(true)
    }
    const deleteBtn = (event) => {
        const el = event.target
        el.closest('.table-middle').remove()
    }

    return (
        <>
            {currentItems &&
                currentItems.map(item =>
                    <tr key={item.id} className='table-middle'>
                        <td className='table-middle__image image'>
                            <div className='image__img'><img src={item.src} /></div>
                        </td>
                        <td className='table-middle__name name'>
                            <p className='name__text'>{item.name}</p>
                        </td>
                        <td className='table-middle__price table-middle__price--discount price'>
                            {item.discount_price &&
                                <p className='price__real'>{item.stock_price} ₽</p>
                            }
                            <p className='price__discount'>{item.discount_price
                                ? item.discount_price
                                : item.stock_price
                            } ₽</p>
                        </td>
                        <td className='table-middle__btns btns'>
                            <Button className='btn btn--white' disabled={inbasket} onClick={basketIn}>{inbasket ? 'В корзине' : 'В корзину'}</Button>
                            <Button className='btn btn--white' onClick={deleteBtn}>Удалить</Button>
                        </td>
                    </tr>
                )
            }






            {/* <tr className='table-middle'>
                <td className='table-middle__image image'>
                    <div className='image__img'><img src={src} /></div>
                </td>
                <td className='table-middle__name name'>
                    <p className='name__text'>{name}</p>
                </td>
                <td className='table-middle__price table-middle__price--discount price'>
                    {discount_price &&
                        <p className='price__real'>{stock_price} ₽</p>
                    }
                    <p className='price__discount'>{discount_price
                        ? discount_price
                        : stock_price
                    } ₽</p>
                </td>
                <td className='table-middle__btns btns'>
                    <Button className='btn btn--white' disabled={inbasket} onClick={basketIn}>{inbasket ? 'В корзине' : 'В корзину'}</Button>
                    <Button className='btn btn--white' onClick={deleteBtn}>Удалить</Button>
                </td>
            </tr> */}
        </>

    )
}


export default Table;
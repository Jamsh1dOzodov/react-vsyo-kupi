import '../../index.scss'
import React, { useState } from 'react'



const TableBtn = (props) => {

    const [inbasket, setInbasket] = useState(true)
    const basketIn = () => {
        if (inbasket) {
            setInbasket(false)
            return
        } return setInbasket(true)
    }
    const deleteBtn = (el) => {
        
    }

    return (
        <>
            {props.delete
                ? <button type='button' onClick={deleteBtn} className='btns__btn btns__btn--delete'>Удалить</button>
                : <button type='button' onClick={basketIn} className={inbasket ? 'btns__btn btns__btn--basket' : 'btns__btn btns__btn--basket  btns__btn--inBasket'}>{inbasket ? 'В корзину' : 'В корзине'}</button>
            }
        </>
    )
}

export default TableBtn;



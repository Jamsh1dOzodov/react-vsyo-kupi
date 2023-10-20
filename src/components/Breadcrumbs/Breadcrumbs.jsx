import './Breadcrumbs.scss';
import { Link } from 'react-router-dom';


const Breadcrumbs = (props) => {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <ul className='breadcrumbs-list'>
                        <li className='breadcrumbs-list__item'><Link to='#' className='breadcrumbs-list__link'>{props.one}</Link></li>
                        <li className='breadcrumbs-list__item'><Link to='#' className='breadcrumbs-list__link'>{props.two}</Link></li>
                        <li className='breadcrumbs-list__item'><Link to='#' className='breadcrumbs-list__link'>{props.three}</Link></li>
                        <li className='breadcrumbs-list__item'><Link to='#' className='breadcrumbs-list__link breadcrumbs-list__link--light'>{props.last}</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Breadcrumbs;
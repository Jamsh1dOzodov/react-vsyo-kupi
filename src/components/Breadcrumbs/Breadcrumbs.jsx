import './Breadcrumbs.scss';
import { Link } from 'react-router-dom';


const Breadcrumbs = (props) => {
    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <ul className='breadcrumbs-list'>
                        {props.elements.map(element =>
                            <li key={element.id} className={element.last ? 'breadcrumbs-list__item breadcrumbs-list__item--light' : 'breadcrumbs-list__item'}>{element.last ? element.text : <Link to={element.link} className='breadcrumbs-list__link'>{element.text}</Link>}</li>
                        )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Breadcrumbs;
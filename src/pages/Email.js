import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import Layout from '../components/Layout/Layout';
import Sidebar from '../components/Sidebar/Sidebar';
import sprite from '../assets/sprites/sprite.svg'


const Email = () => {

    const breadcrumblist = [
        { id: 1, text: 'Каталог', link: '/' },
        { id: 2, text: 'Email рассылка', link: '/', last: true }
    ]

    return (
        <>
            <Layout>
                <Breadcrumbs elements={breadcrumblist} />
                <div className='container'>
                    <div className='wrapper'>
                        <Sidebar active='email' />
                        <div className='email'>
                            <h3 className='email__title'>E-mail рассылка</h3>
                            <p className='email__text'>Подпишитесь на последние обновления и узнавайте о новинках и специальных предложениях первыми</p>
                            <label className="email-checkbox">
                                <input className="email-checkbox__input" type="checkbox" />
                                <span className="email-checkbox__label">Подписка на рассылку</span>
                            </label>
                        </div>
                        <div className='empty'></div>
                    </div>
                </div>
            </Layout>
        </>
    )
}


export default Email;
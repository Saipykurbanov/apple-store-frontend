'use client'

import BurgerBtn from './ccomponents/BurgerBtn';
import useHeader from './hooks/useHeader';
import './css/header.scss';

export default function Header () {
    const header = useHeader()

    return (
        <header>
            <div className={`header_wrapper ${header.open ? '' : 'close'}`}>

                <div className="nav_wrapper">
                    <nav>
                        <a href="#main" className={header.link === 'main' ? 'active' : ''} onMouseDown={(e) => header.changeLink(e, 'main')}>главная</a>
                        <a href="#repair" className={header.link === 'repair' ? 'active' : ''} onMouseDown={(e) => header.changeLink(e, 'repair')}>ремонт</a>
                        <a href="#store" className={header.link === 'store' ? 'active' : ''} onMouseDown={(e) => header.changeLink(e, 'store')}>магазин</a>
                        <a href="#contacts" className={header.link === 'contscts' ? 'active' : ''} onMouseDown={(e) => header.changeLink(e, 'contacts')}>контакты</a>
                    </nav>
                </div>

                <BurgerBtn callback={header.openHeader}/>
            </div>
        </header>
    );
}
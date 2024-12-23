export default function DescNav ({header}) {

    return (
        <nav className='desc'>
            <a href="#main" className={`${header.link === 'main' ? 'active' : ''}`} onMouseDown={(e) => header.changeLink(e, 'main')}>главная</a>
            <a href="#repair" className={`${header.link === 'repair' ? 'active' : ''}`} onMouseDown={(e) => header.changeLink(e, 'repair')}>ремонт</a>
            <a href="#store" className={`${header.link === 'store' ? 'active' : ''}`} onMouseDown={(e) => header.changeLink(e, 'store')}>магазин</a>
            <a href="#contacts" className={`${header.link === 'contacts' ? 'active' : ''}`} onMouseDown={(e) => header.changeLink(e, 'contacts')}>контакты</a>
        </nav>
    )
}
import Title from '../title/Title';
import Search from './components/Search';
import StoreList from './components/StoreList';
import './css/store.scss';

export default function Store ({ list, course }) {

    return (
        <div className="store container" id='store'>
            <div className="title_container">
                <Title 
                    title={'Магазин Apple iPhone.'}
                    description={'Продаем новые айфоны по низким ценам — техника поступает напрямую со склада, без лишних наценок!'}
                />

                <Search list={list}/>
            </div>

            <StoreList list={list} course={course}/>
        </div>
    )
}
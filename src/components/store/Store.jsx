import Title from '../title/Title';
import StoreList from './components/StoreList';
import './css/store.scss';

export default function Store ({ list, course }) {

    return (
        <div className="store container" id='store'>
            <Title 
                title={'Магазин Apple iPhone.'}
                description={'Продаем новые айфоны по низким ценам — техника поступает напрямую со склада, без лишних наценок!'}
            />

            <StoreList list={list} course={course}/>
        </div>
    )
}
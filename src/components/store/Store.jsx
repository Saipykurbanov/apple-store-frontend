import Title from '../title/Title';
import StoreList from './components/StoreList';
import './css/store.scss';

export default function Store () {
    return (
        <div className="store container" id='store'>
            <Title 
                mode={''}
                title={'Магазин Apple iPhone.'}
                description={'Продаем новые айфоны по низким ценам — техника поступает напрямую со склада, без лишних наценок!'}
            />

            <StoreList />
        </div>
    )
}
import ScrollDown from '../scroll_down/ScrollDown';
import ContactUs from './components/ContactUs';
import './css/main.scss';

export default function Main () {

    return (
        <div className='main' id='main'>
            <div className="content">
                <div className="logo"><span></span>iFix<span> Store.</span></div>

                <div className="description">
                    <h1>
                        Сервис-маркет <br></br>
                         техники в <br></br> 
                        г. Симферополь.
                    </h1>

                    <p className='description_item'>Ремонт любой техники — от смартфонов до бытовой электроники.</p>
                    <p className='description_item'>Мы также специализируемся на продаже мобильных телефонов Apple, предлагая актуальные модели по выгодным ценам.</p>

                    <div className="adress">
                        <img src="./icons/map.svg" alt="" />
                        <p>Респ. Крым, г. Симферополь, ул. Козлова 45а</p>
                    </div>

                    <ContactUs />
                    
                    <ScrollDown />
                </div>

            </div>
        </div>
    );
}
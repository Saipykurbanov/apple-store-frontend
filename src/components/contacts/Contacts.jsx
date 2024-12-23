'use client'

import Button from '../button/Button';
import Title from '../title/Title';
import './css/contacts.scss';


export default function Contacts () {

    return (
        <div className="contacts container" id='contacts'>
            <div className="contact_content">
                <Title 
                    title={'Контакты.'}
                    description={'Если возникли вопросы по ремонту или покупке техники можете связаться с нами любым удобным для вас способом.'}
                />

                <div className="adress">Респ. Крым, г. Симферополь, ул. Козлова 45а</div>

                <div className="social_block">
                    <a href="">
                        <img src="/icons/vk.svg" alt="" />
                        <p>@vaitov_ahtem</p>
                    </a>
                    <a href="">
                        <img src="/icons/telegram_blue.svg" alt="" />
                        <p>@vaitov_ahtem</p>
                    </a>
                    <a href="">
                        <img src="/icons/phone_blue.svg" alt="" />
                        <p>+7(978)-136-87-90</p>
                    </a>
                </div>

                <Button>Свяжитесь с нами</Button>
            </div>

            <div className="map_container">
            </div>
        </div>
    );
}
'use client';
import Button from "@/components/button/Button";
import Title from "@/components/title/Title";

export default function ContactContent () {

    return (
        <div className="contact_content">
            <Title 
                title={'Контакты.'}
                description={'Если возникли вопросы по ремонту или покупке техники можете связаться с нами любым удобным для вас способом.'}
            />

            <div className="adress">Респ. Крым, г. Симферополь, ул. Козлова 45а</div>

            <div className="social_block">
                <a href="https://vk.com/id879685221?from=search"  target="_blank" rel="noopener noreferrer">
                    <img src="/icons/vk.svg" alt="" />
                    <p>@vaitov_ahtem</p>
                </a>
                <a href="https://t.me/Vaitov_06"  target="_blank" rel="noopener noreferrer">
                    <img src="/icons/telegram_blue.svg" alt="" />
                    <p>@vaitov_ahtem</p>
                </a>
                <a href="tel:+79781368790">
                    <img src="/icons/phone_blue.svg" alt="" />
                    <p>+7(978)-136-87-90</p>
                </a>
            </div>
        </div>
    )
}
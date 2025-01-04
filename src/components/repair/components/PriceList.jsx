'use client';
import React, { useRef } from 'react';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import Button from '@/components/button/Button';
import Store from '@/utils/Store';
import Api from '@/utils/Api';

const PriceList = ({services}) => {

    const splideRef = useRef(null);

    const handlePrev = () => {
      if (splideRef.current) {
        splideRef.current.splide.go('<'); // Перейти к предыдущему слайду
      }
    };
  
    const handleNext = () => {
      if (splideRef.current) {
        splideRef.current.splide.go('>'); // Перейти к следующему слайду
      }
    };

    const openModal = (el) => {
        document.body.style.overflow = 'hidden'
        Store.setListener('open_repair_modal', el)
    }

    return (
        <div className='price_list'>
            <h3>Прайс лист</h3>

            <Splide
                ref={splideRef}
                options={{
                    rewind: false,
                    padding: 'auto',
                    autoWidth: true,
                    width : '100%',
                    gap: '30px',
                    pagination: false,
                    drag: 'free',
                    arrows: false,
                }}
                
            >   
            {services.length ? 
                services.map((el) => (
                    <SplideSlide key={el.servicesid} onClick={() => openModal(el)}>
                        <div className='service_image'>
                            <img src={`${Api.url}images/service/${el.image}`} alt="" />
                        </div>
                        
                        <h4>{el.title}</h4>

                        <div className="description">
                            {el.description}
                        </div>

                        <div className="price">
                            Цена: <span>от {el.price} руб.</span>
                        </div>
                    </SplideSlide>
                ))
            :<></>}
            </Splide>

            <div className="custom_arrows">
                <button className="custom_arrow prev" onClick={handlePrev}>
                    <svg width="14.006104" height="19.982910" viewBox="0 0 14.0061 19.9829" fill="none" >
                        <defs/>
                        <path id="Vector 1" d="M5.12 8.49L12.5 8.49C13.34 8.49 14 9.15 14 9.99C14 10.83 13.34 11.49 12.5 11.49L5.12 11.49L11.05 17.41C11.64 18.01 11.64 18.94 11.05 19.53C10.45 20.13 9.52 20.13 8.93 19.53L0.44 11.05C-0.15 10.45 -0.15 9.52 0.44 8.93L8.93 0.44C9.52 -0.15 10.45 -0.15 11.05 0.44C11.64 1.03 11.64 1.97 11.05 2.56L5.12 8.49Z" fill="#000000" fillOpacity="1.000000" fillRule="evenodd"/>
                    </svg>
                </button>

                <button className="custom_arrow next" onClick={handleNext}>
                    <svg width="14.006104" height="19.982910" viewBox="0 0 14.0061 19.9829" fill="none">
                        <defs/>
                        <path id="Vector 1" d="M8.87 8.49L1.5 8.49C0.65 8.49 0 9.15 0 9.99C0 10.83 0.65 11.49 1.5 11.49L8.87 11.49L2.95 17.41C2.36 18.01 2.36 18.94 2.95 19.53C3.54 20.13 4.48 20.13 5.07 19.53L13.56 11.05C14.15 10.45 14.15 9.52 13.56 8.93L5.07 0.44C4.48 -0.15 3.54 -0.15 2.95 0.44C2.36 1.03 2.36 1.97 2.95 2.56L8.87 8.49Z" fill="#000000" fillOpacity="1.000000" fillRule="evenodd"/>
                    </svg>
                </button>
            </div>
            
            <div className="button_flex">
                <Button callback={() => openModal()}>Узнать подробности</Button>
                <div className="slogan">Нашли свою проблему? Тогда свяжитесь с нами!</div>
            </div>
            
        </div>
    );
};

export default PriceList;
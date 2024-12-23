import React from 'react';
import './css/repair.scss';
import Title from '../title/Title';
import PriceList from './components/PriceList';
import Advantages from './components/Advantages';

export default function Repair () {
    return (
        <div className='repair' id='repair'>
            <Title 
                mode={'white'}
                title={'Ремонт техники.'}
                description={'Работаем с техникой любого производителя! Сделаем всё в короткий срок, оплатой по факту и гарантией до 1 года'}
            />

            <PriceList />

            <Advantages />
        </div>
    );
};
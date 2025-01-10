'use client'

import React, { useState } from 'react';
import Item from './Item';
import Store from '@/utils/Store';
import './css/notification.scss';


const Notification = () => {

    const [notifications, setNotifications] = useState([])

    Store.useListener('notice', (data) => {
        let id = crypto.randomUUID()
        data.id = id
        setNotifications(prev => [...prev, data])
        setTimeout(() => {
            setNotifications(prev => prev.filter(el => el.id !== id))
        }, 4000)
    })

    return (
        <div className='notification'>
            {notifications.length ? 
                notifications.map((el) => (
                    <Item key={el.id} el={el}/>
                ))
            :<></>}
        </div>
    );
};

export default Notification;
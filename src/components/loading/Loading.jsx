'use client'
import React, { useEffect, useState } from 'react';

const Loading = () => {

    const [load, setLoad] = useState(true)

    useEffect(() => {

        setTimeout(() => {
            setLoad(false)
            document.body.style.overflow = 'visible'
        }, 2000)

    }, [])

    return (
        <div className={`loading ${load ? 'open':'close'}`}>
             <div className="loader">
                <div className="loader_item">
                    <img src="/icons/load/Slice 1.svg" alt="" className="fade" style={{ animationDelay: '0s' }} />
                    <img src="/icons/load/Slice 2.svg" alt="" className="fade" style={{ animationDelay: '1s' }} />
                    <img src="/icons/load/Slice 3.svg" alt="" className="fade" style={{ animationDelay: '2s' }} />
                    <img src="/icons/load/Slice 4.svg" alt="" className="fade" style={{ animationDelay: '3s' }} />
                    <img src="/icons/load/Slice 5.svg" alt="" className="fade" style={{ animationDelay: '4s' }} />
                </div>
                <div className="loader_item">
                    <img src="/icons/load/Slice 6.svg" alt="" className="fade" style={{ animationDelay: '0.5s' }} />
                    <img src="/icons/load/Slice 7.svg" alt="" className="fade" style={{ animationDelay: '1.5s' }} />
                    <img src="/icons/load/Slice 8.svg" alt="" className="fade" style={{ animationDelay: '2.5s' }} />
                    <img src="/icons/load/Slice 9.svg" alt="" className="fade" style={{ animationDelay: '3.5s' }} />
                    <img src="/icons/load/Slice 10.svg" alt="" className="fade" style={{ animationDelay: '4.5s' }} />
                </div>
            </div>
            <h2>Ремонтируем всё.</h2>
        </div>
        
    );
};

export default Loading;
'use client'
import Button from "@/components/button/Button";
import { useCallback, useEffect, useRef, useState } from "react";

export default function RepairInput ({ label, value, callback, services,  }) {
    const [isOpen, setIsOpen] = useState(false)
    const listWrapper = useRef(null)
    const list = useRef(null)

    const openList = useCallback((e) => {
        e.preventDefault()
        const h = list.current.offsetHeight

        if(listWrapper.current.offsetHeight <= 0) {
            listWrapper.current.style.height = `${h}px`
            setIsOpen(true)
            return
        } else {
            listWrapper.current.style.height = '0px'
            setIsOpen(false)
            return
        }
    }, [setIsOpen, isOpen, list.current, listWrapper.current])

    useEffect(() => {
        if(isOpen) {
            const close = (e) => openList(e)
            window.addEventListener('click', close)

            return () => {
                window.removeEventListener('click', close)
            }
        }
    }, [isOpen])

    return (
        <div className="repair_input">
            <label htmlFor="">{label}</label>

            <div className={`input_wrapper`} onClick={(e) => openList(e)}  >
                <div className="service_title" mode={'round whiteBack'}>{value}</div>

                <Button type='button' callback={(e) => openList(e)} mode={'round whiteBack'}><img src="/icons/arrow_down.svg" alt="" /></Button>

                <div className={`list_wrapper ${!isOpen ? 'close' : ''}`} ref={listWrapper}>
                    <div className={`list open`} ref={list}>
                        {services?.length ? 
                            services.map((el, i) => (
                                <p key={i} onClick={() => callback(el.title, el)}>{el.title}</p>
                            ))
                        : 
                        <></>}
                    </div>
                </div>
            </div>

        </div>
    )
}
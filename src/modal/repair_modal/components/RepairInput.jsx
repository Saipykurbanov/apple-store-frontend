import Button from "@/components/button/Button";
import { useRef, useState } from "react";

export default function RepairInput ({ label, value, callback }) {
    const [isOpen, setIsOpen] = useState(false)
    const listWrapper = useRef(null)
    const list = useRef(null)

    const openList = (e) => {
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
    }

    return (
        <div className="repair_input">
            <label htmlFor="">{label}</label>

            <div className={`input_wrapper`}>
                <input type="text" value={value} onChange={callback}/>  

                <Button callback={openList} mode={'round whiteBack'}><img src="/icons/arrow_down.svg" alt="" /></Button>

                <div className={`list_wrapper ${!isOpen ? 'close' : ''}`} ref={listWrapper}>
                    <div className={`list ${isOpen ? 'open' : ''}`} ref={list}>
                        <p>Замена дисплея</p>
                        <p>Замена аккумулятора</p>
                        <p>Замена дисплея</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
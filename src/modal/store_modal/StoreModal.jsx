'use client'
import { useState } from "react"
import Store from "@/utils/Store";
import ModalTitle from "@/components/modal_title/ModalTitle";
import ModalInput from "@/components/modal_input/ModalInput";
import ModalFooter from "@/components/modal_footer/ModalFooter";
import './css/store_modal.scss';
import ModalCloseBtn from "@/components/modal_close_btn/ModalCloseBtn";

export default function StoreModal () {

    const [isOpen, setIsOpen] = useState(false)

    Store.useListener('open_store_modal', setIsOpen)

    const closeModal = () => {
        document.body.style.overflow = 'visible'
        setIsOpen(false)
    }

    return (
        <div className={`store_modal_wrapper ${isOpen ? 'open' : ''}`} onClick={closeModal}>
            <div className="store_modal"onClick={(e) => e.stopPropagation()}>
                <ModalCloseBtn mode={'black'} callback={closeModal}/>
                
                <div className="store_flex">
                    <div className="store_flex_item left">
                        <ModalTitle mode={'black'}>Оставьте заявку и мы вам перезвоним!</ModalTitle>
                        
                        <div className="store_modal_body">
                            <ModalInput 
                                label={'Ваше имя'}
                                mode={'black'}
                            />

                            <ModalInput 
                                label={'Номер телефона'}
                                mode={'black'}
                            />

                            <ModalInput 
                                label={'Адрес доставки'}
                                mode={'black'}
                            />
                        </div>
                    </div>

                    <div className="store_flex_item preview">
                        <div className="preview_image">
                            <img className="" src="/images/iphoneblue.svg" alt="" />
                        </div>

                        <div className="characters">
                            <div className="character_item">
                                <h4>модель:</h4>
                                <p>iPhone 16</p>
                            </div>
                            <div className="character_item">
                                <h4>объём памяти:</h4>
                                <p>4/256 гб</p>
                            </div>
                            <div className="character_item">
                                <h4>цвет:</h4>
                                <p><span className={`blue`}/>синий</p>
                            </div>
                            <div className="character_item">
                                <h4>цена:</h4>
                                <p>70 000 руб.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalFooter mode={'black'}/>
            </div>
        </div>
    )
}
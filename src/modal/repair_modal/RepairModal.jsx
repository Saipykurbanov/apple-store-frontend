'use client';
import { useState } from 'react';
import ModalTitle from '@/components/modal_title/ModalTitle';
import ModalFooter from '@/components/modal_footer/ModalFooter';
import ModalInput from '@/components/modal_input/ModalInput';
import Store from '@/utils/Store';
import './css/repair_modal.scss';
import RepairInput from './components/RepairInput';

export default function RepairModal () {

    const [isOpen, setIsOpen] = useState(false)

    Store.useListener('open_repair_modal', setIsOpen)

    const closeModal = () => {
        document.body.style.overflow = 'visible'
        setIsOpen(false)
    }

    return (
        <div className={`repair_modal_wrapper ${isOpen ? 'open' : ''}`} onClick={closeModal}>
            <form className="repair_modal" onClick={(e) => e.stopPropagation()}>
                <ModalTitle mode={'white center'}>Оставьте заявку и мы вам перезвоним!</ModalTitle>

                <div className="repair_modal_body">
                    <ModalInput 
                        label={'Ваше имя'}
                        mode={'white'}
                    />

                    <RepairInput 
                        label={'Какая услуга вам нужна?'}
                    />

                    <ModalInput 
                        label={'Номер телефона'}
                        mode={'white'}
                    />
                </div>

                <ModalFooter mode={'white'}/>
            </form>
        </div>
    )
}
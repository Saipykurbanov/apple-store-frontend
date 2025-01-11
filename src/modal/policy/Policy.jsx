'use client'

import { useState } from "react";
import ModalCloseBtn from "@/components/modal_close_btn/ModalCloseBtn";
import ModalTitle from "@/components/modal_title/ModalTitle";
import TabsContent from "./components/TabsContent";
import Tabs from "./components/Tabs";
import './css/policy.scss';
import Store from "@/utils/Store";

export default function Policy () {

    const [isOpen, setIsOpen] = useState(false)
    const [isBlock, setIsBlock] = useState(false)
    const [tab, setTab] = useState('policy')

    Store.useListener('open_policy', (data) => {
        setIsOpen(true)
        setTab(data[0])
        setIsBlock(data[1])
    })

    const closeModal = (e) => {
        e.stopPropagation()
        if(!isBlock) {
            document.body.style.overflow = 'visible'
        }
        setIsBlock(false)
        setIsOpen(false)
    }

    return (
        <div className={`policy_modal_wrapper ${isOpen ? 'open' : ''}`} onMouseDown={(e) => closeModal(e)}>
            <div className="policy_modal" onMouseDown={(e) => e.stopPropagation()}>
                <ModalCloseBtn mode={'black'} callback={(e) => closeModal(e)}/>

                <ModalTitle mode={'black full'}>Условия и политика</ModalTitle>

                <Tabs tab={tab} setTab={setTab}/>

                <TabsContent tab={tab}/>
            </div>
        </div>
    )
}
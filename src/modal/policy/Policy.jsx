'use client'

import { useEffect, useRef, useState } from "react";
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
    const modal = useRef(null)
    const timer = useRef(null)

    Store.useListener('open_policy', (data) => {
        setIsOpen(true)
        setTab(data[0])
        setIsBlock(data[1])
        if (modal.current) {
            modal.current.scrollTop = 0;
        }
    })

    const closeModal = (e) => {
        e.stopPropagation()
        if(!isBlock) {
            document.body.style.overflow = 'visible'
        }
        modal.current.className = 'policy_modal_wrapper close'
        setIsBlock(false)
        timer.current = setTimeout(() => {
            setIsOpen(false)
        }, [700])
    }

    useEffect(() => {
        return () => {
            if(timer.current) {
                clearTimeout(timer.current)
            }
        }
    }, [])

    if(!isOpen) return null

    return (
        <div className={`policy_modal_wrapper open`} ref={modal} onMouseDown={(e) => closeModal(e)}>
            <div className="policy_modal" onMouseDown={(e) => e.stopPropagation()}>
                <ModalCloseBtn mode={'black'} callback={(e) => closeModal(e)}/>

                <ModalTitle mode={'black full'}>Условия и политика</ModalTitle>

                <Tabs tab={tab} setTab={setTab}/>

                <TabsContent tab={tab}/>
            </div>
        </div>
    )
}
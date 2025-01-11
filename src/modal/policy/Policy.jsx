'use client'

import ModalCloseBtn from "@/components/modal_close_btn/ModalCloseBtn";
import UserAgreement from "./tabs/UserAgreement";
import Delivery from "./tabs/Delivery";
import ModalTitle from "@/components/modal_title/ModalTitle";
import Main from "./tabs/Main";
import './css/policy.scss';
import { useState } from "react";
import TabsContent from "./components/TabsContent";
import Tabs from "./components/Tabs";

export default function Policy () {
    const [tab, setTab] = useState('policy')

    return (
        <div className="policy_modal_wrapper open">
            <div className="policy_modal">
                <ModalCloseBtn mode={'black'} callback={''}/>

                <ModalTitle mode={'black full'}>Условия и политика</ModalTitle>

                <Tabs tab={tab} setTab={setTab}/>

                <TabsContent tab={tab}/>
            </div>
        </div>
    )
}
'use client'
import Store from "@/utils/Store";
import StoreItem from "./StoreItem";

export default function StoreList () {

    const openModal = () => {
        document.body.style.overflow = 'hidden'
        Store.setListener('open_store_modal', true)
    }

    return (
        <div className="store_list">
            <StoreItem openModal={openModal}/>
            <StoreItem openModal={openModal}/>
            <StoreItem openModal={openModal}/>
        </div>
    )
}
'use client'
import Store from "@/utils/Store";
import StoreItem from "./StoreItem";

export default function StoreList ({list, course}) {

    const openModal = () => {
        document.body.style.overflow = 'hidden'
        Store.setListener('open_store_modal', true)
    }

    return (
        <div className="store_list">
            {list?.length ? 
                list.map((el) => (
                    <StoreItem course={course} key={el.productid} el={el} openModal={openModal}/>
                ))
            :<></>}
        </div>
    )
}
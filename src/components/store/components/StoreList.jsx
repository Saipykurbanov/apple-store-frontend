'use client'
import Store from "@/utils/Store";
import StoreItem from "./StoreItem";

export default function StoreList ({list, course}) {

    const openModal = (el) => {
        document.body.style.overflow = 'hidden'
        Store.setListener('open_store_modal', el)
    }

    return (
        <div className="store_list">
            {list?.length ? 
                list.map((el) => (
                    <StoreItem course={course} key={el.productid} el={el} openModal={() => openModal(el)}/>
                ))
            :<></>}
        </div>
    )
}
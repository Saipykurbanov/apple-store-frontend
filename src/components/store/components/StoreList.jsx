'use client'

import StoreItem from "./StoreItem";
import Pagination from "./Pagination";
import useEnter from "@/hooks/useEnter";
import useStoreList from "../hooks/useStoreList";

export default function StoreList ({list, course}) {

    const storeList = useStoreList(list)

    const [blockRef] = useEnter('store')

    return (
        <>
            {list?.length ? 
            <>
                <div className="store_list" ref={blockRef}>
                    {storeList.newList?.map((page, i)=> (
                        <div 
                            className={`pagination_page ${storeList.pageNum === i ? 'active' : storeList.pageNum > i ? 'prev' : 'next'}`} 
                            key={i}
                            style={{transform: `translateX(-${storeList.pageNum * 100}%)`}}
                        >
                            {page.map((el) => (
                                <StoreItem course={course} key={el.productid} el={el} openModal={() => storeList.openModal(el)}/>
                            ))}
                        </div>
                    ))}
                </div>

                <Pagination 
                    scroll={storeList.paginationScroll} 
                    track={storeList.track} 
                    container={storeList.container} 
                    pageNum={storeList.pageNum}
                    nextPage={storeList.nextPage} 
                    prevPage={storeList.prevPage} 
                    maxPage={storeList.newList?.length}
                />
            </>
            :<div className="no_products" ref={blockRef}>Товаров нет.</div>}
        </>
    )
}
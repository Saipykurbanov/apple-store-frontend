'use client'

import StoreItem from "./StoreItem";
import Pagination from "./Pagination";
import useEnter from "@/hooks/useEnter";
import useStoreList from "../hooks/useStoreList";

export default function StoreList ({list, course}) {
    
    const [blockRef] = useEnter('store')
    
    const storeList = useStoreList(list, blockRef)

    return (
        <>
            {list?.length ? 
            <>
                <div className="store_list" ref={blockRef}>
                    <div 
                        className="store_track" 
                        style={{transform: `translateX(-${storeList.scroll}px)`}}
                    >
                        {storeList.newList?.map((page, i)=> (
                            <div 
                                className={`pagination_page ${storeList.pageNum === i ? 'active' : storeList.pageNum > i ? 'prev' : 'next'}`} 
                                key={i}
                            
                            >
                                {page.map((el) => (
                                    <StoreItem course={course} key={el.productid} el={el} openModal={() => storeList.openModal(el)}/>
                                ))}
                            </div>
                        ))}
                    </div>
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
'use client'

import StoreItem from "./StoreItem";
import Pagination from "./Pagination";
import useStoreList from "../hooks/useStoreList";

export default function StoreList ({list, course}) {
    
    const storeList = useStoreList(list, 'store')

    return (
        <>
            {storeList.newList?.length ? 
            <>
                <div className="store_list" ref={storeList.blockRef}>
                    <div 
                        ref={storeList.storeRef}
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
                
                {storeList.newList?.length <= 1 ? 
                  <></>  
                :
                    <Pagination 
                        scroll={storeList.paginationScroll} 
                        track={storeList.track} 
                        container={storeList.container} 
                        pageNum={storeList.pageNum}
                        nextPage={storeList.nextPage} 
                        prevPage={storeList.prevPage} 
                        maxPage={storeList.newList?.length}
                    /> 
                }
            </>
            :<div className="no_products">Товаров нет.</div>}
        </>
    )
}
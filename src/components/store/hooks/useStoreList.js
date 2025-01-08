import Store from "@/utils/Store";
import { useEffect, useRef, useState } from "react";

export default function useStoreList (list, blockRef) {
    const [pageNum, setPageNum] = useState(0)
    const [paginationScroll, setPaginationScroll] = useState(0)
    const [newList, setNewList] = useState([])
    const [scroll, setScroll] = useState(0)
    const container = useRef(null)
    const track = useRef(null)
    const storeRef = useRef(null)

    

    useEffect(() => {
        const handleTouchMove = (e) => {
            const touch = e.touches[0]; 
            const deltaX = touch.clientX - (blockRef.current.startX || touch.clientX);
            blockRef.current.startX = touch.clientX;
        
            setScroll((prev) => prev - deltaX);
        };
    
        const handleTouchStart = (e) => {
            blockRef.current.startX = e.touches[0].clientX;
        };

        const container = blockRef.current;
        container.addEventListener("touchstart", handleTouchStart);
        container.addEventListener("touchmove", handleTouchMove);

        return () => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };
    }, [])

    useEffect(() => {
        if(window.innerWidth > 992) {
            setNewList(splitIntoChunks(list, 4))
        } else if(window.innerWidth > 768) {
            setNewList(splitIntoChunks(list, 2))
        } else {
            setNewList(splitIntoChunks(list, 1))
        }

    }, [])


    const nextPage = () => {
        setPageNum(prev => {
            if(prev >= newList.length - 1) {
                return newList.length - 1
            } else {
                const num = prev + 1
                const containerWidth = container.current.offsetWidth
                const trackWidth = track.current.offsetWidth

                setScroll(prev => prev + (blockRef.current.offsetWidth + 30))

                if(trackWidth > containerWidth) {
                    let distance = elementDistance(num)

                    if(distance > (containerWidth / 2)) {
                        let scrollLimit = trackWidth - containerWidth
                        let scroll = distance - (containerWidth / 2)
    
                        setPaginationScroll(prev => prev + scroll > scrollLimit ? scrollLimit : prev + scroll)
                    }
                }

                return num
            }
        })
    }

    const prevPage = () => {
        setPageNum(prev =>{
            if(prev <= 0) {
                setScroll(0)
                return prev
            } else {
                const num = prev - 1
                const containerWidth = container.current.offsetWidth
                const trackWidth = track.current.offsetWidth

                setScroll(prev => prev -(blockRef.current.offsetWidth + 30))

                if(trackWidth > containerWidth) {
                    let distance = elementDistance(num)

                    if(distance < (containerWidth / 2)) {
                        let scroll = (containerWidth / 2) - distance
    
                        setPaginationScroll(prev => prev - scroll <= 0 ? 0 : prev - scroll)
                    }
                }

                return num
            }
        })
    }

    const openModal = (el) => {
        document.body.style.overflow = 'hidden'
        Store.setListener('open_store_modal', el)
    }

    const elementDistance = (num) => {
        let allSlides = Array.from(document.getElementsByClassName('pagination_page_item'));
        return (allSlides[num].offsetLeft + (allSlides[num].offsetWidth / 2)) - paginationScroll
    }

    function splitIntoChunks(array, size) {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

    return {
        container,
        track,
        newList,
        pageNum,
        paginationScroll,
        storeRef,
        scroll,
        openModal,
        prevPage,
        nextPage,
    }
}
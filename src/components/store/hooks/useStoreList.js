import Store from "@/utils/Store";
import { useRef, useState } from "react";

export default function useStoreList (list) {
    const [pageNum, setPageNum] = useState(0)
    const [paginationScroll, setPaginationScroll] = useState(0)
    const container = useRef(null)
    const track = useRef(null)

    function splitIntoChunks(array, size) {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

    const newList = splitIntoChunks(list, 4) 

    const nextPage = () => {
        setPageNum(prev => {
            if(prev >= newList.length - 1) {
                return newList.length - 1
            } else {
                const num = prev + 1
                const containerWidth = container.current.offsetWidth
                const trackWidth = track.current.offsetWidth

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
                return prev
            } else {
                const num = prev - 1
                const containerWidth = container.current.offsetWidth
                const trackWidth = track.current.offsetWidth

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

    return {
        container,
        track,
        newList,
        pageNum,
        paginationScroll,
        openModal,
        prevPage,
        nextPage,
    }
}
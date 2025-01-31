import Store from "@/utils/Store";
import { useEffect, useRef, useState } from "react";

export default function useStoreList (list, key) {
    const [blockName, setBlockName] = useState('')
    const [pageNum, setPageNum] = useState(0)
    const [loading, setLoading] = useState(false)
    const [paginationScroll, setPaginationScroll] = useState(0)
    const [newList, setNewList] = useState([])
    const [scroll, setScroll] = useState(0)
    const container = useRef(null)
    const track = useRef(null)
    const storeRef = useRef(null)
    const blockRef = useRef(null)

    useEffect(() => {
        const calculateChunks = () => {
            if (window.innerWidth > 992) {
                return splitIntoChunks(list, 4);
            } else if (window.innerWidth > 768) {
                return splitIntoChunks(list, 2);
            } else {
                return splitIntoChunks(list, 1);
            }
        };

        setNewList(calculateChunks());
    }, [list])

    Store.useListener(`link_block${key}`, (data) => {
        setBlockName(data)
    })

    const handleIntersect = ([entry]) => {
        if (entry.isIntersecting) {
            Store.setListener('change_link', key);
            if (blockName === key) {
                Store.setListener('link_block', false);
            }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect, {
            root: null,
            threshold: 0.5,
        });

        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

        return () => {
            if (blockRef.current) {
                observer.unobserve(blockRef.current);
            }
        };
    }, [blockName, newList]);

    Store.useListener('search', (data) => {
        if(window.innerWidth > 992) {
            setNewList(splitIntoChunks(data, 4))
        } else if(window.innerWidth > 768) {
            setNewList(splitIntoChunks(data, 2))
        } else {
            setNewList(splitIntoChunks(data, 1))
        }

        setScroll(0)
        setPageNum(0)
    })
    
    useEffect(() => {
        if(storeRef.current) {
            const handleTouchMove = (e) => {
                const touch = e.touches[0];
                const deltaX = touch.clientX - (blockRef.current.startX || touch.clientX);
                blockRef.current.startX = touch.clientX;
            
                // Ускорение скроллинга
                const speedFactor = 2; // Чем больше значение, тем быстрее скроллинг
                const adjustedDeltaX = deltaX * speedFactor;
            
                setScroll((prev) => {
                    const scroll = prev - adjustedDeltaX;
            
                    if (scroll < 0) {
                        return 0;
                    }
            
                    const limit = ((storeRef.current.offsetWidth * newList.length) + ((newList.length - 1) * 30)) - blockRef.current.offsetWidth;
            
                    if (scroll > limit) {
                        return limit;
                    }
            
                    const positionMax = pageNum * (blockRef.current.offsetWidth + 30);
                    const positionMin = (pageNum - 1) * (blockRef.current.offsetWidth + 30);
            
                    if (adjustedDeltaX > 0) { // скролл влево
                        if (scroll < (positionMin + 30)) {
                            prevPage(true);
                        }
                    } else if (adjustedDeltaX < 0) { // скролл вправо
                        if (scroll > (positionMax + (blockRef.current.offsetWidth - 30))) {
                            nextPage(true);
                        }
                    }
            
                    return scroll;
                });
            };
    
        const handleTouchStart = (e) => {
            blockRef.current.startX = e.touches[0].clientX;
            
        };

        const container = blockRef.current;
        container.addEventListener("touchstart", handleTouchStart, {passive: false});
        container.addEventListener("touchmove", handleTouchMove, {passive: false});

        return () => {
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchmove", handleTouchMove);
        };

    }
    }, [newList, pageNum])


    const nextPage = (block) => {
        setPageNum(prev => {
            if(prev >= newList.length - 1) {
                if(!block) {
                    setScroll((newList.length - 1) * (blockRef.current.offsetWidth + 30))
                }

                return newList.length - 1
            } else {
                const num = prev + 1
                const containerWidth = container.current.offsetWidth
                const trackWidth = track.current.offsetWidth

                if(!block) {
                    setScroll(num * (blockRef.current.offsetWidth + 30))
                }

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

    const prevPage = (block) => {
        setPageNum(prev =>{
            if(prev <= 0) {
                if(!block) {
                    setScroll(0)
                }
                return prev
            } else {
                const num = prev - 1
                const containerWidth = container.current.offsetWidth
                const trackWidth = track.current.offsetWidth

                if(!block) {
                    setScroll(num * (blockRef.current.offsetWidth + 30))
                }

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
        if (!Array.isArray(array) || array.length === 0) return []

        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    }

    return {
        blockRef,
        loading,
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
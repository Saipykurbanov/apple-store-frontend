import Store from "@/utils/Store"
import { useCallback, useEffect, useRef, useState } from "react"

export default function useHeader () {
    const [link, setLink] = useState('main')
    const [open, setOpen] = useState(true)
    const [last, setLast] = useState(null)
    const [block, setBlock] = useState(false)
    const isBlocked = useRef(false)
 
    const openHeader = () => {
        isBlocked.current = true
        setOpen(prev => prev ? false : true)
    }

    const changeLink = (e, name) => {
        e.stopPropagation()
        if(name === link) {
            return null
        }
        setLink(name)
        setBlock(true)
        Store.setListener(`link_block${name}`, name)
    }

    Store.useListener('change_link', (data) => {
        if(!block) {
            setLink(data)
        }
    })

    Store.useListener('link_block', (data) => {
        setBlock(false)
    })

    const onScrollFunction = useCallback((e) => {
    
        if (!isBlocked.current) {
          if (window.scrollY > 0 && window.scrollY > last) {
            setOpen(false);
          } else if (window.scrollY <= 0) {
            setOpen(true);
            setLink('main');
          }
        } else if (window.scrollY <= 0) {
          isBlocked.current = false;
        }
    
        setLast(window.scrollY);
      }, [last, setBlock, setOpen, setLink]); // Зависимости
    

    useEffect(() => {
        if(window.innerWidth > 768) {
            window.addEventListener('scroll', onScrollFunction, {passive: true})
        }

        return () => {
            window.removeEventListener('scroll', onScrollFunction);
        };
    }, [last])


    return {
        link,
        open,
        openHeader,
        changeLink
    }
}
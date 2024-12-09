import { useEffect, useRef, useState } from "react"

export default function useHeader () {
    const [link, setLink] = useState('main')
    const [open, setOpen] = useState(true)
    const isBlocked = useRef(false)
 
    const openHeader = () => {
        isBlocked.current = true
        setOpen(prev => prev ? false : true)
    }

    const changeLink = (e, name) => {
        e.stopPropagation()
        setLink(name)
    }

    const onScrollFunction = (e) => {
        console.log(e.deltaY)
        if(!isBlocked.current) {
            if(window.scrollY > 100) {
                setOpen(false)
            } else if(e.deltaY < 0) {
                setOpen(true)
            }

            return
        } else {
            if (window.scrollY < 100) {
                isBlocked.current = false
            }
        }
        return
    }

    useEffect(() => {
        if(window.innerWidth > 768) {
            window.addEventListener('wheel', onScrollFunction)
          }
    }, [])


    return {
        link,
        open,
        openHeader,
        changeLink
    }
}
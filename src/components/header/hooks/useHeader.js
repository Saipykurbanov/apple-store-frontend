import { useEffect, useRef, useState } from "react"

export default function useHeader () {
    const [link, setLink] = useState('main')
    const [open, setOpen] = useState(true)
    const [last, setLast] = useState(null)
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

        if (!isBlocked.current) {
            if(window.scrollY > 0 && window.scrollY > last) {
                setOpen(false)
            } else if (window.scrollY <= 0) {
                setOpen(true)
                setLink('main')
            }
        } else if(window.scrollY <= 0) {
            isBlocked.current = false
        }

        setLast(prev => prev = window.scrollY)
        return
    }

    useEffect(() => {
        if(window.innerWidth > 768) {
            window.addEventListener('scroll', onScrollFunction)
          }
    }, [last])


    return {
        link,
        open,
        openHeader,
        changeLink
    }
}
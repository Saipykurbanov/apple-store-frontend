import { useEffect, useState } from "react"

export default function useHeader () {
    const [link, setLink] = useState('main')
    const [open, setOpen] = useState(true)
 
    const openHeader = () => {
        setOpen(prev => prev ? false : true)
    }

    const changeLink = (e, name) => {
        e.stopPropagation()
        setLink(name)
    }

    const onScrollFunction = (e) => {
        if(window.scrollY > 100) {
            setOpen(false)
        } else {
            setOpen(true)
        }
        return
    }

    useEffect(() => {
        if(window.innerWidth > 768) {
            window.addEventListener('scroll', onScrollFunction)
          }
    }, [])


    return {
        link,
        open,
        openHeader,
        changeLink
    }
}
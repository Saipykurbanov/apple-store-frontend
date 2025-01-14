'use client'

import useEnter from "@/hooks/useEnter"

export default function MainTitle () {
    const [blockRef] = useEnter('main')

    return (
        <h1 ref={blockRef}>
            Сервис-маркет <br></br>
            техники в <br></br> 
            г. Симферополь.
        </h1>
    )
}
'use client'

import useEnter from "@/hooks/useEnter"

export default function ScrollDown () {
    const [blockRef] = useEnter('main')

    return (
        <div className="scroll_down" ref={blockRef}>
            <span></span>
            <span></span>
            <span></span>
            <img src="./icons/arrow_down.svg" alt="" />
        </div>
    )
}
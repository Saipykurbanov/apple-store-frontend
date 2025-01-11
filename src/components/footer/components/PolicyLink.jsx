'use client'

import Store from "@/utils/Store"

export default function PolicyLink() {

    const openPolicy = () => {
        document.body.style.overflow = 'hidden'
        Store.setListener('open_policy', ['policy', false])
    }

    return  <p onMouseDown={openPolicy} className='policy'>политика и условия доставки</p>
}
'use client'

import Button from "@/components/button/Button";
import Store from "@/utils/Store";
import { useRef, useState } from "react";

export default function Search ({list}) {
    const [value, setValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef(null)

    const inputValue = (value) => {
        const normalizedValue = value.replace(/\s+/g, '').toLowerCase(); 
    
        let filteredList = structuredClone(list);
    
        filteredList = filteredList.filter(el => 
            el.title.replace(/\s+/g, '').toLowerCase().includes(normalizedValue)
        );
    
        Store.setListener('search', filteredList);
    
        setValue(value);
    };

    const openSearch = () => {
        setIsOpen(prev => {
            const open =  prev ? false : true

            if(open) {
                inputRef.current?.focus();
            }
            
            return open
        })
    }

    return (
        <div className="search_wrapper">
            <div className={`search_container ${isOpen ? 'open' : ''}`}>
                <div className="search">
                    <input ref={inputRef} type="text" value={value} onChange={(e) => inputValue(e.target.value)} maxlength="50"/>  
                </div>

                <Button mode={`round black`} callback={openSearch}>
                    <svg width="18.127686" height="20.507568" viewBox="0 0 18.1277 20.5076" fill="none">
                        <defs/>
                        <rect id="Frame 51" rx="6.000000" width="12.000000" height="12.000000" transform="translate(1.500000 1.500000)" fill="#FFFFFF" fillOpacity="0"/>
                        <rect id="Frame 51" rx="6.000000" width="12.000000" height="12.000000" transform="translate(1.500000 1.500000)" stroke="#FFFFFF" strokeOpacity="1.000000" strokeWidth="3.000000"/>
                        <rect id="Rectangle 23" x="12.265137" y="11.064697" rx="1.500000" width="9.608154" height="3.000000" transform="rotate(52.3984 12.265137 11.064697)" fill="#FFFFFF" fillOpacity="1.000000"/>
                    </svg>
                </Button>
            </div>
        </div>
    )
}
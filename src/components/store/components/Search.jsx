'use client'

import Button from "@/components/button/Button";
import Store from "@/utils/Store";
import { useRef, useState } from "react";

export default function Search ({list}) {
    const [searchValue, setSearchValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const inputsRef = useRef(null)

    const searching = (e, value) => {
        e.stopPropagation()
        
        const normalizedValue = value.replace(/\s+/g, '').toLowerCase(); 
    
        let filteredList = structuredClone(list);

        filteredList = filteredList.filter(el => 
            el.title.replace(/\s+/g, '').toLowerCase().includes(normalizedValue)
        );
    
        Store.setListener('search', filteredList);
    
        setSearchValue(value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            e.preventDefault(); 
            inputsRef.current?.blur();
        }
    };

    const openSearch = () => {
        setIsOpen(prev => {
            const open =  prev ? false : true

            if(open) {
                inputsRef.current?.focus();
            }
            
            return open
        })
    }

    return (
        <div className="search_wrapper">
            <div className={`search_container ${isOpen ? 'open' : ''}`}>
                <form autoCorrect="off" className="search">
                    <input 
                        ref={inputsRef} 
                        type="text" 
                        value={searchValue} 
                        maxLength="50" 
                        autoComplete="off" 
                        onInput={(e) => searching(e, e.target.value)} 
                        onKeyDown={(e) => handleKeyDown(e)}/>  
                </form>

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
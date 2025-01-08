'use client'

import Button from "@/components/button/Button";
import Store from "@/utils/Store";
import { useState } from "react";

export default function Search ({list}) {
    const [value, setValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    console.log(list)

    const inputValue = (value) => {
        let filteredList = structuredClone(list)
        filteredList = filteredList.filter(el => el.title.toLowerCase().includes(value.toLowerCase()));
        if(AreEqual(filteredList, list)) {
            console.log('same')
        } else {
            console.log('not same')
            Store.setListener('search_loading', true)
        }
        Store.setListener('search', filteredList)
        setValue(value)
    }

    const extractId = (arr) => arr.map(item => item.productid);

    // Функция для сравнения массивов title
    const AreEqual = (arr1, arr2) => {
        const productid1 = extractId(arr1);
        const productid2 = extractId(arr2);

        if (productid1.length !== productid2.length) {
            return false;
        }

        for (let i = 0; i < productid1.length; i++) {
            if (productid1[i] !== productid2[i]) {
                return false;
            }
        }

        return true;
    };

    return (
        <div className="search_wrapper">
            <div className={`search_container ${isOpen ? 'open' : ''}`}>
                <div className="search">
                    <input type="text" value={value} onChange={(e) => inputValue(e.target.value)}/>  
                </div>

                <Button mode={`round black`} callback={() => setIsOpen(prev => prev ? false : true)}>
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
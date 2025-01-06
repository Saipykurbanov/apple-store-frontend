import Store from "@/utils/Store";
import { useEffect, useRef, useState } from "react";

export default function useEnter (key) {
    const blockRef = useRef(null); 
    const [blockName, setBlockName] = useState('')

    Store.useListener(`link_block${key}`, (data) => {
        setBlockName(data)
    })
        
    useEffect(() => {
        
        const handleIntersect = ([entry]) => {
            if (entry.isIntersecting) {
                Store.setListener('change_link', key)

                if(blockName === key) {
                    Store.setListener('link_block', false)
                }
            }
        };

        const observer = new IntersectionObserver(handleIntersect, {
            root: null, 
            threshold: 0.5, 
        });

        if (blockRef.current) observer.observe(blockRef.current);
        return () => {
            if (blockRef.current) observer.unobserve(blockRef.current);
        };
        
    }, [blockName]);

    return [blockRef]
}
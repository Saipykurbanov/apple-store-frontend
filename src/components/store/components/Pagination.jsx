import Button from "@/components/button/Button";

export default function Pagination({scroll, track, container, pageNum, nextPage, prevPage, maxPage}) {

    return (
        <div className={`pagination`} >
            <Button mode={'round blur'} callback={prevPage}>
                <svg width="14.006104" height="19.982910" viewBox="0 0 14.0061 19.9829" fill="none" >
                    <defs/>
                    <path id="Vector 1" d="M5.12 8.49L12.5 8.49C13.34 8.49 14 9.15 14 9.99C14 10.83 13.34 11.49 12.5 11.49L5.12 11.49L11.05 17.41C11.64 18.01 11.64 18.94 11.05 19.53C10.45 20.13 9.52 20.13 8.93 19.53L0.44 11.05C-0.15 10.45 -0.15 9.52 0.44 8.93L8.93 0.44C9.52 -0.15 10.45 -0.15 11.05 0.44C11.64 1.03 11.64 1.97 11.05 2.56L5.12 8.49Z" fill="#000000" fillOpacity="1.000000" fillRule="evenodd"/>
                </svg>
            </Button>
            
            <div className="page_container" ref={container}>
                <div className="track" ref={track} style={{transform: `translateX(${0 - (scroll)}px)`}}>
                    {Array.from({ length: maxPage }, (_, i) => (
                        <div key={i} className={`pagination_page_item ${pageNum === i ? 'active' : ''}`}>
                            {i < 9 ? `0${i + 1}` : (i + 1)}
                        </div>
                    ))}
                </div>
            </div>
        
            <Button mode={'round blur'} callback={nextPage}>
                <svg width="14.006104" height="19.982910" viewBox="0 0 14.0061 19.9829" fill="none">
                    <defs/>
                    <path id="Vector 1" d="M8.87 8.49L1.5 8.49C0.65 8.49 0 9.15 0 9.99C0 10.83 0.65 11.49 1.5 11.49L8.87 11.49L2.95 17.41C2.36 18.01 2.36 18.94 2.95 19.53C3.54 20.13 4.48 20.13 5.07 19.53L13.56 11.05C14.15 10.45 14.15 9.52 13.56 8.93L5.07 0.44C4.48 -0.15 3.54 -0.15 2.95 0.44C2.36 1.03 2.36 1.97 2.95 2.56L8.87 8.49Z" fill="#000000" fillOpacity="1.000000" fillRule="evenodd"/>
                </svg>
            </Button>
        </div>
    )
}
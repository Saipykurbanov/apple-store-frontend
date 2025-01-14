'use client'
import Button from "@/components/button/Button";
import ItemOption from "./ItemOption";
import Api from "@/utils/Api";
import Image from "next/image";

export default function StoreItem ({ openModal, el, course }) {

    return (
        <div className="store_item">
            <Image 
                className="store_item_image" 
                src={`${Api.url}images/products/${el.main_image}`}
                width={0} 
                height={0} 
                style={{ width: '100%', height: 'auto' }} 
                placeholder="blur" 
                unoptimized={true} 
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAoADUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDxSiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP//Z" 
                loading="lazy"
                alt=""
            />

            <div className="store_item_content_wrapper">
                <div className="store_item_content">
                    <div className="head">
                        <div className="name">{el.title}</div>

                        <div className="price">{((el.price * course) / 100).toFixed(2)} руб.</div>
                    </div>

                    <div className="option_list">
                        {el.specifications?.length ? 
                            el.specifications.map((el) => (
                                <ItemOption key={el.id || el.specificationid} icon={el.icon} description={el.description}/>
                            ))
                        :<></>}
                    </div>
                    

                    <div className="colors_flex">
                        <div className="color" style={{background: el.color}}></div>
                        <p className="memory">4/256 гб.</p>
                    </div>

                    <Button callback={openModal}>Заказать</Button>
                </div>
            </div>
        </div>
    )
}
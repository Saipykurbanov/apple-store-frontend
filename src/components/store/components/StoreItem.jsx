'use client'
import Button from "@/components/button/Button";
import ItemOption from "./ItemOption";
import Api from "@/utils/Api";

export default function StoreItem ({ openModal, el, course }) {

    return (
        <div className="store_item">
            <img className="store_item_image" src={`${Api.url}images/products/${el.main_image}`} alt="" />

            <div className="store_item_content_wrapper">
                <div className="store_item_content">
                    <div className="head">
                        <div className="name">{el.title}</div>

                        <div className="price">{((el.price * course) / 100).toFixed(2)} руб.</div>
                    </div>

                    <div className="option_list">
                        {el.specifications?.length ? 
                            el.specifications.map((el) => (
                                <ItemOption icon={el.icon}description={el.description}/>
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
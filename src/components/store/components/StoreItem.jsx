'use client'
import Button from "@/components/button/Button";
import ItemOption from "./ItemOption";

export default function StoreItem ({ openModal }) {

    return (
        <div className="store_item">
            <img className="store_item_image" src="/images/iphoneblue.svg" alt="" />

            <div className="store_item_content">
                <div className="head">
                    <div className="name">iPhone 16</div>

                    <div className="price">70 000 руб.</div>
                </div>

                <div className="option_list">
                    <ItemOption 
                        icon={'/icons/processor.svg'}
                        description={'Процессор А18 с 5 ядрами GPU'}
                    />
                    <ItemOption 
                        icon={'/icons/cameraBlock.svg'}
                        description={`48-МП Fusion камера
                                    2x телеобъектив
                                    12-МП ультраширокая камера`}
                    />
                    <ItemOption 
                        icon={'/icons/batary.svg'}
                        description={'До 27 часов воспроизведения видео.'}
                    />
                    <ItemOption 
                        icon={'/icons/cameraBtn.svg'}
                        description={'кнопка контроля камеры'}
                    />
                </div>
                

                <div className="colors_flex">
                    <div className="color" style={{background: '#8DA0EC'}}></div>
                    <p className="memory">4/256 гб.</p>
                </div>

                <Button callback={openModal}>Заказать</Button>
            </div>
        </div>
    )
}
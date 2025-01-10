'use client'

import ModalTitle from "@/components/modal_title/ModalTitle";
import ModalInput from "@/components/modal_input/ModalInput";
import ModalFooter from "@/components/modal_footer/ModalFooter";
import ModalCloseBtn from "@/components/modal_close_btn/ModalCloseBtn";
import useStoreModal from "./hooks/useStoreModal";
import './css/store_modal.scss';
import Api from "@/utils/Api";
import Phone from "@/utils/Phone";

export default function StoreModal ({course}) {

    const store = useStoreModal(course)

    return (
        <div className={`store_modal_wrapper ${store.isOpen ? 'open' : ''}`} onMouseDown={store.closeModal}>
            <div className="store_modal" onMouseDown={(e) => e.stopPropagation()}>
                <ModalCloseBtn mode={'black'} callback={store.closeModal}/>
                
                {store.success ?
                <div className="success_message">
                    <svg width={100} height={100}>
                        <circle 
                            className='success_circle'
                            cx="50" 
                            cy="50" 
                            r="40" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                        />
                        <path
                            d="M30 47 L50 65 L87 20" 
                            stroke-width="11" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                        />
                    </svg>
                    <h4>Ваша заявка отправлена!</h4>
                    <p>Наш менеджер свяжется с вами в течении часа.</p>
                </div>
                :   
                    <div className="store_modal_content">
                        <div className="store_flex">
                            <div className="store_flex_item left">
                                <ModalTitle mode={'black'}>Оставьте заявку и мы вам перезвоним!</ModalTitle>
                                
                                <div className="store_modal_body">
                                    <ModalInput 
                                        label={'Ваше имя'}
                                        mode={'black'}
                                        value={store.input.username}
                                        callback={(e) => store.changeInput(e.target.value, 'username')}
                                        error={store.error.username}
                                    />
    
                                    <ModalInput 
                                        label={'Адрес доставки'}
                                        mode={'black'}
                                        value={store.input.address}
                                        callback={(e) => store.changeInput(e.target.value, 'address')}
                                        error={store.error.address}
                                    />
    
                                    <ModalInput 
                                        label={'Номер телефона'}
                                        mode={'black'}
                                        value={store.input.phone}
                                        callback={(e) => Phone.onPhoneInput(e, store.setInput, store.setError)}
                                        onKeyDown={(e) => Phone.onPhoneKeyDown(e, store.setInput)}
                                        onPaste={(e) => Phone.onPhonePaste(e, store.setInput)}
                                        error={store.error.phone}
                                    />
                                </div>
                            </div>
    
                            <div className="store_flex_item preview">
                                <div className="preview_image">
                                    <img className="" src={`${Api.url}images/products/${store?.input?.image}`} alt="" />
                                </div>
    
                                <div className="characters">
                                    <div className="character_item">
                                        <h4>модель:</h4>
                                        <p>{store.input.title}</p>
                                    </div>
                                    <div className="character_item">
                                        <h4>объём памяти:</h4>
                                        <p>{store.input.memory} гб</p>
                                    </div>
                                    <div className="character_item">
                                        <h4>цвет:</h4>
                                        <p className="color_text"><span className={`blue`} style={{backgroundColor: `${store.input.color || 'var(--background-grey)'}`}}/>{store.input.colorname}</p>
                                    </div>
                                    <div className="character_item">
                                        <h4>цена:</h4>
                                        <p>{(store.input.price / 100).toFixed(2)} руб.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <ModalFooter loading={store.loading} callBack={store.sendData} mode={'black'}/>
                    </div>
                }
            </div>
        </div>
    )
}
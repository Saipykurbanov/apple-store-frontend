'use client';
import ModalTitle from '@/components/modal_title/ModalTitle';
import ModalFooter from '@/components/modal_footer/ModalFooter';
import ModalInput from '@/components/modal_input/ModalInput';
import './css/repair_modal.scss';
import RepairInput from './components/RepairInput';
import ModalCloseBtn from '@/components/modal_close_btn/ModalCloseBtn';
import useRepairModal from './hooks/useRepairModal';
import Phone from '@/utils/Phone';

export default function RepairModal ({services}) {

    const repair = useRepairModal(services)

    return (
        <div className={`repair_modal_wrapper ${repair.isOpen ? 'open' : ''}`} onMouseDown={(e) => repair.closeModal(e, false)}>
            <div className="repair_modal">
                <ModalCloseBtn mode={'white'} callback={(e) => repair.closeModal(e, true)}/>

                {repair.success ? 
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
                    <div className={`repair_modal_content ${repair.success ? 'close' : ''}`}>
                        <ModalTitle mode={'white center'}>Оставьте заявку и мы вам перезвоним!</ModalTitle>

                        <div className="repair_modal_body">
                            <ModalInput 
                                label={'Ваше имя'}
                                mode={'white'}
                                value={repair.input.name}
                                callback={(e) => repair.changeInput(e.target.value, 'name')}
                                error={repair.error.name}
                            />

                            <RepairInput 
                                label={'Какая услуга вам нужна?'}
                                services={services}
                                value={repair.input.service_name}
                                callback={repair.changeService}
                            />

                            <ModalInput 
                                label={'Номер телефона'}
                                mode={'white'}
                                value={repair.input.phone}
                                callback={(e) => Phone.onPhoneInput(e, repair.setInput, repair.setError)}
                                onKeyDown={(e) => Phone.onPhoneKeyDown(e, repair.setInput)}
                                onPaste={(e) => Phone.onPhonePaste(e, repair.setInput)}
                                error={repair.error.phone}
                            />
                        </div>

                        <ModalFooter loading={repair.loading} callBack={repair.sendData} mode={'white'}/>
                    </div>
                }
                {/* <div className={`repair_modal_content ${repair.success ? 'close' : ''}`}>
                </div> */}

            </div>
        </div>
    )
}
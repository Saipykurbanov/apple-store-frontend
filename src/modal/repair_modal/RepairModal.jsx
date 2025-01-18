'use client';
import ModalTitle from '@/components/modal_title/ModalTitle';
import ModalFooter from '@/components/modal_footer/ModalFooter';
import ModalInput from '@/components/modal_input/ModalInput';
import RepairInput from './components/RepairInput';
import ModalCloseBtn from '@/components/modal_close_btn/ModalCloseBtn';
import useRepairModal from './hooks/useRepairModal';
import Phone from '@/utils/Phone';
import './css/repair_modal.scss';

export default function RepairModal ({services}) {

    const repair = useRepairModal(services)

    if(!repair.isOpen) return null

    return (
        <div ref={repair.modal} className={`repair_modal_wrapper open`} onMouseDown={(e) => repair.closeModal(e, false)}>
            <form onSubmit={repair.sendData} autoComplete='off' className="repair_modal">
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
                    <div className={`repair_modal_content`}>
                        <ModalTitle mode={'white center'}>Оставьте заявку и мы вам перезвоним!</ModalTitle>

                        <div className="repair_modal_body">
                            <ModalInput 
                                label={'Ваше имя'}
                                mode={'white'}
                                value={repair.input.name}
                                callback={(e) => repair.changeInput(e.target.value, 'name')}
                                error={repair.error.name}
                                name={'repairName'}
                            />

                            <ModalInput 
                                type={'tel'}
                                label={'Номер телефона'}
                                mode={'white'}
                                value={repair.input.phone}
                                callback={(e) => Phone.onPhoneInput(e, repair.setInput, repair.setError)}
                                onKeyDown={(e) => Phone.onPhoneKeyDown(e, repair.setInput)}
                                onPaste={(e) => Phone.onPhonePaste(e, repair.setInput)}
                                error={repair.error.phone}
                                name={'repairPhone'}
                            />

                            <RepairInput 
                                label={'Какая услуга вам нужна?'}
                                services={services}
                                value={repair.input?.service_name}
                                callback={repair.changeService}
                            />
                        </div>

                        <ModalFooter 
                            openPolicy={repair.openPolicy} 
                            loading={repair.loading}
                            mode={'white'}
                            policy={repair.policy}
                            checkPolicy={repair.checkPolicy}
                            error={repair.error.policy}
                        />
                    </div>
                }

            </form>
        </div>
    )
}
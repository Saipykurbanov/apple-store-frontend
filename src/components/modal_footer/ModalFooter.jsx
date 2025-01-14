'use client';
import Button from '../button/Button';
import './css/modal_footer.scss';

export default function ModalFooter ({mode, callBack, loading, openPolicy, checkPolicy, policy, error}) {

    return (
        <div className={`modal_footer ${mode}`}>
            <div className="policy_agreement">
                <div className={`mark ${policy ? 'checked' : ''} ${error ? 'error' : ''}`} onMouseDown={() => checkPolicy()}></div>

                <span className="text">Я подтверждаю, что ознакомлен(а) с <span onMouseDown={() => openPolicy('user')}>Пользовательским соглашением</span> и <span onMouseDown={() => openPolicy('policy')}>Политикой конфиденциальности</span>, а также даю согласие на обработку моих персональных данных.</span>
                {error ? <div className="error_message">{error}</div> : <></>}
            </div>

            <Button callback={callBack}>
                {loading ? 'Отправка...' : 'Оставить заявку'}
            </Button>

            <p className="text">или свяжитесь любым удобным для вас способом</p>

            <div className="social_flex">
                <a href="">
                    <svg width="23" viewBox="0 0 18 18" fill="none">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs/>
                        <path id="path" d="M6.79 1.48L7.52 2.78C8.18 3.96 7.91 5.51 6.87 6.55C6.87 6.55 5.62 7.81 7.9 10.09C10.18 12.37 11.44 11.12 11.44 11.12C12.48 10.08 14.03 9.81 15.21 10.47L16.51 11.2C18.3 12.2 18.51 14.7 16.94 16.27C16 17.21 14.85 17.94 13.57 17.99C11.42 18.07 7.78 17.53 4.12 13.87C0.46 10.21 -0.08 6.57 0 4.42C0.05 3.14 0.78 1.99 1.72 1.05C3.29 -0.52 5.79 -0.31 6.79 1.48Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero"/>
                    </svg>
                </a>

                <a href="">
                    <svg width="27.000000" height="27.000000" viewBox="0 0 27 27" fill="none" style={{left: '-1px', top: '1px'}}>
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs>
                            <clipPath id="clip26_48">
                                <rect id="vk-svgrepo-com.svg" width="27.000000" height="27.000000" fill="white" fillOpacity="0"/>
                            </clipPath>
                        </defs>
                        <g clipPath="url(#clip26_48)">
                            <path id="path" d="M24.03 16.6C24.03 16.6 26.21 18.75 26.75 19.75C26.97 20.12 27.05 20.46 26.94 20.67C26.76 21.02 26.14 21.2 25.93 21.21L22.07 21.21C21.81 21.21 21.25 21.14 20.57 20.67C20.05 20.31 19.53 19.71 19.03 19.13C18.28 18.26 17.63 17.51 16.98 17.51C16.9 17.51 16.82 17.52 16.74 17.55C16.24 17.7 15.61 18.41 15.61 20.29C15.61 20.88 15.15 21.21 14.82 21.21L13.05 21.21C12.45 21.21 9.32 21 6.54 18.07C3.13 14.48 0.07 7.29 0.04 7.22C-0.15 6.76 0.25 6.5 0.68 6.5L4.58 6.5C5.1 6.5 5.27 6.82 5.39 7.1C5.53 7.43 6.04 8.73 6.88 10.19C8.23 12.57 9.07 13.54 9.73 13.54C9.86 13.54 9.98 13.51 10.09 13.44C10.96 12.96 10.8 9.86 10.75 9.22C10.75 9.1 10.75 7.83 10.31 7.22C9.99 6.79 9.45 6.62 9.12 6.55C9.21 6.43 9.39 6.23 9.63 6.12C10.23 5.82 11.3 5.78 12.37 5.78L12.96 5.78C14.12 5.79 14.42 5.87 14.84 5.97C15.69 6.18 15.71 6.73 15.63 8.6C15.61 9.13 15.59 9.73 15.59 10.44C15.59 10.59 15.58 10.76 15.58 10.93C15.56 11.89 15.52 12.98 16.2 13.42C16.29 13.48 16.39 13.5 16.49 13.5C16.73 13.5 17.43 13.5 19.34 10.23C20.17 8.78 20.82 7.08 20.87 6.95C20.91 6.88 21.02 6.68 21.16 6.6C21.26 6.54 21.36 6.52 21.47 6.52L26.06 6.52C26.56 6.52 26.9 6.6 26.96 6.79C27.07 7.09 26.94 8.03 24.85 10.86C24.5 11.33 24.19 11.74 23.92 12.09C22.02 14.58 22.02 14.71 24.03 16.6Z" fill="#2397FE" fillOpacity="1.000000" fillRule="nonzero"/>
                        </g>
                    </svg>
                </a>

                <a href="https://t.me/Vaitov_06">
                    <svg width="23" viewBox="0 0 17.5 14.5833" fill="none" style={{left: '-1px'}}>
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs/>
                        <path id="path" d="M16 0.12C16 0.12 17.62 -0.51 17.49 1.03C17.44 1.66 17.04 3.87 16.72 6.26L15.64 13.34C15.64 13.34 15.55 14.37 14.74 14.55C13.93 14.73 12.72 13.92 12.5 13.74C12.32 13.61 9.12 11.58 8 10.58C7.68 10.31 7.32 9.77 8.04 9.14L12.77 4.63C13.3 4.09 13.84 2.83 11.6 4.36L5.3 8.65C5.3 8.65 4.58 9.1 3.23 8.69L0.31 7.79C0.31 7.79 -0.77 7.11 1.07 6.44C5.57 4.32 11.1 2.15 16 0.12Z" fill="#FFFFFF" fillOpacity="1.000000" fillRule="nonzero"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}
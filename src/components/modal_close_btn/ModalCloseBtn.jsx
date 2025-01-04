import './css/modal_close_btn.scss';

export default function ModalCloseBtn ({ mode, callback}) {

    return (
        <div className={`modal_close_button ${mode}`} onClick={callback}>
            <svg width="35.355469" height="35.355469" viewBox="0 0 35.3555 35.3555" fill="none">
                <desc>
                        Created with Pixso.
                </desc>
                <defs/>
                <rect id="Rectangle 9" x="7.778320" y="9.899658" rx="1.500000" width="3.000000" height="25.000000" transform="rotate(-45 7.778320 9.899658)" fill="#FFFFFF" fillOpacity="1.000000"/>
                <rect id="Rectangle 10" x="9.899414" y="27.577148" rx="1.500000" width="3.000000" height="25.000000" transform="rotate(-135 9.899414 27.577148)" fill="#FFFFFF" fillOpacity="1.000000"/>
            </svg>
        </div>
    )
}
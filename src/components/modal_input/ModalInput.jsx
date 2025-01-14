import './css/modal_input.scss';

export default function ModalInput ({type = 'text', mode, label, value, callback, onPaste, onKeyDown, error, name}) {

    return (
        <div className={`modal_input ${mode}`}>
            <label htmlFor="">{label}</label>

            <input 
                className={`${error ? 'error' : ''}`}
                type={type} 
                value={value} 
                onChange={callback}
                onPaste={onPaste}
                onKeyDown={onKeyDown}
                maxLength="50"
                name={name}
            />

            {error ? <div className="error_message">{error}</div> : <></>}
        
        </div>
    )
}
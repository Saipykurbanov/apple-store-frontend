import './css/modal_input.scss';

export default function ModalInput ({mode, label, value, callback, onPaste, onKeyDown, error}) {

    return (
        <div className={`modal_input ${mode}`}>
            <label htmlFor="">{label}</label>

            <input 
                className={`${error ? 'error' : ''}`}
                type="text" 
                value={value} 
                onChange={callback}
                onPaste={onPaste}
                onKeyDown={onKeyDown}
            />

            {error ? <div className="error_message">{error}</div> : <></>}
        
        </div>
    )
}
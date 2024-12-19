import './css/modal_input.scss';

export default function ModalInput ({mode, label, value, callback}) {

    return (
        <div className={`modal_input ${mode}`}>
            <label htmlFor="">{label}</label>

            <input type="text" value={value} onChange={callback}/>
        </div>
    )
}
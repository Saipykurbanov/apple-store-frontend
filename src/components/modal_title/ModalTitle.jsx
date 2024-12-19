import './css/modal_title.scss';

export default function ModalTitle ({children, mode}) {

    return (
        <h2 className={`modal_title ${mode}`}>
            {children}
        </h2>
    )
}
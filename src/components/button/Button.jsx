import React from 'react';
import './css/button.scss'

export default function Button ({children, callback, mode, type}) {
    return (
        <button type={type} className={`main_button ${mode}`} onClick={callback}>
            {children}
        </button>
    );
};

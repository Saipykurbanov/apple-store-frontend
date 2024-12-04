import React from 'react';
import './css/button.scss'

export default function Button ({children, callback, mode}) {
    return (
        <button className={`main_button ${mode}`} onClick={callback}>
            {children}
        </button>
    );
};

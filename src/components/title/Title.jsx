import React from 'react';
import './css/title.scss';

export default function Title ({ mode, children }) {
    return (
        <h2 className={`main_title ${mode}`}>{children}</h2>
    );
};


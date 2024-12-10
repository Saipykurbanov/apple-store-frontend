import React from 'react';
import './css/title.scss';

export default function Title ({ mode, description, title }) {
    return (
        <div className={`main_title_wrapper ${mode}`}>
            <h2 className={`main_title `}>{title}</h2>

            <p className="main_title_description">{description}</p>
        </div>
    );
};


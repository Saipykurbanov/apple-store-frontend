import React from 'react';

const AdvantagesItem = ({ title, content }) => {
    return (
        <div className='advantages_item'>
            <h3>{title}</h3>

            <p>{content}</p>
        </div>
    );
};

export default AdvantagesItem;
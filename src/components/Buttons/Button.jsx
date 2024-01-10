import React from 'react';

const Button = ({onClick, type, className, children}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
};

export default Button;
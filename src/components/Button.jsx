import React from 'react';

function Button({type = 'button',className = null,context = "Button",Icon = null}) {
    return (
        <button className={`bg-primary hover:bg-primary-red duration-[0.5s] py-2 px-4 rounded text-white ${className ? className : ""}`} type={type} >
            {context}
            {Icon && <Icon/>}
        </button>
    );
}

export default Button;
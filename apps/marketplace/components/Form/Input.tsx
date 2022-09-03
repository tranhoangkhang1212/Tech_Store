import clsx from 'clsx';
import React from 'react';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onEnter?: () => void;
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <input
            {...props}
            onKeyPress={(e) => e.key === 'Enter' && props.onEnter && props.onEnter()}
            className={clsx('bg-white p-2 border-none outline-none', props.className)}
        />
    );
};

export default Input;

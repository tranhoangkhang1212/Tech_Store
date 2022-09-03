import clsx from 'clsx';
import React, { FC } from 'react';

type TProps = {
    amount: string | number;
    className?: string;
};

const ItemCount: FC<TProps> = (props) => {
    const { amount, className } = props;

    return (
        <span
            className={clsx(
                'bg-blue-gradient block absolute top-0 py-[2px] px-[6px] rounded-[50%] text-[14px]',
                className,
            )}
        >
            {amount}
        </span>
    );
};

export default ItemCount;

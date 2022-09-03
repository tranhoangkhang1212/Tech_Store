/* eslint-disable jsx-a11y/anchor-is-valid */
import parse from 'html-react-parser';
import { default as NextLink, LinkProps } from 'next/link';
import React, { FC, HTMLProps } from 'react';

type TProps = {
    name: string;
} & LinkProps &
    HTMLProps<HTMLAnchorElement>;

const Link: FC<TProps> = (props) => {
    const { name, href } = props;
    return (
        <NextLink href={href}>
            <a className="block">{parse(name)}</a>
        </NextLink>
    );
};

export default Link;

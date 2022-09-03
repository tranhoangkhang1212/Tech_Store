import React from 'react';

import Footer from './Footer';
import Header from './Header';

type TLayoutProps = {
    children: JSX.Element | JSX.Element[];
};

const MainLayout: React.FC<TLayoutProps> = ({ children }) => {
    return (
        <div className="flex-center flex-col">
            <Header />
            <main className="container overflow-x-hidden overflow-y-auto">{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;

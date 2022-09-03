import Home from '@pages/home';
import type { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
    return (
        <div>
            <Head>
                <meta name="Tech Store" content="Tech Store Marketplace" />
                <link rel="icon" href="/assets/images/favicon.ico" />
            </Head>
            <Home />
        </div>
    );
};

export default Index;

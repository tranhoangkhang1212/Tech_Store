import Head from 'next/head';
import { useAsync } from 'react-use';

import MainLayout from '~/components';
import apis from '~/src/api';

const Home = () => {
    useAsync(() =>
        apis.getAllProduct({
            headers: {
                'default-token': true,
            },
        }),
    );
    return (
        <>
            <Head>
                <title>Tech Store</title>
            </Head>
            <MainLayout>
                <h1>Home page</h1>
            </MainLayout>
        </>
    );
};

export default Home;

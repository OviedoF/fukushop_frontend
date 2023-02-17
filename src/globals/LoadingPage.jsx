import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <main className='loading_container'>
            <HashLoader size={70} color={'white'} />
        </main>
    );
}

export default LoadingPage;

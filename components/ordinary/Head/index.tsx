import React from 'react';
import Head from 'next/head';

interface BasicHead {
    title: string;
    children?: React.ReactNode;
    favIcon?: string;
}

const BasicHead = ({title, favIcon, children}: BasicHead) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href={favIcon ? favIcon : "/favicon.ico"}/>
            {children}
        </Head>
    );
};

export default BasicHead;
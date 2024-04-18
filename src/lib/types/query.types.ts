// import { UseQueryResult } from 'react-query';

import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';

export type QueryCacheKey = [
    'PRODUCTS' | 'USERS' | 'BANNERS' | 'CATEGORIES' | 'BRANDS',
];

export type ErrorResponse = {
    res: Error | unknown;
    message: string;
};

export interface IDataResponse<T> {
    data: T[];
    error: ErrorResponse | null;
}

export type InferStaticProps<T extends (args: any) => any> =
    InferGetStaticPropsType<T>;
export type InferServerSideProps<T extends (args: any) => any> =
    InferGetServerSidePropsType<T>;

// import { UseQueryResult } from 'react-query';

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

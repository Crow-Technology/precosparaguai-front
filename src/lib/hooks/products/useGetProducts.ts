'use client';

import { IProduct } from '@/lib/types/product.types';
import { QueryCacheKey } from '@/lib/types';
import { useQuery } from '@/lib/hooks/query/';

export const useGetProducts = () => {
    const key: QueryCacheKey = ['PRODUCTS'];

    const { data, isLoading, isError, error, ...rest } = useQuery<
        IProduct[],
        Error
    >({
        queryFn: async () => {
            try {
                return (await fetch('/api/products')).json();
            } catch (err) {
                throw err;
            }
        },
        queryKey: key,
    });

    console.log(data);

    return {
        products: data ?? [],
        isLoading,
        isError,
        error,
        ...rest,
    };
};

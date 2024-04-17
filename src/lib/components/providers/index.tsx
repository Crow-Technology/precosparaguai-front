'use client';

import { ReactNode, Suspense } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ProductContentProvider } from './ProductContentProvider';

const queryClient = new QueryClient();

interface IProps {
    children: ReactNode;
}

export const Providers = ({ children }: IProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            {/* <RequireAuth /> */}
            <Suspense fallback={<div>Loading...</div>}>
                <ProductContentProvider>{children}</ProductContentProvider>
            </Suspense>
        </QueryClientProvider>
    );
};

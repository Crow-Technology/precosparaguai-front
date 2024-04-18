import { PropsWithChildren, Suspense } from 'react';
import { ProductContentProvider } from './ProductContentProvider';

export const Providers = ({ children }: PropsWithChildren) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProductContentProvider>{children}</ProductContentProvider>
        </Suspense>
    );
};

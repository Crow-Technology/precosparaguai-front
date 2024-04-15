'use client';

import React, {
    SetStateAction,
    useState,
    createContext,
    useContext,
} from 'react';
import { ICategory, IProduct } from '@/lib/types/product.types';
// import { useGetProductCategories } from '@/lib/hooks/products';
import { IBrand } from '@/lib/utils/fixtures/BrandsFixture';

/// refactor
export type ProductFilter = Exclude<
    keyof IProduct,
    'image' | 'rating' | 'description' | 'pricing'
>;
// refactor
export type CategoryFilter = Exclude<keyof ICategory, 'icon'>;

export type BrandFilter = Exclude<keyof IBrand, 'icon'>;

interface IProductContext {
    products: IProduct[];
    productFilterBy: (filter: ProductFilter) => IProduct[];
}

interface ICategoryContext {
    categories: ICategory[];
    currentCategory: ICategory | undefined;
    setCurrentCategory: React.Dispatch<SetStateAction<ICategory | undefined>>;
    categoryFilterBy: (filter: CategoryFilter) => ICategory[];
}

interface IBrandContext {
    brands: IBrand[];
    brandFilterBy: (filter: BrandFilter) => IBrand[];
}

export const ProductContext = createContext<IProductContext | undefined>(
    undefined
);
export const CategoryContext = createContext<ICategoryContext | undefined>(
    undefined
);

export const BrandContext = createContext<IBrandContext | undefined>(undefined);

export const useProductContext = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error(
            'useProductContext must be used within a ProductProvider'
        );
    }

    return context;
};

export const useCategoryContext = () => {
    const context = useContext(CategoryContext);

    if (!context) {
        throw new Error(
            'useCategoryContext must be used within a CategoryProvider'
        );
    }

    return context;
};

export const useBrandContext = () => {
    const context = useContext(BrandContext);

    if (!context) {
        throw new Error('useBrandContext must be used within a BrandProvider');
    }

    return context;
};

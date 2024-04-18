'use client';

import React, { PropsWithChildren, useState } from 'react';
import { IProduct, ICategory } from '@/lib/types/product.types';
import {
    ProductContext,
    CategoryContext,
    ProductFilter,
    CategoryFilter,
    BrandFilter,
    BrandContext,
} from '@/lib/store/context/ProductContext';
import { IBrand } from '@/lib/utils/fixtures/BrandsFixture';
import {
    getBrands,
    getCategories,
    getProducts,
} from '@/actions/products.actions';

const ProductProvider = async ({ children }: PropsWithChildren) => {
    const { data: products } = await getProducts();

    const productFilterBy = (filter: ProductFilter): IProduct[] => {
        return products.filter((product) => product[filter]);
    };

    return (
        <ProductContext.Provider value={{ products, productFilterBy }}>
            {children}
        </ProductContext.Provider>
    );
};

const CategoryProvider = async ({ children }: PropsWithChildren) => {
    const { data: categories } = await getCategories();

    const [currentCategory, setCurrentCategory] = useState<
        ICategory | undefined
    >(undefined);

    const categoryFilterBy = (filter: CategoryFilter): ICategory[] => {
        return categories.filter((category) => category[filter]);
    };

    return (
        <CategoryContext.Provider
            value={{
                categories,
                categoryFilterBy,
                currentCategory,
                setCurrentCategory,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

const BrandProvider = async ({ children }: PropsWithChildren) => {
    const { data: brands } = await getBrands();

    const brandFilterBy = (filter: BrandFilter): IBrand[] => {
        return brands.filter((brand) => brand[filter] === filter);
    };

    return (
        <BrandContext.Provider value={{ brands, brandFilterBy }}>
            {children}
        </BrandContext.Provider>
    );
};

export const ProductContentProvider = ({ children }: PropsWithChildren) => {
    return (
        <ProductProvider>
            <BrandProvider>
                <CategoryProvider>{children}</CategoryProvider>
            </BrandProvider>
        </ProductProvider>
    );
};

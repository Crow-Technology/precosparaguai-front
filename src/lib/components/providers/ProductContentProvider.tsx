import React, { useState } from 'react';
import { IProduct, ICategory } from '@/lib/types/product.types';
import { useGetProductCategories, useGetProducts } from '@/lib/hooks/products';
import {
    ProductContext,
    CategoryContext,
    ProductFilter,
    CategoryFilter,
    BrandFilter,
    BrandContext,
} from '@/lib/store/context/ProductContext';
import { useGetBrands } from '@/lib/hooks/useGetBrands';
import { IBrand } from '@/lib/types/company.types';
import { getProducts } from '@/actions/products.actions';

const ProductProvider = async ({ children }: { children: React.ReactNode }) => {
    const products = await getProducts();

    const productFilterBy = (filter: ProductFilter): IProduct[] => {
        return products.filter((product) => product[filter]);
    };

    return (
        <ProductContext.Provider value={{ products, productFilterBy }}>
            {children}
        </ProductContext.Provider>
    );
};

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
    const { categories } = useGetProductCategories();
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

const BrandProvider = ({ children }: { children: React.ReactNode }) => {
    const { brands } = useGetBrands();

    const brandFilterBy = (filter: BrandFilter): IBrand[] => {
        return brands.filter((brand) => brand[filter] === filter);
    };

    return (
        <BrandContext.Provider value={{ brands, brandFilterBy }}>
            {children}
        </BrandContext.Provider>
    );
};

export const ProductContentProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <ProductProvider>
            <BrandProvider>
                <CategoryProvider>{children}</CategoryProvider>
            </BrandProvider>
        </ProductProvider>
    );
};

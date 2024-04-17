'use server';

import { IBrand } from '@/lib/types/company.types';
import { ICategory, IProduct } from '@/lib/types/product.types';
import { CategoryFactory } from '@/lib/utils/fixtures';
import { BrandFactory } from '@/lib/utils/fixtures/BrandsFixture';
import { httpService } from '@/lib/utils/http';
import { IDataResponse } from '@/lib/types/query.types';

const errorMessages = Object.freeze({
    productsNotFound: 'Products Not Found',
    categoriesNotFound: 'Categories Not Found',
    brandsNotFound: 'Brands Not Found',
});

export async function getProducts(): Promise<IDataResponse<IProduct>> {
    try {
        const data = await httpService.get<IProduct[]>('products');

        return {
            data,
            error: null,
        };
    } catch (e: unknown) {
        console.error(e);
        return {
            data: [] as IProduct[],
            error: {
                res: e,
                message: errorMessages.productsNotFound,
            },
        };
    }
}

export async function getCategories(): Promise<IDataResponse<ICategory>> {
    try {
        const data = CategoryFactory;

        return {
            data,
            error: null,
        };
    } catch (error: unknown) {
        console.error(error);
        return {
            data: [] as ICategory[],
            error: {
                res: error,
                message: errorMessages.categoriesNotFound,
            },
        };
    }
}

export async function getBrands(): Promise<IDataResponse<IBrand>> {
    try {
        const data = BrandFactory;

        return {
            data,
            error: null,
        };
    } catch (error: unknown) {
        console.error(error);

        return {
            data: [] as IBrand[],
            error: {
                res: error,
                message: errorMessages.brandsNotFound,
            },
        };
    }
}

'use server';

import { ICategory, IProduct } from '@/lib/types/product.types';
import { httpService } from '@/lib/utils/http';

export async function getProducts(): Promise<IProduct[]> {
    try {
        return await httpService.get<IProduct[]>('products');
    } catch (error: unknown) {
        console.error(error);
        return [] as IProduct[];
    }
}

export async function getCategories(): Promise<ICategory> {
    try {
        return await httpService.get<ICategory>('categories');
    } catch (error: unknown) {
        console.error(error);
        return {} as ICategory;
    }
}

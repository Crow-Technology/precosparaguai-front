'use server';

import { BrandFactory } from '@/lib/utils/fixtures/BrandsFixture';
import { IBrand } from '@/lib/types/company.types';

export async function getBrands(): Promise<IBrand[]> {
    try {
        const brands = BrandFactory;
        return brands;
    } catch (error: unknown) {
        console.error(error);

        return [] as IBrand[];
    }
}

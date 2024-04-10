import { IProduct } from '@/lib/interfaces';
import { httpService } from '@/lib/utils/http';

export async function getProducts(): Promise<IProduct[]> {
    try {
        return await httpService.get<IProduct[]>('products');
    } catch (error: unknown) {
        console.error(error);
        return [] as IProduct[];
    }
}

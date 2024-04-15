import { NextResponse } from 'next/server';
import { httpService } from '@/lib/utils/http';

// const ROUTE = 'api/products';

export const GET = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        // const response = await httpService.get<unknown>('products');
        return new NextResponse(JSON.stringify(data));
    } catch (error) {
        console.error(error);
        throw error;
    }
};

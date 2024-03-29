import { NextResponse } from 'next/server';
import { CategoryFactory } from '@/lib/utils/fixtures';

export const GET = async () => {
    try {
        const categories = CategoryFactory;

        return new NextResponse(JSON.stringify(categories), {
            status: 200,
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

import { httpService } from '@/lib/utils/http';
import { NextResponse } from 'next/server';

const ROUTE = 'api/users';

export const POST = async (req: Request, res: Response) => {
    try {
        const userData = await req.json();
        const response = await httpService.post<unknown>(ROUTE, userData);

        return new NextResponse(JSON.stringify(response));
    } catch (error: unknown) {
        console.error(error);
        return new NextResponse(JSON.stringify({ error }), {
            status: 400,
        });
    }
};

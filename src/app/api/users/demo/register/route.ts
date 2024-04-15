'use server';

import { v4 as uuidv4 } from 'uuid';
import { createFixture } from '@/lib/utils/fixtures';
import { NextResponse } from 'next/server';
import { IUserModelDemo } from '@/lib/types/auth.types';
import bcrypt from 'bcrypt';

export const POST = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = await req.json();

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = createFixture<IUserModelDemo>({
            _id: uuidv4(),
            username,
            email,
            hashedPassword,
            timestamps: {
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        }).toStructure();

        console.log(user);
        return new NextResponse(
            JSON.stringify({
                _id: user._id,
                username: user.username,
                email: user.email,
            })
        );
    } catch (error: any) {
        console.log(error);
        return new NextResponse(JSON.stringify({ error: error.message }), {
            status: 400,
        });
    }
};

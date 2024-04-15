
export interface IUserModelDemo {
    _id: string;
    username: string;
    email: string;
    hashedPassword: string;
    timestamps: {
        createdAt: Date;
        updatedAt: Date;
    };
}

export interface RegisterData {
    username?: string;
    email: string;
    password: string;
}

export type UserRegisterPayload = {
    token: string;
    username: string;
    email: string;
} | null;

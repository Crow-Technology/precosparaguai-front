export interface IRating {
    rate: number;
    count: number;
}

export interface ICategory {
    _id: string;
    title: string;
    icon: string;
    subcategories: Record<string, string[]>;
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: IRating;
}

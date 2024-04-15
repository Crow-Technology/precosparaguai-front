import { StaticImageData } from 'next/image';

export type countryRateType = 'USD' | 'BRL' | 'PYG' | 'ARS';

export interface ICurrency {
    name: string;
    id: countryRateType;
    rate: number;
    rateString: string;
    flag: StaticImageData;
}

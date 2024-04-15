import React from 'react';

import { RadioGroup } from '@headlessui/react';
import { ICurrency } from '@/lib/types/currency.types';
import Image from 'next/image';

interface IProps {
    curr: ICurrency;
}

export const QuotationOption = ({ curr }: IProps) => {
    return (
        <RadioGroup.Option
            key={curr.id}
            value={curr}
            className={({ active, checked }) =>
                `
                    ${active ? 'badge bg-base-300 text-base-content shadow-sm' : ''} 
                    ${checked ? 'badge bg-base-300 text-base-content shadow-sm' : 'badge shadow-sm'}
                        cursor-pointer p-4 
                `
            }
        >
            <Image
                src={curr.flag}
                alt="Brazilian flag"
                width={24}
                height={24}
                className="mr-2"
            />
            <RadioGroup.Label as="p">{curr.rateString}</RadioGroup.Label>
        </RadioGroup.Option>
    );
};

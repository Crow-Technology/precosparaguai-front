import { useBrandContext } from '@/lib/store/context/ProductContext';
import React from 'react';
import { Slider } from '../../shared';

interface IProps {}

export const BrandSection = ({}: IProps) => {
    const { brands } = useBrandContext();
    console.log(brands);

    return (
        <section className="mt-4 px-4">
            <div className="contaienr">
                <Slider
                    variant="products"
                    className="relative bg-base-200 "
                    items={brands}
                    imageClasses="rounded-xl object-contain "
                    options={{
                        perPage: 5,
                        gap: '0.5rem',
                    }}
                />
            </div>
        </section>
    );
};

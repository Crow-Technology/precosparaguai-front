import React from 'react';
import { Slider } from '../../shared/Slider';
import { useCategoryContext } from '@/lib/store/context/ProductContext';
import { IGroupedBanners } from '@/lib/types/ui.types';

export const CategorySection = ({}) => {
    const { categories } = useCategoryContext();

    return (
        <section className="mt-5 flex flex-col items-center px-4 py-5">
            <div className="container">
                <h3 className=" -mb-5 py-4 text-center">
                    Compre por categoria
                </h3>
                <Slider
                    variant="products"
                    className="relative "
                    items={categories}
                    options={{
                        perPage: 5,
                        gap: '0.5rem',
                    }}
                />
            </div>
        </section>
    );
};
